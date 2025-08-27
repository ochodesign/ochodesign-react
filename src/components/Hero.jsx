import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const Hero = () => (
  <Box sx={{ bgcolor: '#1976d2', color: 'white', py: 8, textAlign: 'center' }}>
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Bienvenido a Mi Sitio
      </Typography>
      <Typography variant="h5" gutterBottom>
        Soluciones modernas para tu negocio
      </Typography>
      <Button variant="contained" color="secondary" size="large">
        Conoce más
      </Button>
    </Container>
  </Box>
);

export default Hero;
