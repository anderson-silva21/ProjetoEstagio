import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'
import SearchBar from '../../components/Searchbar/Searchbar'
import './Relatorio.css'
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import moment from 'moment';

function Relatorio (){
    const token = localStorage.getItem('jwt');
    const decodedToken = jwtDecode(token);
    const [searchResults, setSearchResults] = useState([]);
    const [vacationRequests, setVacationRequests] = useState([]);
    const [dataInicio, setDataInicio] = useState("");
    const [dataFim, setDataFim] = useState("");


    moment.locale('pt-br');

    const handleChangeDataInicio = (event) => {
        setDataInicio(event.target.value);
    };
    
    const handleChangeDataFim = (event) => {
        setDataFim(event.target.value);
    };
    
    useEffect(() => {
        const fetchVacationRequests = async () => {
            try {
              const response = await axios.get(`http://localhost:3001/qqferias/gestores/${decodedToken.user.id}/agendamentos-funcionarios`);
              const events = response.data;
              const newVacationRequests = [];
              const addedIds = new Set();
              if (Array.isArray(events.agendamentos) && Array.isArray(events.funcionarios)) {
                for(let i=0; i<events.agendamentos.length; i++){
                  const currentId = events.agendamentos[i]['id'];
                  if(!addedIds.has(currentId)){
                    addedIds.add(currentId);
                    const funcionarioIndex = events.funcionarios.findIndex(f => f.id === events.agendamentos[i]['funcionario_id']);
                    if(funcionarioIndex !== -1) {
                      const vacationRequest = {
                        id: currentId,
                        name: events.funcionarios[funcionarioIndex]['nome'],
                        data_inicio: events.agendamentos[i]['data_inicio'],
                        data_fim: events.agendamentos[i]['data_fim'],
                        status: events.agendamentos[i]['status'],
                        type: events.agendamentos[i]['antecipacao_13_salario'] ? 'Solicitação de férias com adiantamento do 13º' : 'Solicitação de férias',
                        feriasStat: calculateFeriasStat(events.funcionarios[funcionarioIndex]['dataIngresso'])
                      };
                      newVacationRequests.push(vacationRequest);
                    }
                  }
                }
                setVacationRequests(newVacationRequests);
              }
            } catch (error) {
              console.error(error);
            }
          }
          
          fetchVacationRequests();
    }, [decodedToken.user.id]);

    const calculateFeriasStat = (dataIngresso) => {
        const today = moment();
        const diffYears = today.diff(moment(dataIngresso), 'years');
        if (diffYears < 1) {
          return 'Próximo';
        } else if (diffYears < 2) {
          return 'Período aquisitivo';
        } else {
          return 'Atrasado';
        }
      }

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        if (dataInicio > dataFim) {
          alert("A data de início não pode ser maior que a data de fim.");
          return;
        }

        try {
          const requestBody = {
            vacationRequests: vacationRequests,
            dataInicio: dataInicio,
            dataFim: dataFim
          }
          const relatorio = await axios.get(`http://localhost:8000/relatorio`, requestBody, { responseType: 'blob' });
          const url = window.URL.createObjectURL(new Blob([relatorio.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'relatorio.xlsx');
          document.body.appendChild(link);
          link.click();
        } catch (error) {
          console.log(error);
          alert('Erro ao gerar relatório');
        }    
      };
 
    const handleSearch = (query) => {
        // fazer a busca no banco de dados ou API aqui
        // atualizar o estado com os resultados da pesquisa
        setSearchResults([]);
    };

    return(
        <div className='    '>
            <SearchBar onSearch={handleSearch} />
            <Sidebar />
            <div className="main">
                <div className='dive-principal'>
                    <h1>Gerar relatorio</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Selecione o período:
                            <label>Início</label>
                            <input type="date" name="periodo" value={dataInicio} onChange={handleChangeDataInicio} />
                            <label>Fim</label>
                            <input type="date" name="periodo" value={dataFim} onChange={handleChangeDataFim} />
                        </label>
                        <button type="submit" >Gerar relatório</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Relatorio;
