import React, { useState } from 'react';
import './Dashboard.css'
import { faUser, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgressBar from '../ProgressBar/ProgressBar';
import VacationCalendar from '../VacationCalendar/VacationCalendar'
import moment from 'moment';
import 'moment/locale/pt-br';

const Dashboard = () => {
  const [vacationRequests, setVacationRequests] = useState([
    { id: 1, name: 'Marcos Silva', startDate: '01/03/2023', endDate: '07/03/2023', status: 'em análise', type: 'Solicitação de férias', feriasStat: 'Período aquisitivo' },
    { id: 2, name: 'Joice Souza', startDate: '01/04/2023', endDate: '10/04/2023', status: 'rejeitada', type: 'Solicitação de férias', feriasStat: 'Atrasado' },
    { id: 3, name: 'Maria Santos', startDate: '15/05/2023', endDate: '22/05/2023', status: 'aprovada', type: 'Solicitação de férias com adiantamento do 13º', feriasStat: 'Próximo' },
    { id: 4, name: 'Juliana Fernandes', startDate: '10/06/2023', endDate: '17/06/2023', status: 'em análise', type: 'Solicitação de férias com adiantamento do 13º', feriasStat: 'Período aquisitivo' },
    { id: 5, name: 'José Carlos', startDate: '01/07/2023', endDate: '07/07/2023', status: 'em análise', type: 'Solicitação de férias', feriasStat: 'Período aquisitivo' },
    { id: 6, name: 'Ana Paula', startDate: '15/08/2023', endDate: '22/08/2023', status: 'aprovada', type: 'Solicitação de férias', feriasStat: 'Atrasado' },
    { id: 7, name: 'Roberto Santos', startDate: '10/09/2023', endDate: '17/09/2023', status: 'em análise', type: 'Solicitação de férias com adiantamento do 13º', feriasStat: 'Próximo' },
    { id: 8, name: 'Fernanda Souza', startDate: '01/10/2023', endDate: '07/10/2023', status: 'aprovada', type: 'Solicitação de férias', feriasStat: 'Período aquisitivo' },
    { id: 9, name: 'Mariana Silva', startDate: '15/11/2023', endDate: '22/11/2023', status: 'em análise', type: 'Solicitação de férias', feriasStat: 'Período aquisitivo' },
  ]);

  moment.locale('pt-br');

  const eventos = vacationRequests.filter(request => request.status === 'aprovada').map(request => ({
    start: moment(request.startDate, 'DD/MM/YYYY').toDate(),
    end:  moment(request.endDate, 'DD/MM/YYYY').toDate(),
    title: request.name,
    desc: request.feriasStat,
    id: request.id,
  }));

  const [visibleRequests, setVisibleRequests] = useState(2);

  const handleShowMore = () => {
    setVisibleRequests(visibleRequests + 2);
  };

  const completedRequests = vacationRequests.filter(request => request.status !== 'em análise').length;
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
              <h5 id='period'>Período: {request.startDate} à {request.endDate}</h5>
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
                {request.status === 'aprovada' && (
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
                {request.status === 'rejeitada' && (
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
                {request.status === 'em análise' && (
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