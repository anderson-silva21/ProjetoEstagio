import './QQferias.css';
import React, { useState } from "react";
import Sidebar from '../../components/Sidebar/Sidebar'
import SearchBar from '../../components/Searchbar/Searchbar';
import Dashboard from '../../components/Dashboard/Dashboard';
import VacationCalendar from '../../components/VacationCalendar/VacationCalendar'


function QQferias(){
  const [searchResults, setSearchResults] = useState([]);

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