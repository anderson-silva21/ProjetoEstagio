import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro';
import QQferias from './pages/QQferias/QQferias';
import SolicitacaoFerias from './pages/SolicitacaoFerias/SolicitacaoFerias';
import Colaboradores from './pages/Colaboradores/Colaboradores';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} /> 
        <Route path="/qqferias" element={<QQferias/>} /> 
        <Route path="/solicitacao-ferias" element={<SolicitacaoFerias/>} />
        <Route path="/colaboradores" element ={<Colaboradores/>} />
      </Routes>
    </Router>
  );
}

export default App;
