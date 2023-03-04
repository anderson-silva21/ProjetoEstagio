import React, { useState } from "react";
import './Cadastro.css';

function Cadastro() {
    return(
        <div class="main-div" id="teste">
            <h1 class="title-app">QQFÉRIAS</h1>
            <div class="modal-login">
                <h1 class="title-login">CADASTRO</h1>
                <div class="login-content">
                    <div class="input-container">
                        <input class="input-login" type="text" id="username" required></input>
                        <label class="nome-login">Nome</label>
                    </div>
                    <div class="input-container">
                        <input class="input-login" type="password" id="username" required></input>
                        <label class="nome-login">Senha</label>
                    </div>
                    <div class="input-container">
                        <input class="input-login" type="email" id="username" required></input>
                        <label class="nome-login">Email</label>
                    </div>
                    <div class="input-container">
                        <select class="input-login-selector">
                            <option value="João Gestor">João Gestor</option>
                            <option value="Maria Gestora">Maria Gestora</option>
                        </select>
                        <label class="nome-login">Gestor</label>
                    </div>
                    <div class="input-container-radio">
                        <div class="radio-btn">
                            <input type="radio" name="opcoes1" value="CLT"></input>
                            <label>CLT</label>
                            <input type="radio" name="opcoes1" value="PJ"></input>
                            <label>PJ</label>
                        </div>
                        <label class="nome-login-radio">Tipo de contrato</label>
                    </div>
                    <div class="input-container-radio">
                        <div class="radio-btn">
                            <input  type="radio" name="opcoes" value="Gestor"></input>
                            <label>Gestor</label>
                            <input type="radio" name="opcoes" value="Colaborador"></input>
                            <label>Colaborador</label>
                        </div>
                        <label class="nome-login-radio">Nível</label>
                    </div>
                <button class="login-button" type="submit">CADASTRAR</button>
            </div>
        </div>
    </div>
    );
}

export default Cadastro