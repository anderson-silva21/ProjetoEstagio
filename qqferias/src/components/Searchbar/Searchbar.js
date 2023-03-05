import './Searchbar.css';
import { faSearch, faBell   } from "@fortawesome/free-solid-svg-icons";
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
        <div style={{ display: 'flex', alignItems: 'center'}} id="main-div">
            <button type="submit" style={{ background: 'transparent', border: 'none', marginLeft: '-40px' }} id="search-button">
                <FontAwesomeIcon icon={faSearch} style={{color: '#C2CFE0'}} />
            </button>
            <input
                type="text"
                placeholder="Procurar colaborador..."
                value={query}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '10px', border: 'none'}}
            />
            <button type="submit" style={{ background: 'transparent', border: 'none', marginLeft: '-40px' }}>
                <FontAwesomeIcon icon={faBell} style={{color: '#C2CFE0'}} />
            </button>
        </div>
    </form>
  );
};

export default Searchbar;