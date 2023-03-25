import './Cadastro.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function Cadastro() {

    const [dadosCadastro, setDadosCadastro] = useState({});
    const [cadastroSucesso, setCadastroSucesso] = useState(false);
    const [gestores, setGestores] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:3001/qqferias/gestores')
        .then(response => {
          setGestores(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const resposta = await axios.post('http://localhost:3001/qqferias/funcionarios/create', dadosCadastro);
          console.log(resposta.data);
          setCadastroSucesso(true);
          alert('Cadastro realizado com sucesso!')
        } catch (erro) {
          console.error(erro);
          alert('Erro no cadastro!');
        }
      };
  
    const handleChange = (event) => {
      setDadosCadastro({
        ...dadosCadastro,
        [event.target.name]: event.target.value,
      });
    };
  
    if (cadastroSucesso) {
      return (
        <div className="main-div">
          
          <Navigate to="/qqferias" />
        </div>
      );
    }

    return(
        <form onSubmit={handleSubmit}>
        <div className="main-div">
            <h1 className="title-app">QQFÉRIAS</h1>
            <div className="modal-login">
                <h1 className="title-login">CADASTRO</h1>
                <div className="login-content">
                    <div className="input-container">
                        <label className="nome-login">Nome</label>
                        <input className="input-login" type="text" id="username" name='nome' required onChange={handleChange}></input>
                    </div>
                    <div className="input-container">
                        <label className="nome-login">Senha</label>
                        <input className="input-login" type="password" id="username" name='senha' required onChange={handleChange}></input>
                    </div>
                    <div className="input-container">
                        <label className="nome-login">Email</label>
                        <input className="input-login" type="email" id="username" name='senha' required onChange={handleChange}></input>
                    </div>
                    <div className="input-container">
                        <label className="nome-login">Matricula</label>
                        <input className="input-login" type="text" id="username" name='matricula' required onChange={handleChange}></input>
                    </div>
                    <div className="input-container">
                        <label className="nome-login">Data de contratação</label>
                        <input className="input-login" type="date" id="username" name='dataIngresso' required onChange={handleChange}></input>
                    </div>
                    <div className="input-container">
                        <label className="nome-login">Gestor</label>
                        <select className="input-login-selector" name='gestorId' onChange={handleChange}>
                          {gestores.map(gestor => (
                            <option key={gestor.id} value={gestor.id}>{gestor.nome}</option>
                          ))}
                        </select>                      
                    </div>
                    <div className="input-container-radio">
                    <label className="nome-login">Tipo de contrato</label>
                        <div className="radio-btn">
                            <input type="radio" name="tipoContrato" value="CLT" onChange={handleChange}></input>
                            <label>CLT</label>
                            <input type="radio" name="tipoContrato" value="PJ" onChange={handleChange}></input>
                            <label>PJ</label>
                        </div>                  
                    </div>
                    <div className="input-container-radio">
                        <label className="nome-login">Nível</label>
                        <div className="radio-btn">
                            <input  type="radio" name="tipoFuncionario" value="Gestor" onChange={handleChange}></input>
                            <label>Gestor</label>
                            <input type="radio" name="tipoFuncionario" value="Colaborador" onChange={handleChange}></input>
                            <label>Colaborador</label>
                        </div>
                    </div>
                <button className="login-button" type="submit">CADASTRAR</button>
            </div>
        </div>
    </div>
    </form>
    );
}

export default Cadastro