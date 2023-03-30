import './ColabPage.css';
import React, { useState, useEffect } from "react";
import Sidebar from '../../components/Sidebar/Sidebar'
import SearchBar from '../../components/Searchbar/Searchbar';
import jwtDecode from 'jwt-decode'
import moment from 'moment'

function ColabPage(){
  const [searchResults, setSearchResults] = useState([]);
  const [events, setEvents] = useState([]);
  
  const handleSearch = (query) => {
    // fazer a busca no banco de dados aqui
    // atualizar o estado com os resultados da pesquisa
    setSearchResults([]);
  };

  const decodedToken = jwtDecode(localStorage.getItem('jwt'));
  const dataIngresso = moment(decodedToken.user.dataIngresso, 'YYYY-MM-DD');
  const umAnoAtras = moment().subtract(1, 'years');
  const doisAnosAtras = moment().subtract(2, 'years');

  let statusFerias;

  if (dataIngresso.isAfter(umAnoAtras)) {
    if (dataIngresso.isAfter(doisAnosAtras)) {
      statusFerias = 'Você está atrasado para suas férias.';
    } else {
      statusFerias = 'Você está em período aquisitivo.';
    }
  } else {
    const diasFaltantes = umAnoAtras.diff(dataIngresso, 'days');
    statusFerias = `Faltam ${diasFaltantes} dias para você atingir o período aquisitivo.`;
  }

  return (
    <div className='main'>
      <SearchBar onSearch={handleSearch} />
      <Sidebar userProfile={decodedToken.user.tipoFuncionario}/>
      <main>
        
        <img src={require('../../img/VacationPoster.png')} alt='Poster' id='Poster'/>
        <div className='statusFerias'>
          {statusFerias}
        </div>
        
      </main>
    </div>
  );
};

export default ColabPage;