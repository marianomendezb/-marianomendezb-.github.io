# marianomendezb.com — sitio nuevo

Sitio estático (HTML/CSS/JS puro, sin build) listo para GitHub Pages.

## Archivos
- `index.html` — secciones Work / Bio / Contact
- `styles.css` — estilos
- `script.js` — menú mobile
- `CNAME` — ya tiene tu dominio (marianomendezb.com) para que GitHub Pages lo reconozca
- `projects/` — una página HTML por cada proyecto (video + créditos), a las que se llega haciendo click en un tile de Work
- `projects/_template.html` — plantilla en blanco para crear páginas de proyecto nuevas (no se publica como proyecto en sí, solo se usa como base para copiar)

## Cómo publicarlo en GitHub Pages

1. Creá un repositorio nuevo en GitHub (puede ser público o privado con GitHub Pro/Team).
2. Subí estos 4 archivos a la raíz del repo (rama `main`).
3. En el repo: **Settings → Pages → Source** elegí la rama `main` y carpeta `/ (root)`.
4. En **Settings → Pages → Custom domain** escribí `marianomendezb.com` y guardá (esto vuelve a generar el archivo CNAME automáticamente, ya lo tenés incluido igual).
5. En el panel de tu dominio (donde lo compraste, no en Squarespace) apuntá los registros DNS a GitHub Pages:
   - 4 registros **A** apuntando a: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - o un registro **CNAME** en `www` apuntando a `tu-usuario.github.io`
6. Una vez que Squarespace deje de servir el dominio (des-conectalo de ahí primero), tildá "Enforce HTTPS" en GitHub Pages.

⚠️ Importante: mientras el dominio siga apuntando a Squarespace, tenés que sacarlo de ahí (o al menos liberar los registros DNS) antes de apuntarlo a GitHub, si no van a chocar.

## Cómo agregar tus proyectos reales

Cada proyecto real requiere DOS cambios: el tile en `index.html` (la miniatura dentro de Work) y su página propia dentro de `projects/`.

### 1. El tile en `index.html`

Dentro de la categoría que corresponda, cada proyecto es un bloque así:

```html
<a class="tile" href="projects/nombre-del-proyecto.html">
  <div class="tile-media">
    <img src="URL_DE_UNA_IMAGEN_DE_PORTADA" alt="">
    <span class="play-icon" aria-hidden="true"></span>
  </div>
  <div class="tile-caption">
    <span class="tile-title">Nombre del proyecto</span>
    <span class="tile-meta">Cliente — Año</span>
  </div>
</a>
```

- `href="projects/nombre-del-proyecto.html"` tiene que apuntar al archivo que vas a crear en el paso 2 (mismo nombre).
- La imagen (`img src`) es la portada que se ve antes de hacer click — subí tus propias imágenes a una carpeta `images/` del repo y usá esa ruta relativa (ej: `images/proyecto1.jpg`).
- Copiá/pegá el bloque completo tantas veces como proyectos tengas por categoría.

### 2. La página del proyecto en `projects/`

1. Duplicá `projects/_template.html` y renombralo, por ejemplo `projects/nombre-del-proyecto.html` (tiene que coincidir con el `href` del tile).
2. Abrí el archivo nuevo y reemplazá:
   - `{{TITLE}}` (aparece dos veces) por el nombre del proyecto.
   - `{{EMBED_URL}}` por el link de **embed** del video/audio (no el link normal de la página):
     - Vimeo: `https://player.vimeo.com/video/ID_DEL_VIDEO`
     - YouTube: `https://www.youtube.com/embed/ID_DEL_VIDEO`
     - Spotify: `https://open.spotify.com/embed/track/ID` (o `/album/ID`, `/playlist/ID`)
   - `{{CREDIT_ROWS}}` por una o más líneas con este formato, una por cada dato que quieras mostrar (cliente, director, productor, año, etc.):
     ```html
     <div class="credit-row"><span class="credit-label">Director:</span> <span class="credit-value">Nombre</span></div>
     ```
     Si querés que el nombre sea un link (por ejemplo al sitio del director o del estudio), poné el link adentro de `credit-value`:
     ```html
     <div class="credit-row"><span class="credit-label">Director:</span> <span class="credit-value"><a href="https://ejemplo.com">Nombre</a></span></div>
     ```

Ya tenés 10 páginas de ejemplo armadas en `projects/` (una por cada placeholder de `index.html`) para que veas el resultado funcionando — solo tenés que editarlas con tu contenido real en vez de crearlas de cero.

## Categorías actuales
Bespoke music & sound design · Film score · Game audio · Music production · Mixing & mastering

Para agregar o sacar una categoría, copiá/pegá (o borrá) un bloque `<div class="category">...</div>` completo en `index.html`.

