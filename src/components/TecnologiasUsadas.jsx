
import { SiFigma, SiHtml5, SiCss3, SiJavascript, SiReact, SiPhp, SiMysql, SiHostinger } from 'react-icons/si';
import { Box, Typography } from '@mui/material';

const tecnologias = [
  { label: 'Figma', icon: <SiFigma style={{ color: '#a259ff', fontSize: 64 }} /> },
  { label: 'HTML', icon: <SiHtml5 style={{ color: '#e34c26', fontSize: 64 }} /> },
  { label: 'CSS', icon: <SiCss3 style={{ color: '#2965f1', fontSize: 64 }} /> },
  { label: 'JavaScript', icon: <SiJavascript style={{ color: '#f7df1e', fontSize: 64 }} /> },
  { label: 'React', icon: <SiReact style={{ color: '#61dafb', fontSize: 64 }} /> },
  { label: 'PHP', icon: <SiPhp style={{ color: '#777bb4', fontSize: 64 }} /> },
  { label: 'MySQL', icon: <SiMysql style={{ color: '#00758f', fontSize: 64 }} /> },
  { label: 'Hostinger', icon: <SiHostinger style={{ color: '#673ab7', fontSize: 64 }} /> },
];


const TecnologiasUsadas = () => (
  <Box sx={{ mt: 6, mb: 4, textAlign: 'center' }}>
    <Typography variant="h5" sx={{ color: '#00ffff', fontWeight: 'bold', mb: 2 }}>
      Tecnologías utilizadas en este proyecto
    </Typography>
    {/* Slider infinito horizontal de logos */}
    <Box sx={{ width: '100%', overflow: 'hidden', py: 2 }}>
      <Box
        sx={{
          display: 'flex',
          gap: 6,
          alignItems: 'center',
          animation: 'scrollLogos 18s linear infinite',
          '@keyframes scrollLogos': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        }}
      >
        {[...tecnologias, ...tecnologias].map((tec, idx) => (
          <Box key={tec.label + idx} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 120 }}>
            {tec.icon}
            <Typography sx={{ color: '#fff', fontWeight: 'bold', fontSize: 18, mt: 1 }}>{tec.label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
    <Typography variant="body2" sx={{ color: '#999', mt: 2 }}>
      Diseño en Figma, desarrollo con React, backend PHP/MySQL y hosting en Hostinger.
    </Typography>
  </Box>
);

export default TecnologiasUsadas;
