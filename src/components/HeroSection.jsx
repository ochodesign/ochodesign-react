
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import heroBg from '../img/bg-hero/bg-hero-dk.webp';


const HeroSection = () => (
  <Box data-aos="fade-down"
    id="inicio"
    className="hero-bg-animated"
    sx={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      px: 2,
      overflow: 'hidden',
    }}
  >
    {/* Overlay oscuro para contraste */}
    <Box sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
  bgcolor: 'rgba(15,20,25,0.80)',
      zIndex: 1,
    }} />
    <Box sx={{
      position: 'relative',
      zIndex: 2,
      width: '100%',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      py: { xs: 8, sm: 12 },
    }}>
      <Typography
        variant="h1"
        fontWeight="bold"
        gutterBottom
        sx={{
          fontSize: { xs: 56, sm: 80 }, // más grande en mobile
          color: 'var(--text-primary)',
          textShadow: '0 4px 24px #000a',
          letterSpacing: 2,
          mb: 2,
          lineHeight: { xs: 1.05, sm: 1.15 },
        }}
      >
        Haz crecer <span style={{
          color: 'var(--accent-color)',
          position: 'relative',
          display: 'inline-block',
        }}>
          tu negocio
          <span style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            background: 'linear-gradient(90deg, transparent 40%, #fff 50%, transparent 60%)',
            backgroundSize: '200px 100%',
            backgroundRepeat: 'no-repeat',
            mixBlendMode: 'lighten',
            animation: 'accentShine 2s linear infinite',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
          {"\u00A0".repeat(10)}
          </span>
  </span><br />con una <span style={{ color: 'var(--secondary-color)', fontWeight: 600 }}>web profesional</span>
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: 24, sm: 40 },
          color: 'var(--text-secondary)',
          
          fontWeight: 700,
          textShadow: '0 2px 12px #0008',
          mb: 3,
        }}
      >
        Tu negocio online, fácil y profesional
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: 16, sm: 24 },
          color: 'var(--text-secondary)',
          opacity: 0.9,
          mb: 4,
        }}
      >
        Creamos tu página web sin complicaciones
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button
          variant="contained"
          sx={{
            background: 'var(--secondary-color)',
            color: 'var(--primary-color)',
            fontSize: { xs: 15, sm: 20 },
            px: { xs: 2.5, sm: 4 },
            py: { xs: 1, sm: 1.5 },
            fontWeight: 600,
            borderRadius: 3,
            boxShadow: '0 2px 12px #00ffff44',
            letterSpacing: 0.5,
            transition: 'transform 0.15s, box-shadow 0.15s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 4px 24px #00ffff88',
              background: 'var(--secondary-color)',
            },
          }}
          size="large"
          href="https://wa.me/5491164623427?text=Hola!%20Quiero%20una%20web%20profesional"
          target="_blank"
          rel="noopener"
        >
          Quiero una web
        </Button>
        <Button
          variant="contained"
          sx={{
            background: 'var(--accent-color)',
            color: 'var(--white)',
            fontSize: { xs: 15, sm: 20 },
            px: { xs: 2.5, sm: 4 },
            py: { xs: 1, sm: 1.5 },
            fontWeight: 600,
            borderRadius: 3,
            boxShadow: '0 2px 12px #ff008044',
            letterSpacing: 0.5,
            transition: 'transform 0.15s, box-shadow 0.15s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 4px 24px #ff008088',
              background: 'var(--accent-color)',
            },
          }}
          size="large"
          href="#proyectos"
        >
          Ver proyectos
        </Button>
      </Box>
    </Box>
  </Box>
);

export default HeroSection;
