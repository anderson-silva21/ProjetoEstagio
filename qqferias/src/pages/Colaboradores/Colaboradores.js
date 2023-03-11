import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'
import SearchBar from '../../components/Searchbar/Searchbar'
import { faUser, faTrash, faEdit, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import './Colaboradores.css'

function Colaboradores(){

    const collaborators = [
        { id: 1, name: 'Marcos Silva', team: 'Vendas', role: 'Vendedor', vacationStatus: 'Em período aquisitivo' },
        { id: 2, name: 'Joice Souza', team: 'Desenvolvimento', role: 'Desenvolvedor', vacationStatus: 'Atrasado' },
        { id: 3, name: 'Maria Santos', team: 'Desenvolvimento', role: 'Desenvolvedor', vacationStatus: 'Próximo'},
        { id: 4, name: 'Juliana Fernandes', team: 'Desenvolvimento', role: 'Desenvolvedor', vacationStatus: 'Em período aquisitivo' },
        { id: 5, name: 'José Carlos', team: 'Desenvolvimento', role: 'Desenvolvedor', vacationStatus: 'Em período aquisitivo' },
        { id: 6, name: 'Ana Paula', team: 'Desenvolvimento',  role: 'Desenvolvedor', vacationStatus: 'Próximo'},
        { id: 7, name: 'Roberto Santos', team: 'Marketing', role: 'Analista de Marketing', vacationStatus: 'Em período aquisitivo'},
        { id: 8, name: 'Fernanda Souza', team: 'Vendas', role: 'Vendedor', vacationStatus: 'Em período aquisitivo' },
        { id: 9, name: 'Mariana Silva', team: 'Marketing', role: 'Analista de Marketing', vacationStatus: 'Atrasado'},        
        {id: 10, name: 'Fulano de Tal', team: 'Desenvolvimento', role: 'Desenvolvedor', vacationStatus: 'Atrasado'},        
        {id: 11, name: 'Ciclano da Silva', team: 'Marketing', role: 'Analista de Marketing', vacationStatus: 'Próximo'},        
        {id: 12, name: 'Beltrano dos Santos', team: 'Vendas', role: 'Vendedor', vacationStatus: 'Em período aquisitivo'}    
    ];

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

    return (
        <div>
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
                                <th></th>
                                <th>Nome</th>
                                <th>Time</th>
                                <th>Cargo</th>
                                <th>Status de férias</th>
                            </tr>
                        </thead>
                        <tbody>
                            {collaborators.map(collaborator => (
                                <tr key={collaborator.id} onClick={() => handleCollaboratorClick(collaborator)} className={`${selectedCollaborator && selectedCollaborator.id === collaborator.id ? 'selected' : ''} ${collaborator.id % 2 === 0 ? 'even' : 'odd'}`}>
                                    <td><input type="checkbox" onChange={() => handleCollaboratorClick(collaborator)} checked={selectedCollaborator && selectedCollaborator.id === collaborator.id} />
                                    <FontAwesomeIcon icon={faUser} /></td>
                                    
                                    <td style={{color: '#323C47', fontWeight: '500'}}>{collaborator.name}</td>
                                    <td style={{color: '#707683', fontWeight: 'normal'}}>{collaborator.team}</td>
                                    <td style={{color: '#707683', fontWeight: 'normal'}}>{collaborator.role}</td>
                                    {collaborator.vacationStatus === 'Em período aquisitivo' && (
                                        <td style={{color: '#2ED47A', fontWeight: '500'}}>{collaborator.vacationStatus}</td>
                                    )}
                                    {collaborator.vacationStatus === 'Atrasado' && (
                                        <td style={{color: '#F7685B', fontWeight: '500'}}>{collaborator.vacationStatus}</td>
                                    )}
                                    {collaborator.vacationStatus === 'Próximo' && (
                                        <td style={{color: '#FFB946', fontWeight: '500'}}>{collaborator.vacationStatus}</td>
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