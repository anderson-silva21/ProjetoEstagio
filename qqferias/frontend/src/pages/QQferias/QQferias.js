import './QQferias.css';
import React, { useState } from "react";
import Sidebar from '../../components/Sidebar/Sidebar'
import SearchBar from '../../components/Searchbar/Searchbar';
import Dashboard from '../../components/Dashboard/Dashboard';

function QQferias(){
  const [searchResults, setSearchResults] = useState([]);
  const [events, setEvents] = useState([]);



  const handleSearch = (query) => {
    // fazer a busca no banco de dados aqui
    // atualizar o estado com os resultados da pesquisa
    setSearchResults([]);
  };

    return (
        <div className='main'>
          <SearchBar onSearch={handleSearch} />
          <Sidebar userProfile={'gestor'} />
          <main>
          <Dashboard />
          </main>
        </div>
      );
};

export default QQferias;
