# marianomendezb.com — sitio nuevo

Sitio estático (HTML/CSS/JS puro, sin build) listo para GitHub Pages.

## Archivos
- `index.html` — todo el contenido (secciones Work / Bio / Contact)
- `styles.css` — estilos
- `script.js` — menú mobile + lightbox para los videos
- `CNAME` — ya tiene tu dominio (marianomendezb.com) para que GitHub Pages lo reconozca

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

Cada proyecto es un bloque así dentro de `index.html`, dentro de la categoría que corresponda:

```html
<article class="tile" data-embed="TU_LINK_EMBED_ACA">
  <div class="tile-media">
    <img src="URL_DE_UNA_IMAGEN_DE_PORTADA" alt="">
    <span class="play-icon" aria-hidden="true"></span>
  </div>
  <div class="tile-caption">
    <span class="tile-title">Nombre del proyecto</span>
    <span class="tile-meta">Cliente — Año</span>
  </div>
</article>
```

- `data-embed`: el link para incrustar el reproductor. Para que ande andando en el lightbox tiene que ser una URL de **embed**, no el link normal de la página:
  - Vimeo: `https://player.vimeo.com/video/ID_DEL_VIDEO`
  - YouTube: `https://www.youtube.com/embed/ID_DEL_VIDEO`
  - Spotify: `https://open.spotify.com/embed/track/ID` (o `/album/ID`, `/playlist/ID`)
- La imagen (`img src`) es la portada que se ve antes de hacer click — subí tus propias imágenes a una carpeta `images/` del repo y usá esa ruta relativa (ej: `images/proyecto1.jpg`).
- Copiá/pegá el bloque completo tantas veces como proyectos tengas por categoría.

## Categorías actuales
Bespoke music & sound design · Film score · Game audio · Music production · Mixing & mastering

Para agregar o sacar una categoría, copiá/pegá (o borrá) un bloque `<div class="category">...</div>` completo en `index.html`.
