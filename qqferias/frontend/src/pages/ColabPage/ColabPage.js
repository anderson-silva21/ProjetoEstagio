import './ColabPage.css';
import React, { useState, useEffect } from "react";
import Sidebar from '../../components/Sidebar/Sidebar'
import SearchBar from '../../components/Searchbar/Searchbar';
import jwtDecode from 'jwt-decode'
import moment from 'moment'
import axios from 'axios';

function ColabPage(){
  const [searchResults, setSearchResults] = useState([]);
  const [events, setEvents] = useState([]);
  const [aproved, setAproved] = useState([]);
  const handleSearch = (query) => {
    // fazer a busca no banco de dados aqui
    // atualizar o estado com os resultados da pesquisa
    setSearchResults([]);
  };
  
    useEffect(() => {
      const fetchAprovedVacations = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/qqferias/agendamentos/${decodedToken.user.id}`);
          const aprovados = response.data.filter((vacation) => vacation.status === 'Aprovado');
          setAproved(aprovados);
          console.log(aprovados);
        } catch (error) {
          console.error(error);
        }
      };
      fetchAprovedVacations();
    }, []);
  
  const decodedToken = jwtDecode(localStorage.getItem('jwt'));

  const umAnoEmMs = moment.duration(1, 'year').asMilliseconds();
  const umAnoAtras = moment().subtract(1, 'year').toDate();
  const doisAnosEmMs = moment.duration(2, 'years').asMilliseconds();
  const doisAnosAtras = moment().subtract(2, 'years').toDate();
  const dataAtual = new Date().getTime();
  const dataIngresso = moment(decodedToken.user.dataIngresso).toDate().getTime();
  
  let statusFerias;
  const diasAteUmAno = Math.ceil((dataIngresso - umAnoAtras.getTime()) / (1000 * 3600 * 24));
  const diasAteDoisAnos = Math.ceil((doisAnosAtras.getTime() - dataIngresso) / (1000 * 3600 * 24));
  
  if (dataAtual - dataIngresso < umAnoEmMs) {
    statusFerias = `Você não possui um ano de empresa, ainda faltam ${diasAteUmAno} dias.`;
  } else if (dataAtual - dataIngresso >= doisAnosEmMs) {
    statusFerias = 'Você possui férias atrasadas. Procure o seu gestor';
  } else {
    statusFerias = 'Você está em período aquisitivo.';
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