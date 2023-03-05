import './UserMenu.css';
import React from 'react';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const UserMenu = ({ name, email }) => {
  return (
    <div class="icon">
        <FontAwesomeIcon id='teste' icon={faUser} />
    
        <p id='name'>{name}</p>
        <p id='email'>{email}</p>
    </div>
  );
};

export default UserMenu;