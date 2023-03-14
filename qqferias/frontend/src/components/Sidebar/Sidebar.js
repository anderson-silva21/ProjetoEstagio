import './Sidebar.css';
import React from 'react';
import { faChartLine, faCartFlatbedSuitcase, faPeopleGroup, faSliders} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserMenu from '../UserMenu/UserMenu';


const Sidebar = () => {
    const menuItems = [
        { label: ' DashBoard', path: '/qqferias', icon: faChartLine },
        { label: ' Solicitar férias', path: '/solicitacao-ferias', icon: faCartFlatbedSuitcase },
        { label: ' Colaboradores', path: '/colaboradores', icon: faPeopleGroup},
        //{ label: ' Configurações', path: '/configuracoes', icon: faSliders}
  ];
    
  return (
    <div class = "main-div-sbar">
        <UserMenu name="admin" email="admin@example.com" />
        <ul class ="menu-ul">
            {menuItems.map((item, index) => (
            <li key={index}>
                <a href={item.path}>
                    <FontAwesomeIcon icon={item.icon} style={{color: '#C2CFE0'}}/>
                    {item.label} 
                </a>   
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
