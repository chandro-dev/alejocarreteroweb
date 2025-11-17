# alejocarreteroweb

Portafolio personal construido con React + Vite para mostrar mis proyectos, CV, info de contacto y actividad en GitHub. La idea fue crear una experiencia ligera pero animada, pensada para GitHub Pages y con dark mode persistente.

## Características principales

- Landing animada con Framer Motion, Swiper y Tailwind (v4 beta) para hero, stats, carrusel de tecnologías y CTA.
- Sección "Proyectos" que consume `projects.json` (generado por Actions) o, si no existe, la API pública de GitHub. Incluye filtros por lenguaje, búsqueda, orden, paginación y toggle "Solo con Live".
- Widgets de GitHub hechos a mano con datos de la REST API: métricas, lenguajes y feed de commits cruzado con los repos reales para mostrar enlaces correctos.
- CV online con opción de exportar a PDF y sección de contacto simple.
- Dark mode global guardado en `localStorage` y aplicado al `<html>`.

## Stack

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 4 beta](https://tailwindcss.com/blog/tailwindcss-v4-alpha) + plugin Typography
- [Framer Motion](https://www.framer.com/motion/), [Swiper](https://swiperjs.com/), [React Icons](https://react-icons.github.io/react-icons/)
- [React Router 7](https://reactrouter.com/) para `/cv`, `/proyectos`, `/contacto`
- Hooks personalizados que consumen la API pública de GitHub (sin backend)

## Scripts

```bash
npm install          # dependencias
npm run dev          # entorno local
npm run build        # build de producción (base /alejocarreteroweb/)
npm run deploy       # compila y publica en gh-pages
```

## Deploy

- Se sirve desde GitHub Pages: `https://chandro-dev.github.io/alejocarreteroweb/`.
- `vite.config.js` fija `base: '/alejocarreteroweb/'` y `package.json` define `homepage` para que los assets y rutas funcionen en subrutas.
- `projects.json` debe copiarse a `public/` o generarse vía GitHub Actions para alimentar la página de proyectos sin depender de la API en tiempo real.

## Cómo se hizo

1. **Diseño/maquetación**: landing modular con componentes (hero, stats, carrusel, CTA, widgets) + estilo glassmorphism/light gradients.
2. **Integración GitHub**: `useGithubPublicData` descarga repos y eventos una sola vez; de ahí se derivan stats, commits recientes y grid de proyectos reutilizable.
3. **Página de Proyectos**: loader resiliente que usa `projects.json` cuando existe y hace fallback a `/users/:username/repos` cuando no.
4. **Secciones CV y Contacto**: componentes propios con la misma estética, listos para imprimirse/exportarse.
5. **Optimización para GitHub Pages**: rutas prefijadas (`/alejocarreteroweb/...`), script `deploy` y configuración de `gh-pages` CLI.

## Próximos pasos

- Automatizar la generación de `projects.json` con GitHub Actions.
- Agregar pruebas de render (Vitest + Testing Library) para los widgets que consumen la API.
- Seguir ajustando accesibilidad (roles ARIA, foco visible, traducciones).
