  import './Solicitacoes.css';
  import React, { useState, useEffect } from "react";
  import Sidebar from '../../components/Sidebar/Sidebar';
  import SearchBar from '../../components/Searchbar/Searchbar';
  import axios from 'axios';
  import jwtDecode from 'jwt-decode';

  function QQferias(){
    const [searchResults, setSearchResults] = useState([]);
    const [events, setEvents] = useState([]);
    const token = localStorage.getItem('jwt');
    const decodedToken = jwtDecode(token);

    useEffect(() => {
      const fetchEvents = async () => {
        try {
          const response = await axios.get('http://localhost:3001/qqferias/agendamentos');
          const events = response.data.filter(event => event.funcionario_id === decodedToken.user.id);
          setEvents(events);
        } catch (error) {
          console.log(error);
          alert('Erro ao receber solicitacoes');
        }
      };
      fetchEvents();
    }, [decodedToken.user.id]);
    
    const handleSearch = (query) => {
      // fazer a busca no banco de dados aqui
      // atualizar o estado com os resultados da pesquisa
      setSearchResults([]);
    };

    return (
      <div className='main'>
        <SearchBar onSearch={handleSearch} />
        <Sidebar userProfile={decodedToken.user.tipoFuncionario}/>
        <main>
          <div id='pricipal-div'>
            <h2>Solicitações de férias</h2>
            <ul className="solicitacoes-list">
              {events.map(event => (
                <li key={event.data} className={`solicitacoes-list-item ${event.status === 'Pendente' ? 'pendente' : event.status === 'Rejeitado' ? 'rejeitado' : 'aprovado'}`}>
                  <span>Periodo: {event.data_inicio} à {event.data_fim} -- Dias {event.dias}</span>
                  <span>Decimo terceiro: {event.antecipacao_13_salario ? 'sim' : 'não'}</span>
                  <span>Status: {event.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    );
  };

export default QQferias;