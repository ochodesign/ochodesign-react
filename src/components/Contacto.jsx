
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import MenuItem from '@mui/material/MenuItem';

import { Box, Container, Typography, TextField, Button, InputAdornment, FormControlLabel, Checkbox } from '@mui/material';
import Select from '@mui/material/Select';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LanguageIcon from '@mui/icons-material/Language';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InstagramIcon from '@mui/icons-material/Instagram';

const motivos = [
  { value: 'sitio-web', label: 'Sitio web', icon: <LanguageIcon sx={{ color: '#00ffff' }} /> },
  { value: 'presupuesto', label: 'Presupuesto', icon: <AttachMoneyIcon sx={{ color: '#00ffff' }} /> },
  { value: 'invitacion-digital', label: 'Invitación digital', icon: <CardGiftcardIcon sx={{ color: '#00ffff' }} /> },
  { value: 'otra-consulta', label: 'Otra consulta', icon: <HelpOutlineIcon sx={{ color: '#00ffff' }} /> },
];

const validationSchema = Yup.object({
  nombre: Yup.string().min(2, 'Mínimo 2 caracteres').required('El nombre es obligatorio'),
  email: Yup.string().email('Email inválido').required('El email es obligatorio'),
  wsp: Yup.string()
    .matches(/^\d{10,15}$/,'WhatsApp inválido')
    .required('El WhatsApp es obligatorio'),
  motivo: Yup.string().required('El motivo es obligatorio'),
  mensaje: Yup.string().min(10, 'El mensaje es muy corto').required('El mensaje es obligatorio'),
    noRobot: Yup.boolean().oneOf([true], 'Debes confirmar que no eres un robot'),
});

const Contacto = () => {
  const [msgEnviado, setMsgEnviado] = useState("");
  const [openMotivo, setOpenMotivo] = useState(false);

  // Cierra el dropdown de motivo al hacer scroll en la ventana
  React.useEffect(() => {
    const handleScroll = () => {
      setOpenMotivo(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Formatea el número de WhatsApp al formato internacional argentino
  const formatWsp = (wsp) => {
    if (!wsp) return '';
    let num = wsp.replace(/\D/g, ''); // solo dígitos
    if (/^549\d{10,}$/.test(num)) return num;
    if (/^54\d{10,}$/.test(num)) return '549' + num.slice(2);
    if (/^9\d{10,}$/.test(num)) return '54' + num;
    if (/^\d{10,11}$/.test(num)) return '549' + num;
    return num;
  };
  return (
  <Box id="contacto" sx={{ width: '100%', minHeight: '100vh', py: 8, background: 'linear-gradient(180deg, #101a2b 80%, #162033 100%)', boxShadow: '0 0 80px 0 #00ffff22', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="sm" sx={{ bgcolor: 'rgba(16,26,43,0.98)', borderRadius: 4, boxShadow: '0 0 24px 0 #00ffff55, 0 2px 8px #000a', p: { xs: 2, md: 4 }, border: '2px solid #00ffff55', color: 'var(--text-primary)' }}>
        <Typography variant="h2" align="center" sx={{ color: '#00ffff', fontWeight: 700, mb: 2, fontSize: { xs: 28, md: 36 } }}>
          ¡Conectá con nosotros!
        </Typography>
        <Typography align="center" sx={{ color: 'var(--white)', mb: 4, fontSize: 18 }}>
          ¿Tenés dudas, querés cotizar tu sitio web o solicitar una invitación digital? Completá el formulario o escribinos directamente por WhatsApp, Instagram o correo. ¡Respondemos rápido y te ayudamos en lo que necesites!
        </Typography>
        <Formik
          initialValues={{ nombre: '', email: '', wsp: '', motivo: '', mensaje: '', noRobot: false }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm, setSubmitting }) => {
            try {
              await axios.post('https://ochodesignweb.com/backend/contacto.php', {
                nombre: values.nombre,
                email: values.email,
                wsp: formatWsp(values.wsp),
                motivo: values.motivo,
                mensaje: values.mensaje
              }, {
                headers: {
                  'Content-Type': 'application/json'
                }
              });
              setMsgEnviado('¡Mensaje enviado y guardado!');
              resetForm();
              setTimeout(() => setMsgEnviado(""), 4000);
            } catch (error) {
              setMsgEnviado('Error al enviar el mensaje.');
              setTimeout(() => setMsgEnviado(""), 4000);
            }
            setSubmitting(false);
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
            <Form>
            <Box sx={{ bgcolor: 'rgba(16,26,43,0.98)', p: { xs: 2, md: 4 }, borderRadius: 4, boxShadow: '0 0 24px 0 #00ffff55, 0 2px 8px #000a', border: '2px solid #00ffff55', color: 'var(--text-primary)' }}>
              <TextField
                fullWidth
                label="Nombre"
                name="nombre"
                margin="normal"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.nombre && Boolean(errors.nombre)}
                helperText={touched.nombre && errors.nombre}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: '#00ffff' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ '& label': { color: '#00ffff' }, '& .MuiOutlinedInput-root': { bgcolor: 'rgba(16,26,43,0.98)', color: 'var(--white)', '& fieldset': { borderColor: '#00ffff55' }, '&:hover fieldset': { borderColor: '#00ffff' }, '&.Mui-focused fieldset': { borderColor: '#00ffff' } } }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                margin="normal"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: '#00ffff' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ '& label': { color: '#00ffff' }, '& .MuiOutlinedInput-root': { bgcolor: 'rgba(16,26,43,0.98)', color: 'var(--white)', '& fieldset': { borderColor: '#00ffff55' }, '&:hover fieldset': { borderColor: '#00ffff' }, '&.Mui-focused fieldset': { borderColor: '#00ffff' } } }}
              />
              <TextField
                fullWidth
                label="WhatsApp"
                name="wsp"
                margin="normal"
                value={values.wsp}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.wsp && Boolean(errors.wsp)}
                helperText={touched.wsp && errors.wsp}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <WhatsAppIcon sx={{ color: '#00ffff' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ '& label': { color: '#00ffff' }, '& .MuiOutlinedInput-root': { bgcolor: 'rgba(16,26,43,0.98)', color: 'var(--white)', '& fieldset': { borderColor: '#00ffff55' }, '&:hover fieldset': { borderColor: '#00ffff' }, '&.Mui-focused fieldset': { borderColor: '#00ffff' } } }}
              />
              {/* Dropdown Motivo desde cero con MUI Select */}
              <Box sx={{ mt: 1, mb: 0, p: 0 }}>
                <Typography sx={{ color: '#00ffff', fontWeight: 600, mb: 1, fontSize: 18 }}>Motivo</Typography>
                <Select
                  fullWidth
                  displayEmpty
                  name="motivo"
                  value={values.motivo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.motivo && Boolean(errors.motivo)}
                  sx={{
                    bgcolor: 'rgba(16,26,43,0.99)',
                    color: 'var(--white)',
                    border: '2px solid var(--secondary-color)',
                    boxShadow: '0 4px 24px #00ffff44',
                    borderRadius: '12px',
                    '& .MuiSelect-icon': { color: '#00ffff' },
                  }}
                  MenuProps={{
                    anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                    transformOrigin: { vertical: 'top', horizontal: 'left' },
                    disablePortal: true,
                    open: openMotivo,
                    onClose: () => setOpenMotivo(false),
                  }}
                  onOpen={() => setOpenMotivo(true)}
                  onClose={() => setOpenMotivo(false)}
                  renderValue={selected => {
                    if (!selected) return <span style={{ color: '#999' }}>Selecciona un motivo</span>;
                    const motivo = motivos.find(m => m.value === selected);
                    return (
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {motivo?.icon}
                        <span style={{ marginLeft: 8 }}>{motivo?.label}</span>
                      </Box>
                    );
                  }}
                >
                  <MenuItem value="">
                    <span style={{ color: '#999' }}>Selecciona un motivo</span>
                  </MenuItem>
                  {motivos.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {option.icon}
                        <span style={{ marginLeft: 8 }}>{option.label}</span>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
                {touched.motivo && errors.motivo && (
                  <Typography sx={{ color: '#ff0080', fontSize: 14, mt: 1 }}>{errors.motivo}</Typography>
                )}
              </Box>
              <TextField
                fullWidth
                label="Mensaje"
                name="mensaje"
                margin="normal"
                multiline
                rows={4}
                value={values.mensaje}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.mensaje && Boolean(errors.mensaje)}
                helperText={touched.mensaje && errors.mensaje}
                sx={{ '& label': { color: '#00ffff' }, '& .MuiOutlinedInput-root': { bgcolor: 'rgba(16,26,43,0.98)', color: 'var(--white)', '& fieldset': { borderColor: '#00ffff55' }, '&:hover fieldset': { borderColor: '#00ffff' }, '&.Mui-focused fieldset': { borderColor: '#00ffff' } } }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="noRobot"
                    color="primary"
                    checked={values.noRobot}
                    onChange={handleChange}
                    sx={{ '&.Mui-checked, &.MuiCheckbox-root': { boxShadow: 'none', color: '#00ffff' }, '&:focus-visible': { outline: 'none' } }}
                  />
                }
                label="No soy un robot"
                sx={{ mt: 2, '& .MuiFormControlLabel-label': { borderBottom: 'none', color: '#00ffff', fontWeight: 'bold' } }}
              />
              {touched.noRobot && Boolean(errors.noRobot) && (
                <Typography color="error" variant="body2" sx={{ mb: 2 }}>
                  {errors.noRobot}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  fontWeight: 'bold',
                  fontSize: 18,
                  bgcolor: '#00ffff',
                  color: '#101a2b',
                  opacity: isSubmitting || !values.noRobot ? 0.6 : 1,
                  cursor: isSubmitting || !values.noRobot ? 'not-allowed' : 'pointer',
                  boxShadow: isSubmitting || !values.noRobot ? 'none' : undefined,
                  '&:hover': {
                    bgcolor: '#00e6e6',
                  },
                  '&.Mui-disabled': {
                    bgcolor: '#00ffff',
                    color: '#101a2b',
                    opacity: 0.6,
                  },
                }}
                fullWidth
                disabled={isSubmitting || !values.noRobot}
              >
                Enviar
              </Button>
              {msgEnviado && (
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                  <Typography variant="body1" sx={{ color: msgEnviado.includes('Error') ? '#ff0080' : '#00ffff', fontWeight: 'bold', bgcolor: '#101a2b', borderRadius: 2, py: 1 }}>
                    {msgEnviado}
                  </Typography>
                </Box>
              )}
            </Box>
            {/* Redes sociales flotantes estilo burbuja */}
            <Box sx={{ mt: 5, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <Typography variant="h5" sx={{ color: '#00ffff', fontWeight: 700, mb: 2 }}>
                También podés contactarnos por:
              </Typography>
              <Box sx={{
                display: 'flex',
                gap: 4,
                justifyContent: 'center',
                mb: 2,
                alignItems: 'center',
                width: '100%',
                maxWidth: 280,
                mx: 'auto',
              }}>
                <a href="https://www.instagram.com/ochodesignweb/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Box sx={{
                    width: 64,
                    height: 64,
                    bgcolor: '#E1306C',
                    borderRadius: '50%',
                    boxShadow: '0 8px 32px #E1306C88, 0 2px 8px #000a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'scale(1.15) translateY(-8px)',
                      boxShadow: '0 16px 48px #E1306Ccc, 0 2px 16px #000a',
                      bgcolor: '#c72c5a',
                    },
                  }}>
                    <InstagramIcon sx={{ color: '#fff', fontSize: 36 }} />
                  </Box>
                </a>
                <a href="https://wa.me/5491164623427" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Box sx={{
                    width: 64,
                    height: 64,
                    bgcolor: '#25D366',
                    borderRadius: '50%',
                    boxShadow: '0 8px 32px #25D36688, 0 2px 8px #000a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'scale(1.15) translateY(-8px)',
                      boxShadow: '0 16px 48px #25D366cc, 0 2px 16px #000a',
                      bgcolor: '#1da851',
                    },
                  }}>
                    <WhatsAppIcon sx={{ color: '#fff', fontSize: 36 }} />
                  </Box>
                </a>
                <a href="mailto:tuemail@dominio.com" style={{ textDecoration: 'none' }}>
                  <Box sx={{
                    width: 64,
                    height: 64,
                    bgcolor: '#0072c6',
                    borderRadius: '50%',
                    boxShadow: '0 8px 32px #0072c688, 0 2px 8px #000a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'scale(1.15) translateY(-8px)',
                      boxShadow: '0 16px 48px #0072c6cc, 0 2px 16px #000a',
                      bgcolor: '#005fa3',
                    },
                  }}>
                    <EmailIcon sx={{ color: '#fff', fontSize: 36 }} />
                  </Box>
                </a>
              </Box>
            </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default Contacto;
