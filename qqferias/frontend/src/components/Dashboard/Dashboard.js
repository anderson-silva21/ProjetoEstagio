import React, { useState, useEffect } from 'react';
import './Dashboard.css'
import { faUser, faPen, faTrash, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgressBar from '../ProgressBar/ProgressBar';
import VacationCalendar from '../VacationCalendar/VacationCalendar'
import moment from 'moment';
import 'moment/locale/pt-br';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const token = localStorage.getItem('jwt');
const decodedToken = jwtDecode(token);

const Dashboard = () => {

  const [vacationRequests, setVacationRequests] = useState([]);

  moment.locale('pt-br');

  useEffect(() => {
    const fetchVacationRequests = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/qqferias/gestores/${decodedToken.user.id}/agendamentos-funcionarios`);
        const events = response.data;
        const newVacationRequests = [];
        const addedIds = new Set();
        if (Array.isArray(events.agendamentos) && Array.isArray(events.funcionarios)) {
          for(let i=0; i<events.agendamentos.length; i++){
            const currentId = events.agendamentos[i]['id'];
            if(!addedIds.has(currentId)){
              addedIds.add(currentId);
              const funcionarioIndex = events.funcionarios.findIndex(f => f.id === events.agendamentos[i]['funcionario_id']);
              if(funcionarioIndex !== -1) {
                const vacationRequest = {
                  id: currentId,
                  name: events.funcionarios[funcionarioIndex]['nome'],
                  data_inicio: events.agendamentos[i]['data_inicio'],
                  data_fim: events.agendamentos[i]['data_fim'],
                  status: events.agendamentos[i]['status'],
                  type: events.agendamentos[i]['antecipacao_13_salario'] ? 'Solicitação de férias com adiantamento do 13º' : 'Solicitação de férias',
                  feriasStat: calculateFeriasStat(events.funcionarios[funcionarioIndex]['dataIngresso'])
                };
                newVacationRequests.push(vacationRequest);
              }
            }
          }
          setVacationRequests(newVacationRequests);
        }
      } catch (error) {
        console.error(error);
      }
    }
    
    
    fetchVacationRequests();
  }, [decodedToken.user.id]);
  
  const calculateFeriasStat = (dataIngresso) => {
    const today = moment();
    const diffYears = today.diff(moment(dataIngresso), 'years');
    if (diffYears < 1) {
      return 'Próximo';
    } else if (diffYears < 2) {
      return 'Período aquisitivo';
    } else {
      return 'Atrasado';
    }
  }
  
  const eventos = vacationRequests
  .filter(request => request.status === 'Aprovado')
  .map(request => ({
    start: moment(request.data_inicio).toDate(),
    end: moment(request.data_fim).toDate(),
    title: request.name,
    desc: request.feriasStat,
    id: request.id,
  }));


    console.log(eventos);

  const [visibleRequests, setVisibleRequests] = useState(2);

  const handleShowMore = () => {
    setVisibleRequests(visibleRequests + 2);
  };

  const handleApproveRequest = async (id) => {
    try{
      axios.put(`http://localhost:3001/qqferias/agendamentos/${id}/status`, {status: 'Aprovado'});
    }catch (error) {
      console.error(error);
    }
    window.location.reload();
  };

  const handleRejectRequest = async (id) => {
    try{
      axios.put(`http://localhost:3001/qqferias/agendamentos/${id}/status`, {status: 'Reprovado'});
    }catch (error) {
      console.error(error);
    }
    window.location.reload();
  };

  const handleResetRequest = async (id) => {
    try{
      axios.put(`http://localhost:3001/qqferias/agendamentos/${id}/status`, {status: 'Pendente'});
    }catch (error) {
      console.error(error);
    }
    window.location.reload();
  };

  
  const completedRequests = vacationRequests.filter(request => request.status !== 'Pendente').length;
  const totalRequests = vacationRequests.length;
  const progress = Math.floor((completedRequests / totalRequests) * 100);
    
  return (
    <div id='header'>
      <div id='progressbar' style={{ width: '50%' }}>
        <h5 style={{color: '#323C47'}}>{completedRequests} solicitações completadas de {totalRequests}</h5>
        <ProgressBar progress={progress} />
      </div>     
      <div id='main-div-dashboard'>
        {vacationRequests.slice(0, visibleRequests).map((request) => (
            <tr key={request.id} id='main-solicit'>
              <h4 id='titleRequest'>{request.type}</h4>
              <h5 id='period'>Período: {request.data_inicio} à {request.data_fim}</h5>
              <FontAwesomeIcon id='iconUser' icon={faUser} />
              <h5 id='username'>{request.name}</h5>
              {request.feriasStat === 'Período aquisitivo' && (
                <>
                  <h5 id='feriasStat' style={{marginLeft: '50px'}}> Status: </h5>
                  <h5 id='feriasStat' style={{color: '#2ED47A'}}>{request.feriasStat}</h5>
                </>
              )}
              {request.feriasStat === 'Atrasado' && (
                <>
                  <h5 id='feriasStat' style={{marginLeft: '50px'}}> Status: </h5>
                  <h5 id='feriasStat' style={{color: '#F7685B'}}>{request.feriasStat}</h5>
                </>
              )}
              {request.feriasStat === 'Próximo' && (
                <>
                  <h5 id='feriasStat' style={{marginLeft: '50px'}}> Status: </h5>
                  <h5 id='feriasStat' style={{color: '#FFB946'}}>{request.feriasStat}</h5>
                </>
              )}
              <td>
                {request.status === 'Aprovado' && (
                  <>
                    <div className='div-stat'>
                      <button type="submit"
                      onClick={() => handleResetRequest(request.id)}
                      style={{ background: 'transparent', border: 'none'}} 
                      className="iconEdit">
                        <FontAwesomeIcon icon={faRotateLeft}  />
                      </button>
                     
                      <button className='botao-fim'>Aprovado</button>
                    </div>
                  </>
                )}
                {request.status === 'Reprovado' && (
                  <>
                  <div className='div-stat'>
                    <button type="submit" 
                    onClick={() => handleResetRequest(request.id)}
                    style={{ background: 'transparent', border: 'none'}} 
                    className="iconEdit">
                      <FontAwesomeIcon icon={faRotateLeft}  />
                    </button>
                    

                    <button className='botao-fim'>Rejeitado</button>
                  </div>
                  </>
                )}
                {request.status === 'Pendente' && (
                  <>
                    <div className='div-stat'>
                      <button id='botao-ap' onClick={() => handleApproveRequest(request.id)}>Aprovar</button>
                      <button id='botao-rej' onClick={() => handleRejectRequest(request.id)}>Rejeitar</button>
                    </div>
                  </>
                )}
              </td>
            </tr>
          ))}

      </div>
      <div id='showmais'>
        {visibleRequests < vacationRequests.length && (
              <button id='showmore' onClick={handleShowMore}>Mostrar mais</button>
        )}
      </div>
      <div id='calendar'>
            <h3 id='tilte-calendar'>Calendário</h3>
            <VacationCalendar events={eventos} />
          </div>
    </div>
  );
};

export default Dashboard;