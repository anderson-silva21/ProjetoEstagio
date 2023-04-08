import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'
import SearchBar from '../../components/Searchbar/Searchbar'
import { faUser, faTrash, faEdit, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import './Colaboradores.css'
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/pt-br';

const token = localStorage.getItem('jwt');
const decodedToken = jwtDecode(token);

function Colaboradores(){
    const [collaborators, setCollaborators] = useState([]);
    
    moment.locale('pt-br');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (query) => {
        // fazer a busca no banco de dados ou API aqui
        // atualizar o estado com os resultados da pesquisa
        setSearchResults([]);   
    };

    const [selectedCollaborator, setSelectedCollaborator] = useState(null);

    const handleCollaboratorClick = (collaborator) => {
        setSelectedCollaborator(collaborator);
    }

    useEffect(() => {
        const fetchVacationRequests = async () => {
          try {
            const response = await axios.get(`http://localhost:3001/qqferias/gestores/${decodedToken.user.id}/funcionarios`);
            const events = response.data;
            const newCollaborators = [];
            
            for(let i=0; i<events.length; i++){
              const collaborators = {
                id: events[i]['id'],
                name: events[i]['nome'],    
                email: events[i]['email'],
                matricula: events[i]['matricula'],
                vacationStatus: calculateStatus(events[i]['dataIngresso']),
              };
              newCollaborators.push(collaborators);          
            }
            setCollaborators(newCollaborators);
            
            // percorre a lista de colaboradores e atualiza o status de férias, se necessário
            newCollaborators.forEach(async (collaborator) => {
              try{
                const response = await axios.get(`http://localhost:3001/qqferias/agendamentos/${collaborator.id}/aprovados`);
                const events = response.data;     
                events.forEach((event) => {  
                  if (event.status === 'Aprovado') {
                    collaborator.vacationStatus = 'Em férias';
                  }
                });
                setCollaborators([...newCollaborators]); // atualiza o estado de colaboradores
              } catch (error) {
                console.error(error);
              }
            });
          } catch (error) {
            console.error(error);
          }         
        }      
        fetchVacationRequests();
      }, [decodedToken.user.id]);

      const calculateStatus = (dataIngresso) => {
        const today = moment();
        const diffYears = today.diff(moment(dataIngresso), 'years');
        if (diffYears < 1) {
        return 'Não completou um ano';
        } else if (diffYears < 2) {
        return 'Em período aquisitivo';
        } else {
        return 'Férias atrasadas';
        }
      }

    return (
        <div className='main'>
            <SearchBar onSearch={handleSearch} />
            <Sidebar />
            <main className='main-colab'>
                <Link to="/cadastro">
                    <button className="cad-button" type="submit" style={{width: '10%'}}>
                        <span style={{display: 'block', textAlign: 'center'}}>Adicionar</span>
                        <span style={{display: 'block', textAlign: 'center'}}>Colaborador</span>
                    </button>
                </Link>               
                <div className='lista-colaboradores'>
                    {selectedCollaborator && (
                        <div className='selected-collaborator'>
                            <button type="submit" style={{ background: 'transparent', border: 'none'}}>
                                <FontAwesomeIcon icon={faEdit}  style={{color: '#334D6E'}}/>
                            </button>
                            <button type="submit" style={{ background: 'transparent', border: 'none'}}>
                                <FontAwesomeIcon icon={faTrash}  style={{color: '#334D6E'}}/>
                            </button>
                            <span>{selectedCollaborator.name}</span>
                        </div>
                    )}
                    <div id='div-tabela'>
                    <table className='table-colaboradores'>
                        <thead>
                            <tr>
                                <th style={{textAlign: 'center'}}></th>
                                <th style={{textAlign: 'center'}}>Nome</th>
                                <th style={{textAlign: 'center'}}>Email</th>
                                <th style={{textAlign: 'center'}}>Matricula</th>
                                <th style={{textAlign: 'center'}}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {collaborators.map(collaborator => (
                                <tr key={collaborator.id} onClick={() => handleCollaboratorClick(collaborator)} className={`${selectedCollaborator && selectedCollaborator.id === collaborator.id ? 'selected' : ''} ${collaborator.id % 2 === 0 ? 'even' : 'odd'}`}>
                                    <td><input type="checkbox" onChange={() => handleCollaboratorClick(collaborator)} checked={selectedCollaborator && selectedCollaborator.id === collaborator.id} />
                                    <FontAwesomeIcon icon={faUser} /></td>                          
                                    <td style={{color: '#323C47', fontWeight: '500', wordBreak: 'break-word', textAlign: 'center'}}>{collaborator.name}</td>
                                    <td style={{color: '#707683', fontWeight: 'normal', wordBreak: 'break-word', textAlign: 'center'}}>{collaborator.email}</td>
                                    <td style={{color: '#707683', fontWeight: 'normal', wordBreak: 'break-word', textAlign: 'center'}}>{collaborator.matricula}</td>
                                    {collaborator.vacationStatus === 'Em período aquisitivo' && (
                                        <td style={{color: '#2ED47A', fontWeight: '500', wordBreak: 'break-word', textAlign: 'center'}}>{collaborator.vacationStatus}</td>
                                    )}
                                    {collaborator.vacationStatus === 'Férias atrasadas' && (
                                        <td style={{color: '#F7685B', fontWeight: '500', wordBreak: 'break-word', textAlign: 'center'}}>{collaborator.vacationStatus}</td>
                                    )}
                                    {collaborator.vacationStatus === 'Não completou um ano' && (
                                        <td style={{color: '#FFB946', fontWeight: '500', wordBreak: 'break-word', textAlign: 'center'}}>{collaborator.vacationStatus}</td>
                                    )}
                                    {collaborator.vacationStatus === 'Em férias' && (
                                        <td style={{color: '#109CF1', fontWeight: '500', wordBreak: 'break-word', textAlign: 'center'}}>{collaborator.vacationStatus}</td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>                   
                </div>
            </main>
        </div>
    )
}

export default Colaboradores