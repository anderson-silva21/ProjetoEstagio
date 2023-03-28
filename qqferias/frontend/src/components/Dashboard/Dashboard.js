import React, { useState, useEffect } from 'react';
import './Dashboard.css'
import { faUser, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
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
  const [teste, setteste] = useState([]);
  const [vacationRequests, setVacationRequests] = useState([
    
    { id: 1, name: 'Marcos Silva', data_inicio: '01/03/2023', data_fim: '07/03/2023', status: 'Pendente', type: 'Solicitação de férias', feriasStat: 'Período aquisitivo' },
    { id: 2, name: 'Joice Souza', data_inicio: '01/04/2023', data_fim: '10/04/2023', status: 'Reprovado', type: 'Solicitação de férias', feriasStat: 'Atrasado' },
    { id: 3, name: 'Maria Santos', data_inicio: '15/05/2023', data_fim: '22/05/2023', status: 'Aprovado', type: 'Solicitação de férias com adiantamento do 13º', feriasStat: 'Próximo' },
    { id: 4, name: 'Juliana Fernandes', data_inicio: '10/06/2023', data_fim: '17/06/2023', status: 'Pendente', type: 'Solicitação de férias com adiantamento do 13º', feriasStat: 'Período aquisitivo' },
    { id: 5, name: 'José Carlos', data_inicio: '01/07/2023', data_fim: '07/07/2023', status: 'Pendente', type: 'Solicitação de férias', feriasStat: 'Período aquisitivo' },
    { id: 6, name: 'Ana Paula', data_inicio: '15/08/2023', data_fim: '22/08/2023', status: 'Aprovado', type: 'Solicitação de férias', feriasStat: 'Atrasado' },
    { id: 7, name: 'Roberto Santos', data_inicio: '10/09/2023', data_fim: '17/09/2023', status: 'Pendente', type: 'Solicitação de férias com adiantamento do 13º', feriasStat: 'Próximo' },
    { id: 8, name: 'Fernanda Souza', data_inicio: '01/10/2023', data_fim: '07/10/2023', status: 'Aprovado', type: 'Solicitação de férias', feriasStat: 'Período aquisitivo' },
    { id: 9, name: 'Mariana Silva', data_inicio: '15/11/2023', data_fim: '22/11/2023', status: 'Pendente', type: 'Solicitação de férias', feriasStat: 'Período aquisitivo' },
  ]);

  moment.locale('pt-br');

  useEffect(() => {
    const fetchVacationRequests = async () => {
      try {
        const response = await axios.get('http://localhost:3001/qqferias/agendamentos');
        const events = response.data.filter(event => event.gestor_id === decodedToken.user.id);
        setteste(events);
        console.log(events);
      } catch (error) {
        console.log(error);
        alert('Erro ao receber solicitações');
      }
    };
    fetchVacationRequests();
  }, [decodedToken.user.id]);

  const eventos = vacationRequests.filter(request => request.status === 'aprovada').map(request => ({
    start: moment(request.data_inicio, 'DD/MM/YYYY').toDate(),
    end:  moment(request.data_fim, 'DD/MM/YYYY').toDate(),
    title: request.name,
    desc: request.feriasStat,
    id: request.id,
  }));

  const [visibleRequests, setVisibleRequests] = useState(2);

  const handleShowMore = () => {
    setVisibleRequests(visibleRequests + 2);
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
                      <button type="submit" style={{ background: 'transparent', border: 'none'}} className="iconEdit">
                        <FontAwesomeIcon icon={faPen}  />
                      </button>
                      <button type="submit" style={{ background: 'transparent', border: 'none'}} className="iconEdit">
                        <FontAwesomeIcon icon={faTrash}  />
                      </button>
                      <button className='botao-fim'>Aprovado</button>
                    </div>
                  </>
                )}
                {request.status === 'Reprovado' && (
                  <>
                  <div className='div-stat'>
                    <button type="submit" style={{ background: 'transparent', border: 'none'}} className="iconEdit">
                      <FontAwesomeIcon icon={faPen}  />
                    </button>
                    <button type="submit" style={{ background: 'transparent', border: 'none'}} className="iconEdit">
                      <FontAwesomeIcon icon={faTrash}  />
                    </button>

                    <button className='botao-fim'>Rejeitado</button>
                  </div>
                  </>
                )}
                {request.status === 'Pendente' && (
                  <>
                    <div className='div-stat'>
                      <button id='botao-ap'>Aprovar</button>
                      <button id='botao-rej'>Rejeitar</button>
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