import './Solicitacoes.css';
import React, { useState } from "react";
import Sidebar from '../../components/Sidebar/Sidebar'
import SearchBar from '../../components/Searchbar/Searchbar';


function QQferias(){
  const [searchResults, setSearchResults] = useState([]);
  const [events, setEvents] = useState([
    {data: "01/01/2023", decimoTerceiro: true, status: "Pendente"},
    {data: "10/01/2023", decimoTerceiro: false, status: "Aprovado"},
    {data: "03/01/2023", decimoTerceiro: true, status: "Rejeitado"}
  ]);

  const handleSearch = (query) => {
    // fazer a busca no banco de dados aqui
    // atualizar o estado com os resultados da pesquisa
    setSearchResults([]);
  };

  return (
    <div className='main'>
      <SearchBar onSearch={handleSearch} />
      <Sidebar />
      <main>
        <div id='pricipal-div'>
          <h2>Solicitações de férias</h2>
          <ul className="solicitacoes-list">
            {events.map(event => (
              <li key={event.data} className={`solicitacoes-list-item ${event.status === 'Pendente' ? 'pendente' : event.status === 'Rejeitado' ? 'rejeitado' : 'aprovado'}`}>
                <span>Data da solicitação: {event.data}</span>
                <span>Decimo terceiro: {event.decimoTerceiro ? 'sim' : 'não'}</span>
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
