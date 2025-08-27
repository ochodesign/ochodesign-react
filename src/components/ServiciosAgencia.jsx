import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import BuildIcon from '@mui/icons-material/Build';

const servicios = [
  {
    icon: <WebIcon color="primary" sx={{ fontSize: 44 }} />,
    title: 'Diseño de Página Web Profesional',
    desc: 'Creamos sitios web modernos, rápidos y adaptados a tu negocio. Optimización SEO, diseño responsive y experiencia de usuario superior para destacar en Google.',
  },
  {
    icon: <StorefrontIcon color="secondary" sx={{ fontSize: 44 }} />,
    title: 'Tienda Online y E-commerce',
    desc: 'Desarrollamos tiendas online seguras y fáciles de usar. Integración de pagos, catálogo de productos y posicionamiento SEO para aumentar tus ventas.',
  },
  {
    icon: <AutorenewIcon color="success" sx={{ fontSize: 44 }} />,
    title: 'Rediseño y Optimización Web',
    desc: 'Mejoramos tu sitio actual con nuevas tecnologías, mejor imagen y mayor velocidad. Adaptamos tu web a las tendencias y requisitos SEO actuales.',
  },
  {
    icon: <BuildIcon color="warning" sx={{ fontSize: 44 }} />,
    title: 'Mantenimiento y Soporte Técnico',
    desc: 'Tu web siempre online y actualizada. Solución de problemas, actualizaciones de seguridad y soporte personalizado para tu negocio digital.',
  },
];

const ServiciosAgencia = () => (
  <Grid container spacing={4} sx={{ py: 7 }} justifyContent="center" id="servicios">
    {servicios.map((s, i) => (
      <Grid item xs={12} sm={6} md={3} key={i}>
        <Card
          sx={{
            textAlign: 'center',
            p: 2.5,
            borderRadius: 4,
            boxShadow: '0 8px 32px #00ffff33, 0 2px 8px #000a',
            bgcolor: 'var(--bg-blue-light)',
            color: 'var(--text-primary)',
            transition: 'transform 0.18s, box-shadow 0.18s',
            '&:hover': {
              transform: 'translateY(-6px) scale(1.03)',
              boxShadow: '0 16px 48px #ff008044, 0 4px 16px #00ffff44',
            },
          }}
        >
          <CardContent>
            {s.icon}
            <Typography
              variant="h5"
              component="h2"
              fontWeight="bold"
              sx={{ mt: 2, mb: 1, fontSize: 22, color: 'var(--secondary-color)', textShadow: '0 2px 8px #00ffff44' }}
            >
              {s.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 1, fontSize: 16, color: 'var(--text-secondary)', minHeight: 80 }}
            >
              {s.desc}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default ServiciosAgencia;
