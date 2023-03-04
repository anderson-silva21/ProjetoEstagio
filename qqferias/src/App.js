import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Cadastro from './components/Cadastro';
import QQferias from './components/QQferias';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} /> 
        <Route path="/qqferias" element={<QQferias/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
