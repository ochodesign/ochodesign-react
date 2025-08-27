import HeroSection from '../components/HeroSection';
import Beneficios from '../components/Beneficios';
import ProcesoTrabajo from '../components/ProcesoTrabajo';
import Servicios from '../components/Servicios';
import Proyectos from '../components/Proyectos';
import InvitacionesDigitales from '../components/InvitacionesDigitales';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

const MainPage = () => (
  <Box>
    <HeroSection />
    <Beneficios />
    <ProcesoTrabajo />
    <Servicios />
    <Proyectos />
    <InvitacionesDigitales />
    <Contacto />
    <Footer />
  </Box>
);

export default MainPage;
