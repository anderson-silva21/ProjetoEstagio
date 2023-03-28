import './Login.css';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedInGestor, setLoggedInGestor] = useState(false);
    const [loggedInColab, setLoggedInColab] = useState(false);
    const gestor = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:3001/auth/login' , { matricula: username, senha: password }) //http://localhost:3001/auth/login
            .then(response => {
                console.log(response);
                if (response.data.user.user.tipoFuncionario === 'Gestor') {
                    
                    setLoggedInGestor(true);
                } else if (response.data.user.user.tipoFuncionario === 'Colaborador') {
                    
                    setLoggedInColab(true);
                } else {
                    alert('Nome de usuário ou senha inválidos.');
                }
                localStorage.setItem('jwt', response.data.token.access_token);
                
            })
            .catch(error => {
                console.error(error);
                alert('Ocorreu um erro ao fazer login.');
            });
    };

    if (loggedInGestor) {
        return <Navigate to="/qqferias" />;
    }else if (loggedInColab) {
        return <Navigate to="/home" />;
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
                            name='matricula'
                        />
                    </div>
                    <div className="input-container-login">
                        <label className="nome-login-login">Senha</label>
                        <input
                            required
                            className="input-login-login"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            name="senha"
                        />
                    </div>
                    <button className="login-button-login" type="submit">ACESSAR</button>
                </form>
            </div>
        </div>
    );
}

export default Login