import './QQferias.css';
import React, { useState } from "react";
import Sidebar from '../Sidebar/Sidebar'
import SearchBar from '../Searchbar/Searchbar';

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
            
            
          </main>
        </div>
      );
};

export default QQferias;