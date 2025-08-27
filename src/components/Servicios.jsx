import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Header from './Header';

const servicios = [
  {
    icon: <WebIcon color="primary" sx={{ fontSize: 44 }} />,
    title: 'Desarrollo Web Profesional',
    items: [
      'One Page o Landing Page',
      'Optimización SEO',
      'Formulario funcional',
      'Integración de Google Maps',
      'Redes sociales',
    ],
  },
  {
    icon: <DesignServicesIcon color="secondary" sx={{ fontSize: 44 }} />,
    title: 'Diseño y Experiencia de Usuario (UI/UX)',
    items: [
      'Experiencias centradas en el usuario',
      'Arquitectura de información clara',
      'Microinteracciones que enamoran',
      'Prototipos funcionales y testeados',
      'Diseños adaptados a todas las pantallas',
    ],
  },
  {
    icon: <SupportAgentIcon color="success" sx={{ fontSize: 44 }} />,
    title: 'Soporte y Mantenimiento',
    items: [
      'Web siempre online y actualizada',
      'Solución de problemas',
      'Actualizaciones de seguridad',
      'Soporte personalizado',
    ],
  },
  {
    icon: <DashboardIcon color="warning" sx={{ fontSize: 44 }} />,
    title: 'Panel de Administración',
    items: [
      'Estadísticas de visitas diarias, semanales y mensuales',
      'Gestión de formularios completados',
      'Panel fácil y seguro',
      'Control total de tu web',
    ],
  },
];

const Servicios = () => (
  <>
    <Header />
  <section id="servicios" className="w-full py-16 px-4 bg-gradient-to-br from-[#18181b] via-[#23232a] to-[#0d0d0d]" data-aos="fade-up">
    <Typography variant="h2" component="h2" align="center" fontWeight={700} sx={{ mb: 4, color: 'var(--white)', fontSize: { xs: 32, sm: 40 }, textShadow: '0 2px 16px #00ffff44' }}>
      Servicios
    </Typography>
    <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ maxWidth: 1200, mx: 'auto', flexWrap: { md: 'nowrap' } }}>
      {servicios.map((s, i) => (
        <Grid item xs={12} sm={6} md={3} key={i} sx={{ display: 'flex', justifyContent: 'center', minWidth: { md: '280px' } }}>
          <Box sx={{ width: '100%', maxWidth: 280, display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                width: '100%',
                maxWidth: 280,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                p: 3,
                borderRadius: 4,
                boxShadow: '0 0 24px 0 #00ffff55, 0 2px 8px #000a',
                bgcolor: 'rgba(16,26,43,0.98)',
                color: 'var(--text-primary)',
                minHeight: 220,
                border: '2px solid #00ffff55',
                transition: 'transform 0.18s, box-shadow 0.18s, border-color 0.18s',
                mx: 'auto',
                '&:hover': {
                  transform: 'translateY(-6px) scale(1.03)',
                  boxShadow: '0 0 48px 0 #ff008044, 0 4px 16px #00ffff44',
                  borderColor: '#ff0080',
                },
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 12 }}>
                {s.icon}
              </div>
              <Typography variant="h6" component="h3" fontWeight={700} sx={{ mb: 1, color: 'var(--secondary-color)', fontSize: 20, textShadow: '0 2px 8px #00ffff44' }}>
                {s.title}
              </Typography>
              <Box component="ul" sx={{ textAlign: 'left', color: 'var(--text-secondary)', fontSize: 16, mt: 2, mb: 0, pl: 2 }}>
                {s.items.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: 8, listStyle: 'none', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginRight: 8, fontSize: 18, lineHeight: '1.2' }}>+</span>
                    <span style={{ lineHeight: '1.2' }}>{item}</span>
                  </li>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  </section>
  </>
);

export default Servicios;
