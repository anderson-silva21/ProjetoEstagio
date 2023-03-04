import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SearchBar from './Searchbar';
import './QQferias.css';

function QQferias(){
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // fazer a busca no banco de dados ou API aqui
    // atualizar o estado com os resultados da pesquisa
    setSearchResults([]);
  };

    return (
        <div>
          <SearchBar onSearch={handleSearch} />
          <Sidebar />
          <main>
            <h1>Meu aplicativo React</h1>
            <p>DASHBOARD!!!!    </p>
          </main>
        </div>
      );
};

export default QQferias;