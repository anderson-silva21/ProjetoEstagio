import './Sidebar.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { faChartLine, faCartFlatbedSuitcase, faPeopleGroup, faCube, faBars, faUser, faHouse, faFileExcel, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jwtDecode from 'jwt-decode';


const token = localStorage.getItem('jwt');
const decodedToken = jwtDecode(token);

const Sidebar = ({ userProfile }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarExpanded(false);
      } else {
        setIsSidebarExpanded(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  const menuItems = userProfile === "Colaborador" ? [
    { label: 'Home', path: '/home', icon: faHouse },
    { label: 'Solicitar férias', path: '/solicitacao-ferias', icon: faCartFlatbedSuitcase },
    { label: 'Solicitações', path: '/own-application', icon: faCube},
    { label: 'Logout', path: '/login', icon: faRightFromBracket}

  ] : [
    { label: 'DashBoard', path: '/qqferias', icon: faChartLine },
    { label: 'Solicitar férias', path: '/solicitacao-ferias', icon: faCartFlatbedSuitcase },
    { label: 'Colaboradores', path: '/colaboradores', icon: faPeopleGroup},
    { label: 'Solicitações', path: '/own-application', icon: faCube},
    { label: 'Gerar relatório', path: '/relatorio', icon: faFileExcel},
    { label: 'Logout', path: '/login', icon: faRightFromBracket, onClick: handleLogout }
  ];

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className={`main-div-sbar ${isSidebarExpanded ? "" : "collapsed"}`}> 
      <button className={`sidebar-toggle-button ${isSidebarExpanded ? "" : "collapsed"}`} onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} style={{color: '#C2CFE0', border:'none'}}/>
      </button>
      <div class={`icon ${isSidebarExpanded ? "" : "collapsed"}`}>
        <FontAwesomeIcon id='iconUserMenu' icon={faUser} />
        <p id='name' style={{display: isSidebarExpanded ? "block" : "none"}}>{decodedToken.user.nome}</p>
        <p id='email' style={{display: isSidebarExpanded ? "block" : "none"}}>{decodedToken.user.email}</p>
      </div>
      
      <ul className="menu-ul">
        {menuItems.map((item, index) => (
          <li key={index} className={isSidebarExpanded ? "" : "collapsed"}>
            <a href={item.path} id="a-icon">
              <FontAwesomeIcon icon={item.icon} style={{color: '#C2CFE0'}}/>
              <span className="menu-item-label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
