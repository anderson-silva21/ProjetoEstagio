import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro';
import QQferias from './pages/QQferias/QQferias';
import SolicitacaoFerias from './pages/SolicitacaoFerias/SolicitacaoFerias';
import Colaboradores from './pages/Colaboradores/Colaboradores';
import ColabPage from './pages/ColabPage/ColabPage';
import Solicitacoes from './pages/Solicitacoes/Solicitacoes'

function App() {
  
  const isAuthenticated = localStorage.getItem('jwt') !== null;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={isAuthenticated ? <Cadastro/> : <Navigate to="/login" />} /> 
        <Route path="/qqferias" element={isAuthenticated ? <QQferias/> : <Navigate to="/login" />} /> 
        <Route path="/solicitacao-ferias" element={isAuthenticated ? <SolicitacaoFerias/> : <Navigate to="/login" />} />
        <Route path="/colaboradores" element ={isAuthenticated ? <Colaboradores/> : <Navigate to="/login" />} />
        <Route path="/home" element ={isAuthenticated ? <ColabPage/> : <Navigate to="/login" />} />
        <Route path="/own-application" element={isAuthenticated ? <Solicitacoes/> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
