import './Cadastro.css';
import React from "react";


function Cadastro() {
    return(
        <div className="main-div">
            <h1 className="title-app">QQFÉRIAS</h1>
            <div className="modal-login">
                <h1 className="title-login">CADASTRO</h1>
                <div className="login-content">
                    <div className="input-container">
                        <label className="nome-login">Nome</label>
                        <input className="input-login" type="text" id="username" required></input>
                    </div>
                    <div className="input-container">
                        <label className="nome-login">Senha</label>
                        <input className="input-login" type="password" id="username" required></input>
                    </div>
                    <div className="input-container">
                        <label className="nome-login">Matricula</label>
                        <input className="input-login" type="text" id="username" required></input>
                    </div>
                    <div className="input-container">
                        <label className="nome-login">Gestor</label>
                        <select className="input-login-selector">
                            <option value="João Gestor">João Gestor</option>
                            <option value="Maria Gestora">Maria Gestora</option>
                        </select>                       
                    </div>
                    <div className="input-container-radio">
                    <label className="nome-login">Tipo de contrato</label>
                        <div className="radio-btn">
                            <input type="radio" name="opcoes1" value="CLT"></input>
                            <label>CLT</label>
                            <input type="radio" name="opcoes1" value="PJ"></input>
                            <label>PJ</label>
                        </div>                  
                    </div>
                    <div className="input-container-radio">
                        <label className="nome-login">Nível</label>
                        <div className="radio-btn">
                            <input  type="radio" name="opcoes" value="Gestor"></input>
                            <label>Gestor</label>
                            <input type="radio" name="opcoes" value="Colaborador"></input>
                            <label>Colaborador</label>
                        </div>
                    </div>
                <button className="login-button" type="submit">CADASTRAR</button>
            </div>
        </div>
    </div>
    );
}

export default Cadastro