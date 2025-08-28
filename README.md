
# ochodesign-react

Sitio web profesional para agencia de diseño, desarrollado con React, Material UI y backend PHP/MySQL. Incluye animaciones, dashboard administrativo, formulario validado, estadísticas y experiencia de usuario moderna.

## Funcionalidades principales

- **Frontend React**: componentes reutilizables, animaciones, scroll suave en navegación, diseño responsivo y moderno.
- **Header con animación**: menú burger en mobile, scroll suave al navegar entre secciones.
- **Hero, Beneficios, Servicios, Proyectos, Invitaciones Digitales**: secciones con cards, íconos, imágenes responsivas y efectos visuales.
- **Formulario de contacto**: validación con Formik/Yup, motivos personalizados, protección antispam, integración con WhatsApp, Instagram y correo.
- **Dashboard admin**: login seguro, gestión de mensajes, edición, eliminación, filtro y estadísticas de visitas (hoy, semana, mes, total histórico).
- **Backend PHP/MySQL**: endpoints para contacto, visitas, gestión de mensajes y estadísticas, con zona horaria Argentina.
- **Animaciones y UX**: scroll suave, hover en cards y menú, modales, galería de imágenes, footer rediseñado, mobile first.

## Estructura del proyecto

- `/src/components/` - Componentes principales (Header, Footer, Contacto, Hero, etc.)
- `/src/pages/` - Páginas (Home, AdminDashboard, LoginAdmin)
- `/backend/` - Endpoints PHP y scripts SQL
- `/public/` - Archivos estáticos

## Instalación y ejecución

1. Clona el repositorio:
   ```
   git clone https://github.com/ochodesign/ochodesign-react.git
   ```
2. Instala las dependencias:
   ```
   npm install
   ```
3. Inicia el proyecto:
   ```
   npm start
   ```

## Backend y base de datos

- Configura tu base de datos MySQL y edita `backend/dbConfig.php` con tus credenciales.
- Sube los archivos PHP a tu hosting (Hostinger, CPanel, etc).
- Usa el SQL de `backend/crearTablaVisitas.sql` para crear las tablas necesarias.

### Ejemplo de tablas
```sql
CREATE TABLE contacto (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(100),
  wsp VARCHAR(20),
  motivo VARCHAR(50),
  mensaje TEXT,
  fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
  leido TINYINT(1) DEFAULT 0
);

CREATE TABLE visitas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fecha DATETIME NOT NULL,
  ip VARCHAR(45)
);
```

## Personalización y recomendaciones

- Cambia los campos del formulario en `Contacto.jsx` según tu proyecto.
- Personaliza colores, textos y logos en los componentes.
- Adapta el dashboard admin para mostrar los datos que necesites.
- Configura `.htaccess` para rutas SPA y acceso a endpoints PHP.
- Haz pruebas en mobile y desktop antes de publicar.

## Cambios y mejoras recientes (2025)

- Scroll suave en navegación del header.
- Footer rediseñado, modal de políticas y privacidad.
- Mejoras visuales y de UX en mobile y desktop.
- Dashboard admin con mensaje de bienvenida y sin header global.
- Dropdown de motivo en contacto se cierra al hacer scroll.
- Backend con zona horaria Argentina para registros.

---

¿Dudas o necesitas adaptar algo? Solo cambia los campos y endpoints, y tendrás un sistema funcional para cualquier proyecto!
