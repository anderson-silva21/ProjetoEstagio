import React, { useState } from "react";
import './Login.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Fazer a validação do formulário e enviar as credenciais para o servidor
    };
    return (
        <div class="main-div" id="teste">
          <h1 class="title-app">QQFÉRIAS</h1>
          <div class="modal-login">
            <h1 class="title-login">LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <label class="nome-login">
                Nome
                <input
                    class="input-login"
                    type="text"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                </label>
                <label class="nome-login">
                Senha
                <input
                    class="input-login"
                    id="username"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                </label>
                <button class="login-button" type="submit">ACESSAR</button>
            </form>
        </div>
        </div>
      );
    }

export default Login