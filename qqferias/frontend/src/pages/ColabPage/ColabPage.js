import './ColabPage.css';
import React, { useState } from "react";
import Sidebar from '../../components/Sidebar/Sidebar'
import SearchBar from '../../components/Searchbar/Searchbar';
import Dashboard from '../../components/Dashboard/Dashboard';
import VacationCalendar from '../../components/VacationCalendar/VacationCalendar'


function ColabPage(){
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
          <Sidebar userProfile={'colaborador'}/>
          <main>
            
            <img src={require('../../img/VacationPoster.png')} alt='Poster' id='Poster'/>
            
            
          </main>
        </div>
      );
};

export default ColabPage;
