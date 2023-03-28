import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import QQferias from './pages/QQferias/QQferias';
import SolicitacaoFerias from './pages/SolicitacaoFerias/SolicitacaoFerias';
import Colaboradores from './pages/Colaboradores/Colaboradores';
import ColabPage from './pages/ColabPage/ColabPage';
import Solicitacoes from './pages/Solicitacoes/Solicitacoes';
//import jwtDecode from 'jwt-decode';
import axios from 'axios';

function App() {
  //axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
  const isAuthenticated = localStorage.getItem('jwt') !== null;
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/solicitacao-ferias" element={/*isAuthenticated ? */<SolicitacaoFerias/>/* : <Navigate to="/login" />*/} />
        <Route path="/home" element ={/*isAuthenticated ? */<ColabPage/>/* : <Navigate to="/login" />*/} />
        <Route path="/own-application" element={/*isAuthenticated ? */<Solicitacoes/>/* : <Navigate to="/login" />*/} />
        <Route path="/qqferias" element={/*isAuthenticated  ? */<QQferias/> /*: <Navigate to="/login" />*/} />        
        <Route path="/cadastro" element={/*isAuthenticated /*&& isGestor() ? */<Cadastro/> /*: <Navigate to="/login" />*/ } />        
        <Route path="/colaboradores" element={/*isAuthenticated/* && isGestor() ? */<Colaboradores/>/* : <Navigate to="/login" />*/} />
      </Routes>
    </Router>
  );
}
/*
function isGestor() {
  const token = localStorage.getItem('jwt');
  try  {
    const decodedToken = jwtDecode(token);
    return decodedToken.user.tipoFuncionario === 'Gestor';
  } catch(error) {
    console.log(error);
  }
  return false;
}*/

export default App;
