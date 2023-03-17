import './Sidebar.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { faChartLine, faCartFlatbedSuitcase, faPeopleGroup, faCube, faBars, faUser, faHouse, faFileExcel} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  const menuItems = userProfile === "colaborador" ? [
    { label: 'Home', path: '/home', icon: faHouse },
    { label: 'Solicitar férias', path: '/solicitacao-ferias', icon: faCartFlatbedSuitcase },
    { label: 'Colaboradores', path: '/colaboradores', icon: faPeopleGroup},
    { label: 'Solicitações', path: '/own-application', icon: faCube}
  ] : [
    { label: 'DashBoard', path: '/qqferias', icon: faChartLine },
    { label: 'Solicitar férias', path: '/solicitacao-ferias', icon: faCartFlatbedSuitcase },
    { label: 'Colaboradores', path: '/colaboradores', icon: faPeopleGroup},
    { label: 'Solicitações', path: '/own-application', icon: faCube},
    { label: 'Gerar relatório', path: '/relatorio', icon: faFileExcel}
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
        <p id='name' style={{display: isSidebarExpanded ? "block" : "none"}}>{userProfile === "colaborador" ? "colab" : "admin"}</p>
        <p id='email' style={{display: isSidebarExpanded ? "block" : "none"}}>{userProfile === "colaborador" ? "colab@example.com" : "admin@example.com"}</p>
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
