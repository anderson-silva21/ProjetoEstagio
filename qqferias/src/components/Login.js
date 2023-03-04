import React, { useState } from "react";
import './Login.css';
import { Navigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'admin' && password === 'admin') {
            setLoggedIn(true);
        } else { 
            alert('Nome de usuário ou senha inválidos.');
        }
    };

    if (loggedIn) {
        return <Navigate to= "/qqferias" />;
    }

    return (
        <div class="main-div" id="teste">
          <h1 class="title-app">QQFÉRIAS</h1>
          <div class="modal-login">
            <h1 class="title-login">LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <div class="input-container">
                    <input 
                        required
                        class="input-login"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <label class="nome-login">Nome</label>
                </div>
                <div class="input-container">    
                    <input
                        required
                        class="input-login"
                        id="username"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <label class="nome-login">Senha</label>
                </div>
                
                <button class="login-button" type="submit">ACESSAR</button>
            </form>
        </div>
        </div>
      );
    }


export default Login