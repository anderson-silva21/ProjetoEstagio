import React, { useState } from "react";
import './Cadastro.css';

function Cadastro() {
    return(
        <div className="main-div" id="teste">
            <h1 className="title-app">QQFÉRIAS</h1>
            <div className="modal-login">
                <h1 className="title-login">CADASTRO</h1>
                <div className="login-content">
                    <div className="input-container">
                        <input className="input-login" type="text" id="username" required></input>
                        <label className="nome-login">Nome</label>
                    </div>
                    <div className="input-container">
                        <input className="input-login" type="password" id="username" required></input>
                        <label className="nome-login">Senha</label>
                    </div>
                    <div className="input-container">
                        <input className="input-login" type="email" id="username" required></input>
                        <label className="nome-login">Email</label>
                    </div>
                    <div className="input-container">
                        <select className="input-login-selector">
                            <option value="João Gestor">João Gestor</option>
                            <option value="Maria Gestora">Maria Gestora</option>
                        </select>
                        <label className="nome-login">Gestor</label>
                    </div>
                    <div className="input-container-radio">
                        <div className="radio-btn">
                            <input type="radio" name="opcoes1" value="CLT"></input>
                            <label>CLT</label>
                            <input type="radio" name="opcoes1" value="PJ"></input>
                            <label>PJ</label>
                        </div>
                        <label className="nome-login-radio">Tipo de contrato</label>
                    </div>
                    <div className="input-container-radio">
                        <div className="radio-btn">
                            <input  type="radio" name="opcoes" value="Gestor"></input>
                            <label>Gestor</label>
                            <input type="radio" name="opcoes" value="Colaborador"></input>
                            <label>Colaborador</label>
                        </div>
                        <label className="nome-login-radio">Nível</label>
                    </div>
                <button className="login-button" type="submit">CADASTRAR</button>
            </div>
        </div>
    </div>
    );
}

export default Cadastro