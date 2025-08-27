import React, { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: 100,
        right: 32,
        zIndex: 9999,
        background: 'linear-gradient(90deg, #00ffff 0%, #ff0080 100%)',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: 56,
        height: 56,
        boxShadow: '0 4px 24px #00ffff55',
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.3s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label="Ir arriba"
    >
      <KeyboardArrowUpIcon sx={{ fontSize: 32 }} />
    </button>
  );
};

export default ScrollUpButton;
