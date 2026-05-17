# Don José's

Sitio web de restaurante preparado con Vue 3 y Vite para despliegue en GitHub Pages.

## Comandos

- `npm install` — instala dependencias
- `npm run dev` — inicia el servidor de desarrollo
- `npm run build` — genera los archivos estáticos en `docs/`
- `npm run preview` — prueba la versión de producción localmente

## Configuración

La salida de compilación se genera en `docs/`, lista para usar en GitHub Pages.

## Configuraciones adicionales

- `docs/CNAME`: ya creado con `don-joses.jorgelsc.dev`.
- Formulario de contacto: el formulario POST envía a Formspree. Reemplaza `https://formspree.io/f/<FORM_ID>` en `src/pages/Contact.vue` por tu endpoint.
- Google Analytics: reemplaza `MEASUREMENT_ID` en `index.html` con tu ID de GA4.

## Deploy automático
El workflow de GitHub Actions está en `.github/workflows/deploy.yml` y publica `docs/` en Pages.

## Datos y CMS ligero
- `src/data/menu.json` contiene el menú estructurado.
- `src/data/site.json` contiene teléfono, dirección y enlace a Google Maps (se tomó de `Info/GoogleMaps`).

