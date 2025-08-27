import './App.css';
import MainPage from './pages/MainPage';
import AdminDashboard from './pages/AdminDashboard';
import LoginAdmin from './pages/LoginAdmin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import Header from './components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollUpButton from './components/ScrollUpButton';
import FloatingWsp from './components/FloatingWsp';




function App() {
  useEffect(() => {
    if (window.location.pathname === '/') {
      const lastVisit = localStorage.getItem('ultimaVisita');
      const now = Date.now();
      // Solo registrar si pasaron más de 60 segundos desde la última visita
      if (!lastVisit || now - parseInt(lastVisit) > 60000) {
  axios.get('https://ochodesignweb.com/backend/registrarVisita.php');
        localStorage.setItem('ultimaVisita', now.toString());
      }
    }
  }, []);
    useEffect(() => {
      AOS.init({
        duration: 900,
        easing: 'ease-in-out',
        once: true,
        offset: 60,
      });
    }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={localStorage.getItem('adminAuth') === 'true' ? <AdminDashboard /> : <LoginAdmin />} />
      </Routes>
      <ScrollUpButton />
      <FloatingWsp />
    </BrowserRouter>
  );
}

export default App;
