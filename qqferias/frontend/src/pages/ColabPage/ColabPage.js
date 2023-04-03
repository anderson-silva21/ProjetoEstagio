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
  const [loading, setLoading] = useState(false);
  const [aproved, setAproved] = useState([]);
  const handleSearch = (query) => {
    // fazer a busca no banco de dados aqui
    // atualizar o estado com os resultados da pesquisa
    setSearchResults([]);
  };

  const buscaAgendConcluidos = async () =>{
    setLoading(true);

    try {
      const response = await axios.get(`/qqferias/agendamentos/${decodedToken.user.id}`);
      const aprovados = response.data.filter((vacation) => vacation.status === 'Aprovado');
      setAproved(aprovados);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const decodedToken = jwtDecode(localStorage.getItem('jwt'));

  const dataIngresso_Formated = moment(decodedToken.user.dataIngresso).format('YYYY-MM-DD');
  const umAnoAtras_Formated = moment().subtract(1, 'years').format('YYYY-MM-DD');
  const doisAnosAtras_Formated = moment().subtract(2, 'years').format('YYYY-MM-DD');

  const dataIngresso = new Date(dataIngresso_Formated);
  const umAnoAtras = new Date(umAnoAtras_Formated);
  const doisAnosAtras = new Date(doisAnosAtras_Formated);
  
  const total = 30; // dias em um ano
  let totalDiasAprovados = 0;

  for (let i = 0; i < aproved.length; i++) {
    totalDiasAprovados += aproved[i].dias;
  }
  
  let statusFerias;
  console.log(dataIngresso);
  console.log(doisAnosAtras);
  if (dataIngresso >= doisAnosAtras) {
    statusFerias = 'Você está atrasado para suas férias.';
  } else if (dataIngresso >= umAnoAtras) {
    if (totalDiasAprovados >= total) {
      statusFerias = 'Você já tirou todas as suas férias deste ano.';
    } else {
      const diasRestantes = total - totalDiasAprovados;
      statusFerias = `Faltam ${diasRestantes} dias para você tirar todas as suas férias deste ano.`;
    }

  } else {
    statusFerias = 'Você ainda não completou um ano de empresa.';
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