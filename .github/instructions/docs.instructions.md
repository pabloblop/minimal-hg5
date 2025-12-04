---
applyTo: 'src/docs/**'
---

# Instrucciones - Sección Docs

## Descripción

La sección **Docs** es la documentación central del proyecto. Usa el **layout `docs`** con:
- Header personalizado para documentación
- **Sidebar** con navegación entre secciones
- Footer con enlaces legales
- Estilos desde `docs.css`

## Estructura

```
src/docs/
├── introduccion.html
├── guia.html
├── referencia.html
├── api.html
└── ejemplos.html
```

## Crear una Nueva Página de Documentación

### 1. Front Matter
```yaml
---
layout: docs
title: Título de la Página
permalink: /docs/mi-pagina/
---
```

### 2. Contenido HTML
```html
<section class="mb-32">
  <h2 class="h2 mb-16">Sección Principal</h2>
  <p class="text-m mb-16">Párrafo de contenido...</p>
</section>
```

**IMPORTANTE**: No usar CSS inline (`style="..."`). Todo debe estar en `docs.css`.

### 3. Clases HolyGrail5 Disponibles
- **Spacing**: `mb-8`, `mb-16`, `p-16`, `p-24`
- **Typography**: `h1`, `h2`, `h3`, `text-m`, `text-s`
- **Flexbox**: `hg-d-flex`, `hg-gap-16`, `hg-justify-between`
- **Grid**: `row`, `col-xs-12`, `col-md-6`

### 4. Actualizar Sidebar

Editar `src/_includes/components/docs/sidebar.html`:
```html
<li class="mb-8">
  <a href="/docs/mi-pagina/" class="text-m">Mi Página</a>
</li>
```

## Estilos (docs.css)

El archivo `src/css/docs.css`:
- Importa holygrail5
- Define variables de color para documentación
- Incluye transiciones y efectos hover

### Variables Disponibles
```css
--hg-color-primary: #1a1a1a     /* Color principal */
--hg-color-light-grey: #f5f5f5  /* Fondo claro */
--hg-color-dark-grey: #2a2a2a   /* Bordes y acentos */
```

## Componentes Docs

### Header
- Ubicado en: `src/_includes/components/docs/header.html`
- Título: "Documentación Dutti"
- Links: Home, Docs

### Sidebar
- Ubicado en: `src/_includes/components/docs/sidebar.html`
- Navegación entre páginas de docs
- Links a: Introducción, Guía, Referencia, API, Ejemplos

### Footer
- Ubicado en: `src/_includes/components/docs/footer.html`
- Copyright: "© 2025 Documentación Dutti"
- Links legales

## Accesibilidad

**OBLIGATORIO cumplir WCAG 2.1 nivel AA:**
- ✅ Usar HTML semántico: `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`
- ✅ Roles ARIA: `role="navigation"` en sidebars y navegaciones
- ✅ Etiquetas descriptivas en todos los enlaces
- ✅ Contraste mínimo 4.5:1 (texto normal) / 3:1 (textos grandes)
- ✅ Jerarquía de headings: h1 → h2 → h3 (no saltarse niveles)
- ✅ Alt text en todas las imágenes
- ✅ Navegación por teclado funcional
- ✅ Formularios con `<label for="id">`

## Convenciones

### Nombres de Archivos
- Usar **snake_case**: `mi-pagina.html`
- Usar **slugs URL-friendly** en permalink

### URLs
- Rutas: `/docs/nombre-pagina/`
- Siempre con trailing slash

### Contenido
- Usar **headings jerárquicos**: h2 para secciones, h3 para subsecciones
- Mantener **párrafos cortos** y legibles
- Usar **listas** para enumerar conceptos
- Ejemplos en bloques de código

### Accesibilidad
- Usar **roles ARIA** cuando sea necesario
- Asegurar **contraste de colores**
- Estructurar contenido con headings semánticos

## Build

```bash
npm run dev          # Ver cambios en tiempo real
npm run build        # Build final
```

Los cambios en:
- **HTML** → Eleventy detecta y regenera
- **CSS** → PostCSS recompila `docs.css`
- **Componentes** → Eleventy regenera páginas que los usan

## Deploy

Los cambios en `main` branch disparan automáticamente el deploy en Vercel.

## Recursos

- [HolyGrail5 Clases](https://holyguide.es/)
- [Eleventy Templates](https://www.11ty.dev/docs/)
- [Nunjucks Syntax](https://mozilla.github.io/nunjucks/templating.html)
