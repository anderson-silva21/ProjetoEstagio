import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import QQferias from './pages/QQferias/QQferias';
import SolicitacaoFerias from './pages/SolicitacaoFerias/SolicitacaoFerias';
import Colaboradores from './pages/Colaboradores/Colaboradores';
import ColabPage from './pages/ColabPage/ColabPage';
import Solicitacoes from './pages/Solicitacoes/Solicitacoes';
import Relatorio from './pages/Relatorio/Relatorio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/solicitacao-ferias" element={<SolicitacaoFerias/>} />
        <Route path="/home" element ={<ColabPage/>} />
        <Route path="/own-application" element={<Solicitacoes/>} />
        <Route path="/qqferias" element={<QQferias/>} />        
        <Route path="/cadastro" element={<Cadastro/>} />        
        <Route path="/colaboradores" element={<Colaboradores/>} />
        <Route path="/relatorio" element={<Relatorio/>}/>
      </Routes>
    </Router>
  );
}

export default App;
