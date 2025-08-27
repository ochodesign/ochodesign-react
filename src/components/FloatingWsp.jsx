import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FloatingWsp = () => (
  <a
    href="https://wa.me/5491164623427"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      position: 'fixed',
      bottom: 32,
      right: 32,
      zIndex: 9999,
      background: 'linear-gradient(90deg, #25D366 0%, #00ffff 100%)',
      color: '#fff',
      borderRadius: '50%',
      width: 56,
      height: 56,
      boxShadow: '0 4px 24px #25D36655',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.3s',
      textDecoration: 'none',
      fontSize: 0,
    }}
    aria-label="WhatsApp Chat"
  >
    <WhatsAppIcon sx={{ fontSize: 32 }} />
  </a>
);

export default FloatingWsp;
