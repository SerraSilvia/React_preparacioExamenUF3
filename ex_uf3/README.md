# Paso 1: Instalación y Carpeta Inicial
Primero creamos el proyecto y entramos en la carpeta. Usaremos Vite, que es el estándar actual (más rápido que create-react-app).

Abrir terminal y ejecutar:

Bash
npm create vite@latest galeria-art -- --template react
cd galeria-art
npm install
Instalar el Router (fundamental para la navegación):

Bash
npm install react-router-dom

# Paso 2: Organizar las Imágenes (Activos)
Antes de programar, prepara tus archivos multimedia. Como hemos visto, la carpeta public es clave.

Ve a la carpeta public.

Crea una carpeta llamada img.

Copia dentro tus archivos (ej: nit_estrellada.webp, obra2.webp, etc.).

Tip: Asegúrate de que los nombres no tengan espacios ni mayúsculas extrañas.

# Paso 3: Crear la Estructura de Carpetas
Dentro de la carpeta src, organiza tus archivos para que el proyecto sea escalable:

src/components/: Para el Navbar.jsx y el FormulariContacte.jsx.

src/pages/: Para Inici.jsx, Imatges.jsx y Contacte.jsx.

# Paso 4: Configurar la Navegación Global (App.jsx)
Este es el "cerebro". Aquí defines qué se muestra según la URL.

Importa los componentes de react-router-dom.

Envuelve todo en <BrowserRouter>.

Define tus <Routes> y <Route>.

Coloca el <Navbar /> fuera de las rutas pero dentro del router para que sea visible en todas las páginas.

# Paso 5: Crear el Navbar (Navbar.jsx)
Crea el menú de navegación usando <NavLink>. Recuerda que esto permite cambiar de página sin que la web parpadee (Single Page Application).

# Paso 6: Crear las Páginas de Contenido
Ahora rellena cada archivo de la carpeta pages:

Inici.jsx: El diseño de bienvenida.

Imatges.jsx: Aquí creas el array de objetos con las rutas de las imágenes y usas el .map() para generar la cuadrícula.

Contacte.jsx: Importa aquí tu componente de formulario.

# Paso 7: El Formulario (FormulariContacte.jsx)
Crea la lógica del formulario:

Define los useState para cada campo.

Usa el useRef y useEffect para el focus automático.

Crea la función handleEnviar con las validaciones y el alert.

# Paso 8: El Diseño Final (App.css)
Coge todo el CSS y pégalo en tu archivo de estilos.

Primero el diseño de escritorio (Grid, Flexbox).

Al final, las Media Queries (@media (max-width: 768px)) para el menú apilado y la galería de una sola columna.

# Paso 9: Probar y Desplegar
Para ver tu progreso, ejecuta en la terminal:

Bash
npm run dev
Abre el enlace que te dé (normalmente http://localhost:5173) y prueba:

- Que el menú cambie de color al hacer clic (clase .active).

- Que el formulario dé error si dejas campos vacíos.

- Que al encoger la ventana del navegador, todo se ponga en una columna.