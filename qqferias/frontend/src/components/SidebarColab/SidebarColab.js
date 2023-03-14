import './SidebarColab.css';
import React from 'react';
import { faHouse, faCartFlatbedSuitcase, faPeopleGroup, faSliders} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserMenu from '../UserMenu/UserMenu';


const Sidebar = () => {
    const menuItems = [
        { label: ' Home', path: '/home', icon: faHouse },
        { label: ' Solicitar férias', path: '/solicitacao-ferias', icon: faCartFlatbedSuitcase },
        { label: ' Colaboradores', path: '/colaboradores', icon: faPeopleGroup},
        //{ label: ' Configurações', path: '/configuracoes', icon: faSliders}
  ];
    
  return (
    <div class = "main-div-sbar">
        <UserMenu name="colab" email="colab@example.com" />
        <ul class ="menu-ul">
            {menuItems.map((item, index) => (
            <li key={index}>
                <a href={item.path} id="itemSideBar">
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
