import './Login.css';
import React, { useState } from 'react';
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
        <div className="main-div-login">
            <h1 className="title-app-login">QQFÉRIAS</h1>
            <div className="modal-login-login">
                <h1 className="title-login-login">LOGIN</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-container-login">
                        <label className="nome-login-login">Matricula</label>
                        <input 
                            required
                            className="input-login-login"
                            type="text"
                            id="username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="input-container-login"> 
                        <label className="nome-login-login">Senha</label>   
                        <input
                            required
                            className="input-login-login"
                            id="username"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />               
                    </div>
                    <button className="login-button-login" type="submit">ACESSAR</button>
                </form>
            </div>
        </div>
      );
    }

export default Login