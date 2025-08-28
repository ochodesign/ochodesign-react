import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import Slide from '@mui/material/Slide';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

// Logo: usa el archivo desde img/img-logos
import logoUrl from '../img/logo-dk.webp';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  // Función para scroll suave
  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  return (
    <Slide direction="down" in={true} mountOnEnter unmountOnExit appear={false}>
      <AppBar position="fixed" sx={{ bgcolor: 'var(--primary-color)', transition: 'top 0.3s', zIndex: 1201, height: 90 }} elevation={4}>
  <Toolbar sx={{ minHeight: 90, justifyContent: { xs: 'space-between', md: 'space-evenly' }, alignItems: 'center', paddingTop: '6px' }}>
          {/* Mobile: logo izquierda, burger derecha */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
            <a href="/" style={{ display: 'block' }}>
              <img src={logoUrl} alt="Logo" style={{ height: 56, width: 56, borderRadius: '50%', marginLeft: 8, boxShadow: '0 0 16px #00ffff88', display: 'block' }} />
            </a>
            <IconButton
              sx={{ color: 'var(--secondary-color)', mr: 2 }}
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label={drawerOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {drawerOpen ? <CloseIcon fontSize="large" /> : <MenuIcon />}
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{
                sx: {
                  bgcolor: 'var(--bg-dark) !important',
                  backgroundColor: 'var(--bg-dark) !important',
                  color: 'var(--text-primary)',
                  boxShadow: 6,
                  borderRadius: 0,
                  minHeight: 320,
                  maxHeight: 420,
                  overflow: 'hidden',
                  mt: { xs: '64px', md: 0 }, // Menos espacio debajo del header en mobile
                  top: { xs: '64px !important', md: '0 !important' },
                  position: 'absolute',
                }
              }}
            >
              <Box sx={{ width: 240, p: 2, minHeight: 320, maxHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box', borderRadius: 0, overflow: 'hidden' }}>
                <Box>
                  {menuItems.map(item => (
                    <Button
                      key={item.label}
                      sx={{
                        color: 'var(--secondary-color)',
                        display: 'block',
                        width: '100%',
                        textAlign: 'left',
                        mb: 1,
                        fontSize: 18,
                      }}
                      href={item.href}
                      onClick={e => {
                        handleNavClick(e, item.href);
                        setDrawerOpen(false);
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 3 }}>
                  <IconButton sx={{ color: 'var(--accent-color)' }} href="https://wa.me/5491164623427" target="_blank" aria-label="WhatsApp">
                    <WhatsAppIcon fontSize="large" />
                  </IconButton>
                  <IconButton sx={{ color: 'var(--secondary-color)' }} href="https://www.instagram.com/ochodesignweb/" target="_blank" aria-label="Instagram">
                    <InstagramIcon fontSize="large" />
                  </IconButton>
                </Box>
              </Box>
            </Drawer>
          </Box>
          {/* Desktop: logo izquierda, menú derecha */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <a href="/" style={{ display: 'block' }}>
                <img src={logoUrl} alt="Logo" style={{ height: 72, width: 72, borderRadius: '50%', marginRight: 16, boxShadow: '0 0 16px #00ffff88', display: 'block' }} />
            </a>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            {menuItems.map(item => (
              <a
                key={item.label}
                href={item.href === '#inicio' ? '/' : item.href}
                style={{
                  color: '#fff',
                  fontWeight: 500,
                  fontSize: 17,
                  padding: '8px 16px',
                  borderRadius: '8px',
                  transition: 'color 0.2s, background 0.2s, box-shadow 0.2s',
                  background: 'transparent',
                  textDecoration: 'none',
                  display: 'inline-block',
                  margin: '0 2px',
                }}
                onClick={e => handleNavClick(e, item.href)}
                onMouseOver={e => {
                  e.currentTarget.style.color = '#00ffff';
                  e.currentTarget.style.background = '#101a2b';
                  e.currentTarget.style.boxShadow = '0 0 12px #00ffff55';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {item.label}
              </a>
            ))}
          </Box>
          {/* Redes sociales solo en desktop */}
          <Box sx={{ ml: 2, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <IconButton sx={{ color: 'var(--accent-color)' }} href="https://wa.me/5491164623427" target="_blank" aria-label="WhatsApp">
              <WhatsAppIcon />
            </IconButton>
            <IconButton sx={{ color: 'var(--secondary-color)' }} href="https://www.instagram.com/ochodesignweb/" target="_blank" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Header;
