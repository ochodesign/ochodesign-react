import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Button from '@mui/material/Button';
import { Box, Typography, Link, Container, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenTerms = () => setOpenTerms(true);
  const handleCloseTerms = () => setOpenTerms(false);
  return (
    <>
  <Box sx={{ width: '100%', background: 'linear-gradient(90deg, var(--bg-blue-dark) 0%, var(--bg-blue-light) 100%)', color: 'var(--white)', pt: 8, pb: 6, mt: 8, boxShadow: '0 0 48px #00ffff44', borderTopLeftRadius: 32, borderTopRightRadius: 32 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: { xs: 'center', md: 'space-between' }, alignItems: { xs: 'center', md: 'flex-start' }, gap: 6 }}>
            {/* Columna 1: Logo y descripción */}
            <Box sx={{ flex: 1, minWidth: 220, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <img src={require('../img/logo-dk.webp')} alt="Logo" style={{ height: 70, borderRadius: 16, marginBottom: 8, boxShadow: '0 0 32px #ff008044' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#00ffff', letterSpacing: 1, mb: 1 }}>Ocho Design Web</Typography>
              <Typography sx={{ color: 'var(--white)', fontSize: 17, textAlign: 'center', mb: 2 }}>
                Especialistas en diseño web profesional, desarrollo frontend y experiencias digitales únicas.
              </Typography>
            </Box>
            {/* Columna 2: Servicios */}
            <Box sx={{ flex: 1, minWidth: 180, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#00ffff', mb: 2 }}>Servicios de Diseño Web</Typography>
              <Typography sx={{ color: 'var(--white)', mb: 1 }}>Diseño & Branding</Typography>
              <Typography sx={{ color: 'var(--white)', mb: 1 }}>Invitaciones Digitales</Typography>
              <Typography sx={{ color: 'var(--white)', mb: 1 }}>Portafolios Personales</Typography>
              <Typography sx={{ color: 'var(--white)', mb: 1 }}>Landing Pages</Typography>
              <Typography sx={{ color: 'var(--white)', mb: 1 }}>Sitios para Empresas y Emprendedores</Typography>
            </Box>
            {/* Columna 3: Navegacion */}
            <Box sx={{ flex: 1, minWidth: 140, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#00ffff', mb: 2 }}>Navegación</Typography>
              <Link href="/" underline="none" sx={{ color: 'var(--white)', display: 'block', mb: 1, fontWeight: 500, '&:hover': { color: '#00ffff' } }}>Inicio</Link>
              <Link href="#servicios" underline="none" sx={{ color: 'var(--white)', display: 'block', mb: 1, fontWeight: 500, '&:hover': { color: '#00ffff' } }}>Servicios</Link>
              <Link href="#proyectos" underline="none" sx={{ color: 'var(--white)', display: 'block', mb: 1, fontWeight: 500, '&:hover': { color: '#00ffff' } }}>Proyectos</Link>
              <Link href="#invitaciones-digitales" underline="none" sx={{ color: 'var(--white)', display: 'block', mb: 1, fontWeight: 500, '&:hover': { color: '#00ffff' } }}>Invitaciones Digitales</Link>
              <Link href="#contacto" underline="none" sx={{ color: 'var(--white)', display: 'block', mb: 1, fontWeight: 500, '&:hover': { color: '#00ffff' } }}>Contacto</Link>
            </Box>
            {/* Columna 4: Contacto y redes */}
            <Box sx={{ flex: 1, minWidth: 220, textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#00ffff', mb: 2 }}>Contacto y Redes</Typography>
              <Typography sx={{ color: 'var(--white)', mb: 1 }}>contacto@ochodesignweb.com</Typography>
              <Typography sx={{ color: 'var(--white)', mb: 1 }}>WhatsApp: +54 11 6462-3427</Typography>
              <Typography sx={{ color: 'var(--white)', mb: 1 }}>Instagram: @ochodesignweb</Typography>
              <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mt: 3, width: '100%' }}>
                <IconButton href="https://www.instagram.com/ochodesignweb/" target="_blank" rel="noopener" sx={{ bgcolor: '#23232a', color: '#E1306C', boxShadow: '0 4px 16px #E1306C55', p: 2, borderRadius: '50%', transition: '0.3s', '&:hover': { bgcolor: '#E1306C', color: '#fff', boxShadow: '0 8px 32px #E1306C99' } }}>
                  <InstagramIcon fontSize="large" />
                </IconButton>
                <IconButton href="mailto:contacto@ochodesignweb.com" sx={{ bgcolor: '#23232a', color: '#0072c6', boxShadow: '0 4px 16px #0072c655', p: 2, borderRadius: '50%', transition: '0.3s', '&:hover': { bgcolor: '#0072c6', color: '#fff', boxShadow: '0 8px 32px #0072c699' } }}>
                  <EmailIcon fontSize="large" />
                </IconButton>
                <IconButton href="https://wa.me/5491164623427" target="_blank" rel="noopener" sx={{ bgcolor: '#23232a', color: '#25D366', boxShadow: '0 4px 16px #25D36655', p: 2, borderRadius: '50%', transition: '0.3s', '&:hover': { bgcolor: '#25D366', color: '#fff', boxShadow: '0 8px 32px #25D36699' } }}>
                  <WhatsAppIcon fontSize="large" />
                </IconButton>
              </Box>
            </Box>
          </Box>
          {/* Línea divisoria */}
          <Box sx={{ width: '100%', borderBottom: '1px solid #00ffff33', my: 4 }} />
          {/* Derechos reservados y enlaces legales */}
          <Box sx={{ width: '100%', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 2, mt: 2 }}>
            <Typography variant="body2" sx={{ color: 'var(--text-secondary)', fontSize: 15, textAlign: { xs: 'center', md: 'left' }, fontWeight: 500 }}>
              © 2025 Ocho Design Web. Todos los derechos reservados.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-end' } }}>
              <Button onClick={handleOpen} sx={{ color: '#00ffff', fontWeight: 600, fontSize: 16, textDecoration: 'underline', bgcolor: 'transparent', boxShadow: 'none', textTransform: 'none', p: 0, minWidth: 0, '&:hover': { color: '#00bcd4', bgcolor: 'transparent', textDecoration: 'underline' } }}>
                Política de Privacidad
              </Button>
              <Button onClick={handleOpenTerms} sx={{ color: '#00ffff', fontWeight: 600, fontSize: 16, textDecoration: 'underline', bgcolor: 'transparent', boxShadow: 'none', textTransform: 'none', p: 0, minWidth: 0, '&:hover': { color: '#00bcd4', bgcolor: 'transparent', textDecoration: 'underline' } }}>
                Términos y Condiciones
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* Modal de Políticas y Privacidad */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ bgcolor: '#23232a', color: '#00ffff', fontWeight: 700 }}>Políticas y Privacidad</DialogTitle>
        <DialogContent sx={{ bgcolor: '#23232a', color: 'var(--white)', fontSize: 16 }}>
          <Typography gutterBottom>
            Tu privacidad es importante para nosotros. Este sitio web recopila datos mínimos necesarios para el funcionamiento y la comunicación. No compartimos tu información con terceros y protegemos tus datos según la normativa vigente.
          </Typography>
          <Typography gutterBottom>
            Al utilizar nuestros formularios, aceptás el tratamiento de tus datos para responder consultas y brindar servicios. Podés solicitar la eliminación de tus datos en cualquier momento.
          </Typography>
          <Typography gutterBottom>
            Para más información, contactanos a través de los medios disponibles en el sitio.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ bgcolor: '#23232a' }}>
          <Button onClick={handleClose} sx={{ color: '#00ffff', fontWeight: 700 }}>Cerrar</Button>
        </DialogActions>
      </Dialog>
      {/* Modal de Términos y Condiciones */}
      <Dialog open={openTerms} onClose={handleCloseTerms} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ bgcolor: '#23232a', color: '#00ffff', fontWeight: 700 }}>Términos y Condiciones</DialogTitle>
        <DialogContent sx={{ bgcolor: '#23232a', color: 'var(--white)', fontSize: 16 }}>
          <Typography gutterBottom>
            El uso de este sitio implica la aceptación de los términos y condiciones aquí expuestos. Los contenidos, servicios y funcionalidades pueden cambiar sin previo aviso.
          </Typography>
          <Typography gutterBottom>
            El usuario se compromete a utilizar el sitio de manera responsable y respetuosa. No se permite el uso indebido, la copia o distribución no autorizada de los contenidos.
          </Typography>
          <Typography gutterBottom>
            Para dudas o consultas sobre los términos, contactanos a través de los medios disponibles en el sitio.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ bgcolor: '#23232a' }}>
          <Button onClick={handleCloseTerms} sx={{ color: '#00ffff', fontWeight: 700 }}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Footer;
