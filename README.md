# Mundo Gatuno 🐾

Sitio web adaptable dedicado a los gatos, creado con HTML, CSS y JavaScript sin frameworks.

## Estructura

- `index.html`: contenido principal de la página.
- `css/styles.css`: estilos, colores, diseño adaptable y animaciones hover.
- `js/app.js`: menú móvil, mensajes aleatorios y año del pie de página.
- `assets/`: carpeta disponible para añadir imágenes locales propias.

## Verlo en tu computador

1. Descarga y descomprime la carpeta.
2. Abre la carpeta `gatitos-web` en Visual Studio Code.
3. Abre `index.html` en un navegador. También puedes usar la extensión Live Server.

Las fotografías se cargan desde Unsplash mediante enlaces de imágenes; por eso se necesita conexión a Internet para verlas. Las fuentes también se cargan desde Google Fonts.

## Subirlo manualmente a GitHub

1. Crea un repositorio público nuevo en GitHub.
2. Entra al repositorio y selecciona **Add file → Upload files**.
3. Sube `index.html` y las carpetas `css`, `js` y `assets` con su contenido.
4. Pulsa **Commit changes**.
5. Ve a **Settings → Pages**.
6. En **Build and deployment**, selecciona **Deploy from a branch**, rama `main` y carpeta `/ (root)`. Guarda.
7. Espera a que GitHub Pages publique el sitio.

El archivo `index.html` debe permanecer en la raíz del repositorio para funcionar como página principal.

## Actualizar después desde Git

Cuando hayas clonado el repositorio y modificado los archivos:

```bash
git add .
git commit -m "Actualizacion de Mundo Gatuno"
git push origin main
```
