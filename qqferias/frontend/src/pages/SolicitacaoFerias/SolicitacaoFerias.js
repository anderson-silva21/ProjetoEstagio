import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer, Year } from 'react-big-calendar';
import { Month } from 'react-big-calendar';
import moment, { months } from 'moment';
import 'moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './SolicitacaoFerias.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import SearchBar from '../../components/Searchbar/Searchbar';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const token = localStorage.getItem('jwt');
const decodedToken = jwtDecode(token);
const localizer = momentLocalizer(moment);

function MyCalendar(){
    const [dadosSolicit, setDadosSolicit] = useState({});

    const [solicitSucesso, setSolicitSucesso] = useState(false);

    const [decimoTerceiro, setdecimoTerceiro] = useState(false);

    const [searchResults, setSearchResults] = useState([]);

    const [events, setEvents] = useState();

    const [selectedMonth, setSelectedMonth] = useState('a definir');

    const [selectedDays, setSelectedDays] = useState(0);

    const [selectedOption, setSelectedOption] = useState('');

    const [endDate, setEndDate] = useState('a definir');

    const [diasGozados, setDiasGozados] = useState(0);

    const [diasAprovados, setDiasAprovados] = useState([]);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    const handleDecimoTerceiroChange = (event) => {
        setdecimoTerceiro(Boolean(event.target.value));
    }

    const handleDayChange = (event) => {
        setSelectedDays(event.target.value);
    }

    const handleSearch = (query) => {
        // fazer a busca no banco de dados ou API aqui
        // atualizar o estado com os resultados da pesquisa
        setSearchResults([]);
    };

    const getVacations = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/qqferias/agendamentos/${decodedToken.user.id}`);
            const vacations = response.data.filter((vacation) => vacation.status === 'Aprovado');
            const days = vacations.reduce(
            (totalDays, vacation) => (totalDays += (moment(vacation.data_fim).diff(moment(vacation.data_inicio), 'days') + 1)),0);
            setDiasGozados(days);
            const aprovados = vacations.map((vacation) => vacation.dias);
            setDiasAprovados(aprovados);
            
        } catch (error) {
            console.log(error);
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        getVacations();
        console.log("dias ja gozados:"+diasGozados);
        const umAnoAtras = moment().subtract(1, 'year');
        const dataIngresso = moment(decodedToken.user.dataIngresso);
        const vacationsLeft = 30 - diasGozados;
        const totalVacationDays = Number(selectedDays);
        const hasEnoughVacationDays = totalVacationDays + diasGozados <= 30;
        const remainingVacationDays = vacationsLeft - totalVacationDays;
        /*solicitacoes possiveis
            5 5 5 15
            10 5 15
            15 15
            20 5 5
            20 10
            30
        */
        const quinzedias = (diasAprovados.slice(0, 2).reduce((a, b) => a + b, 0) === 15) ||
                        (diasAprovados.slice(0, 3).reduce((a, b) => a + b, 0) === 15);

        if (dataIngresso.isAfter(umAnoAtras)) {
            alert('Falha na solicitação!\nNão é possível solicitar férias antes de completar um ano na empresa.');
            return;
        }
    
        if (selectedDays === 0) {
            alert('Falha na solicitação!\nPor favor, selecione a quantidade de dias de férias a serem solicitadas.');
            return;
        }

        if(totalVacationDays > vacationsLeft){
            alert('Falha na solicitação!\nVocê não possui ' + totalVacationDays + "de saldo para tirar férias.");
            return;
        }

        if(!hasEnoughVacationDays){
            alert('Falha na solicitação!\nVocê não possui saldo de dias férias suficiente.');
            return;
        }

        if(quinzedias && totalVacationDays != 15){
            alert('Falha na solicitação!\nVocê precisa selecionar ao menos um periodo de 15 dias durantes seu período aquisitivo.')
        }
        
        const data = {
            funcionario_id: decodedToken.user.id, 
            data_inicio: moment(`${selectedOption} ${selectedMonth}`, 'D MMMM').format(),
            data_fim: moment(`${selectedOption} ${selectedMonth}`, 'D MMMM').add(selectedDays, 'days').format(),
            status: 'Pendente',
            dias: selectedDays,
            antecipacao_13_salario: decimoTerceiro,
            gestor_id: decodedToken.user.gestorId,
        };
    
        try {
            await axios.post('http://localhost:3001/qqferias/agendamentos/create', data);
            setSolicitSucesso(true);
            alert('Sucesso na solicitacao, você ainda possui ' + remainingVacationDays + ' dias de saldo para solicitar durante esse periodo aquisitivo caso essa solicitação seja aceita.');
            sendNotifications();
            sendWorkplace();
        } catch (error) {
            console.log(error);
            alert('Erro no envio da solicitacao');
        }
    };

    useEffect(() => {
        if (selectedDays && selectedOption) {
          const start = moment(`${selectedOption} ${selectedMonth}`, 'D MMMM');
          const end = start.clone().add(selectedDays, 'days'); 
          setEndDate(end.format('DD/MM/YYYY'));
        } else {
          setEndDate('a definir');
        }
    }, [selectedDays, selectedOption, selectedMonth]);
    

    const sendNotifications = async () => {
        if(solicitSucesso){
            axios.post("http://localhost:8000/send-email");
        }
    }

    const sendWorkplace = async () => {
        if(solicitSucesso){
            axios.post("http://localhost:8000/send-message");
        }
    }
    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <Sidebar userProfile={decodedToken.user.tipoFuncionario}/>
            <main className='main'>
                <div id='calendario'>
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: '70vh' }}
                    />
                </div>
                <form onSubmit={handleSubmit}>    
                <div id='sidemenu'>
                    <div className="login-content">
                        
                        <div className="input-container">
                            <label className="nome-login">Mês</label>
                            <select className="input-solicit-selector" value={selectedMonth} onChange={handleMonthChange}>
                                <option value="Janeiro">Janeiro</option>
                                <option value="Fevereiro">Fevereiro</option>
                                <option value="Marco">Março</option>
                                <option value="Abril">Abril</option>
                                <option value="Maio">Maio</option>
                                <option value="Junho">Junho</option>
                                <option value="Julho">Julho</option>
                                <option value="Agosto">Agosto</option>
                                <option value="Setembro">Setembro</option>
                                <option value="Outubro">Outubro</option>
                                <option value="Novembro">Novembro</option>
                                <option value="Dezembro">Dezembro</option>
                            </select>                       
                        </div>
                        <div className="input-container-radio">
                            <label className="nome-login">Quantidade de dias</label>
                            <div className="radio-btn">
                                <input type="radio" name="opcoes1" value="05" checked={selectedDays === '05'} onChange={handleDayChange}></input>
                                <label>05</label>
                                <input type="radio" name="opcoes1" value="10" checked={selectedDays === '10'} onChange={handleDayChange}></input>
                                <label>10</label>
                                <input type="radio" name="opcoes1" value="15" checked={selectedDays === '15'} onChange={handleDayChange}></input>
                                <label>15</label>
                                <input type="radio" name="opcoes1" value="20" checked={selectedDays === '20'} onChange={handleDayChange}></input>
                                <label>20</label>
                                <input type="radio" name="opcoes1" value="30" checked={selectedDays === '30'} onChange={handleDayChange}></input>
                                <label>30</label>
                            </div>                  
                        </div>
                        <div className="input-container-radio">
                            <div className="radio-btn">
                                <input  type="checkbox" 
                                        name="opcoes" 
                                        value="decimo-terceiro" 
                                        onChange={handleDecimoTerceiroChange}
                                        disabled={decodedToken.user.tipoContrato !== 'CLT'}>
                                </input>
                                <label>Adiantamento do 13º</label>
                            </div>
                        </div>
                        <div className='input-container-begin'>
                            <label className= 'nome-login'>Inicio</label>
                            <select className='input-solicit-selector' onChange={handleSelectChange}>
                                {Array.from({ length: moment().daysInMonth() }, (_, i) => i + 1)
                                .map(day => (
                                    <option key={day} value={day}>
                                    {day} de {selectedMonth}
                                    </option>
                                ))}
                            </select>
                            <div className='end-selector'>
                                <label className= 'nome-login'>Fim</label>
                                <label className='end-date-selector'>{endDate}</label>
                            </div>
                        </div>
                    <button className="solicit-button" type="submit">Enviar solicitacao para o gestor</button>
                </div>
            </div>
            </form>    
            </main>
        </div>     
    )
};

export default MyCalendar