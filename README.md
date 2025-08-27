# ochodesign-react

## Paso a paso del desarrollo

1. **Modernización visual y funcional**
   - Se definió la estructura para una web de agencia de diseño, con enfoque en UX, animaciones y claridad visual.
   - Se aplicaron colores personalizados, tipografía moderna (Poppins) y animaciones CSS.

2. **Componentes principales**
   - Se crearon los componentes: HeroSection, Header, Beneficios, Servicios, ProcesoTrabajo, Proyectos, Footer.
   - Se integró el menú burger en mobile y Drawer con redes sociales.

3. **Sección Hero**
   - Animación de fondo, CTAs destacados y layout responsivo.

4. **Beneficios**
   - Cards alineadas horizontalmente en desktop y responsivas en mobile/tablet.
   - Fondo con glow y títulos SEO.

5. **Servicios**
   - Cards con íconos SVG relevantes, títulos y listas con formato "+".
   - Panel de administración destacado como servicio.
   - Actualización de ítems en la card de "Diseño y Experiencia de Usuario (UI/UX)" según pedido.

6. **Corrección de errores**
   - Solución de problemas de importación y ESLint.
   - Ajuste de layout y visualización de cards.

7. **Actualizaciones y mejoras**
   - Se agregaron y reemplazaron ítems en la card de UX/UI según indicaciones.
   - Se subieron todos los cambios al repositorio de GitHub.

## Cómo ejecutar el proyecto

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

---

Este proyecto refleja el proceso de modernización y profesionalización de una web de agencia, con foco en experiencia de usuario, diseño visual y funcionalidades claras.

# Formulario funcional + Dashboard admin + Login seguro

## Guía rápida para reutilizar este proyecto en nuevos desarrollos

### 1. ¿Qué incluye?
- Frontend en React con Material UI, Formik, Yup y Axios.
- Formulario validado, protección antispam y diseño moderno.
- Backend PHP conectado a MySQL (Hostinger, CPanel, etc).
- Dashboard admin con filtros, edición, eliminación, estadísticas de visitas, cards responsivas y UX mobile.
- Login de administrador con contraseña y visualización segura (first mobile).
- Estadísticas de visitas (hoy, semana, mes, total histórico) y visualización moderna.

### 2. ¿Cómo reutilizar?
1. **Clona o copia la carpeta del proyecto.**
2. **Adapta los campos del formulario en `src/components/Contacto.jsx` según tu necesidad.**
3. **Modifica la estructura de la base de datos en Hostinger/phpMyAdmin:**
   - Cambia los campos de la tabla `contacto` según tu proyecto.
   - Mantén el campo `leido` si quieres gestión de mensajes leídos/no leídos.
   - Ejecuta el SQL de `backend/crearTablaVisitas.sql` para registrar visitas.
4. **Actualiza los endpoints PHP en la carpeta `backend`:**
   - `contacto.php` para guardar mensajes.
   - `getMensajes.php` para listar mensajes.
   - `deleteMensaje.php`, `updateMensaje.php`, `marcarLeido.php` para gestión admin.
   - `registrarVisita.php` y `getVisitas.php` para estadísticas.
5. **Configura las variables de conexión en `dbConfig.php` con tus datos de MySQL.**
6. **Adapta el dashboard en `src/pages/AdminDashboard.jsx` para mostrar los campos y estadísticas que necesites.**
7. **Personaliza estilos, textos y rutas según tu marca o cliente.**
8. **Despliega el frontend en tu hosting y sube los archivos PHP a la carpeta pública.**
9. **Configura el `.htaccess` para rutas SPA y acceso a endpoints PHP.**

### 3. Recomendaciones
- Usa validaciones y protección antispam en todos los formularios.
- Mantén la estructura de carpetas para facilitar mantenimiento.
- Personaliza el dashboard para cada cliente (nombre, logo, colores).
- Haz pruebas en mobile y desktop antes de publicar.
- Cambia la contraseña del admin en `LoginAdmin.jsx` por seguridad.

### 4. Ejemplo de estructura de base de datos
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

---

**¿Dudas o necesitas adaptar algo? Solo cambia los campos y endpoints, y tendrás un sistema funcional para cualquier proyecto!**

# Cambios y mejoras realizados (2025)

## UI/UX y diseño
- Footer completamente rediseñado: más alto, fondo gris oscuro, logo, enlaces centrados y alineados, redes sociales, derechos reservados y sitio desarrollado.
- Menú de navegación del footer con enlaces iguales, centrados y con menos espacio entre ellos.
- Se agregó un modal de Políticas y Privacidad, accesible desde el footer, con botón celeste y subrayado debajo de las redes sociales.
- Se mejoró la visualización en mobile de todos los componentes, especialmente el footer y el contacto.
- Se corrigió el scroll horizontal en mobile.

## Contacto
- Formulario funcional con validación, motivos personalizados y protección antispam.
- Botones de WhatsApp, Instagram y Correo apilados y con ancho reducido en mobile.
- Se mejoró la experiencia visual y de uso en pantallas pequeñas.

## Invitaciones Digitales
- Sección con lista de integraciones, galería de imágenes y layout responsivo.
- Imágenes diferentes para mobile y desktop.
- Modal para galería de invitaciones digitales.

## Correcciones y mejoras técnicas
- Solución de errores de importación y ESLint.
- Uso de require.context para imágenes dinámicas.
- Mejoras en estilos globales y locales.
- Personalización de colores, tipografía y animaciones.

## Backend y administración
- Dashboard admin con filtros, edición, eliminación, estadísticas de visitas y UX mobile.
- Login seguro para administrador.
- Endpoints PHP para gestión de mensajes y visitas.

---

Este proyecto fue adaptado y mejorado según requerimientos de diseño, funcionalidad y experiencia de usuario. Para detalles técnicos y guía de uso, ver el resto del README.
