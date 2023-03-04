import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import './Login.css';

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
        <div className="main-div" id="teste">
          <h1 className="title-app">QQFÉRIAS</h1>
          <div className="modal-login">
            <h1 className="title-login">LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input 
                        required
                        className="input-login"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <label className="nome-login">Nome</label>
                </div>
                <div className="input-container">    
                    <input
                        required
                        className="input-login"
                        id="username"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <label className="nome-login">Senha</label>
                </div>
                
                <button className="login-button" type="submit">ACESSAR</button>
            </form>
        </div>
        </div>
      );
    }


export default Login