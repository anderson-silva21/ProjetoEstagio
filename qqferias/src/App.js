import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login'
import Cadastro from './components/Cadastro/Cadastro';
import QQferias from './components/QQferias/QQferias';
import SolicitacaoFerias from './components/SolicitacaoFerias/SolicitacaoFerias';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} /> 
        <Route path="/qqferias" element={<QQferias/>} /> 
        <Route path="/solicitacao-ferias" element={<SolicitacaoFerias/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
