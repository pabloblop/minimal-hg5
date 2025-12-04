---
applyTo: 'src/index.html'
---

# Instrucciones - Sección Dutti

## Descripción

La sección **Dutti** es para **páginas principales del sitio** sin sidebar. Usa el **layout `dutti`** con:
- Header personalizado para Dutti
- **Sin sidebar** - Diseño limpio y abierto
- Footer con enlaces legales
- Estilos desde `dutti.css`

## Estructura

Actualmente:
```
src/
├── index.html              # Home del sitio (usa layout dutti)
```

En el futuro se pueden añadir:
```
src/dutti/
├── productos.html
├── nosotros.html
├── contacto.html
└── ...
```

## Crear una Nueva Página Dutti

### 1. Front Matter
```yaml
---
layout: dutti
title: Título de la Página
---
```

### 2. Estructura HTML
```html
<div class="row">
  <div class="col-xs-12">
    <h1 class="h1 mb-24">Título Principal</h1>
    <p class="text-l mb-32">Descripción general...</p>
    
    <section class="mb-32">
      <h2 class="h2 mb-16">Sección</h2>
      <!-- Contenido -->
    </section>
  </div>
</div>
```

**IMPORTANTE**: No usar CSS inline (`style="..."`). Todo debe estar en `dutti.css`.

### 3. Clases HolyGrail5 Disponibles
- **Spacing**: `mb-8`, `mb-16`, `mb-24`, `p-16`, `p-24`
- **Typography**: `h1`, `h2`, `h3`, `text-l`, `text-m`, `text-s`
- **Grid**: `row`, `col-xs-12`, `col-md-6`, `col-md-4`
- **Flexbox**: `hg-d-flex`, `hg-gap-16`, `hg-justify-center`

### 4. Componentes Dutti

**Header**
- Ubicado en: `src/_includes/components/dutti/header.html`
- Título: "Dutti"
- Links: Home, Documentación

**Footer**
- Ubicado en: `src/_includes/components/dutti/footer.html`
- Copyright: "© 2025 Dutti"
- Links legales

## Estilos (dutti.css)

El archivo `src/css/dutti.css`:
- Importa holygrail5
- Define variables de color para Dutti (tema corporativo)
- Estilos limpios y profesionales

### Variables Disponibles
```css
--hg-color-primary: #000000     /* Negro principal */
--hg-color-secondary: #f4f2ed   /* Crema/Beige */
--hg-color-light-grey: #f0f0f0  /* Gris claro */
--hg-color-dark-grey: #737373   /* Gris oscuro */
```

### Personalización de Estilos

Editar `src/css/dutti.css` para cambiar:
- Colores corporativos
- Tipografías
- Efectos hover
- Transiciones

## Accesibilidad

**OBLIGATORIO cumplir WCAG 2.1 nivel AA:**
- ✅ Usar HTML semántico: `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`
- ✅ Roles ARIA cuando sea necesario: `aria-label`, `aria-describedby`
- ✅ Etiquetas descriptivas en navegación y links principales
- ✅ Contraste mínimo 4.5:1 (texto normal) / 3:1 (textos grandes)
- ✅ Jerarquía de headings: h1 → h2 → h3 (no saltarse niveles)
- ✅ Alt text descriptivo en todas las imágenes
- ✅ Botones con labels claros
- ✅ Navegación por teclado (Tab, Enter, Esc)
- ✅ Formularios con `<label for="id">` si existen

## Convenciones

### Nombres de Archivos
- Usar **snake_case**: `mi-pagina.html`
- Archivos en `src/` o `src/dutti/`

### Diseño
- Layouts **limpios y espaciosos**
- **Sin sidebar** - Maximizar espacio de contenido
- Usar **grid 12 columnas** de HolyGrail5
- **Responsive** desde mobile

### Contenido
- Textos **claros y directos**
- Usar **imágenes y visuals**
- Mantener **jerarquía visual**
- Call-to-actions prominentes

### Accesibilidad
- Semántica HTML correcta
- Contraste de colores WCAG
- Navegación por teclado

## Ejemplos de Layouts

### Hero Section
```html
<section class="hero-section mb-32 p-24">
  <div class="row">
    <div class="col-xs-12 col-md-8">
      <h1 class="h1 mb-16">Título Destacado</h1>
      <p class="text-l">Descripción atractiva del contenido...</p>
    </div>
  </div>
</section>
```

**Estilos en `dutti.css`:**
```css
.hero-section {
  background-color: var(--hg-color-secondary);
}
```

### Grid de Tarjetas
```html
<div class="row mb-32">
  <div class="col-xs-12 col-md-4 mb-16">
    <article class="card p-16">
      <h3 class="h3 mb-8">Tarjeta 1</h3>
      <p class="text-m">Contenido...</p>
    </article>
  </div>
  <!-- Repetir para más tarjetas -->
</div>
```

**Estilos en `dutti.css`:**
```css
.card {
  background-color: var(--hg-color-light-grey);
}
```

## Build

```bash
npm run dev          # Servidor local con hot reload
npm run build        # Build final para Vercel
```

Los cambios en:
- **HTML** → Eleventy detecta y regenera
- **CSS** → PostCSS recompila `dutti.css`

## Deploy

Los cambios en `main` branch disparan automáticamente el deploy en Vercel.

## Recursos

- [HolyGrail5 Framework](https://holyguide.es/)
- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [Responsive Design Patterns](https://web.dev/patterns/)
