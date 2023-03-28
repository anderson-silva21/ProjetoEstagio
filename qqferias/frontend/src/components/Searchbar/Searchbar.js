import './Searchbar.css';
import { faSearch  } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import React, { useState } from 'react';

const Searchbar = ({ onSearch }) => {

  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} id="main">
        <div style={{ display: 'relative', alignItems: 'center'}} id="main-div">
          <h2 class="title-menu">QQF</h2>
            <button type="submit" style={{ background: 'transparent', border: 'none', marginLeft: '-40px' }} id="search-button">
                <FontAwesomeIcon icon={faSearch} style={{color: '#C2CFE0'}} />
            </button>
            <input id='input-search'
                type="text"
                placeholder="Procurar colaborador..."
                value={query}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '10px', border: 'none'}}      
            />
            {/* 
            <button type="submit" style={{ background: 'transparent', border: 'none'}} id="notification-button">
                <FontAwesomeIcon icon={faBell}  />
            </button>
            */}
        </div>
    </form>
  );
};

export default Searchbar;