import './QQferias.css';
import React, { useState } from "react";
import Sidebar from '../Sidebar/Sidebar'
import SearchBar from '../Searchbar/Searchbar';
import Dashboard from '../Dashboard/Dashboard';
import VacationCalendar from '../VacationCalendar/VacationCalendar'


function QQferias(){
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // fazer a busca no banco de dados ou API aqui
    // atualizar o estado com os resultados da pesquisa
    setSearchResults([]);
  };

    return (
        <div className='main'>
          <SearchBar onSearch={handleSearch} />
          <Sidebar />
          <main>
          <Dashboard />
          <div id='calendar'>
            <h3 id='tilte-calendar'>Calendário</h3>
            <VacationCalendar />
          </div>
            
          </main>
        </div>
      );
};

export default QQferias;