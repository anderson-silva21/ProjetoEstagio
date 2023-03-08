import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';


import Sidebar from '../Sidebar/Sidebar'
import SearchBar from '../Searchbar/Searchbar';

const localizer = momentLocalizer(moment);

function MyCalendar(){
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (query) => {
      // fazer a busca no banco de dados ou API aqui
      // atualizar o estado com os resultados da pesquisa
      setSearchResults([]);
    };
    return (
        <div className='main'>
            <SearchBar onSearch={handleSearch} />
            <Sidebar />
            <main>
                <div id='calendario'>
                    <Calendar
                    localizer={localizer}
                    startAccessor="start"
                    endAccessor="end"
                    />
                </div>
                
            </main>
        </div>
    )
};

export default MyCalendar