---
applyTo: '**'
---

# Instrucciones Generales - Minimal HG5

## Descripción del Proyecto

**Minimal HG5** es un sitio web modular construido con:
- **Eleventy 3.1.2** - Generador de sitios estáticos
- **HolyGrail5** - Framework CSS con generador
- **Nunjucks** - Motor de templates
- **PostCSS** - Procesador de CSS

El proyecto tiene **2 secciones principales** con layouts y estilos diferenciados:
- **Documentación (Docs)** - Con sidebar de navegación
- **Dutti** - Páginas principales sin sidebar

## Estructura del Proyecto

```
minimal-hg5/
├── .github/
│   └── instructions/           # Guías para agentes IA
├── src/
│   ├── _layouts/               # Layouts de Eleventy
│   │   ├── docs.html
│   │   └── dutti.html
│   ├── _includes/
│   │   └── components/
│   │       ├── docs/           # Componentes para docs
│   │       └── dutti/          # Componentes para dutti
│   ├── css/
│   │   ├── docs.css            # Estilos + holygrail5 para docs
│   │   └── dutti.css           # Estilos + holygrail5 para dutti
│   ├── docs/                   # Páginas de documentación
│   └── index.html              # Home (usa layout docs)
├── .eleventy.js                # Configuración de Eleventy
├── postcss.config.js           # Configuración de PostCSS
├── package.json                # Scripts y dependencias
└── vercel.json                 # Configuración de Vercel
```

## Convenciones de Código

### Nombres y Comentarios
- **Variables, funciones, comentarios**: Inglés
- **Contenido de páginas**: Español
- **NO añadir comentarios innecesarios** en el código

### Estructura de Componentes

```
components/
├── docs/
│   └── sidebar.html            # Sidebar de navegación
└── dutti/
    ├── header.html             # Header para dutti
    └── footer.html             # Footer para dutti
```

## Build y Deploy

### Scripts Disponibles
```bash
npm run build:css               # Compilar CSS con PostCSS
npm run dev                     # Servidor local con hot reload
npm run build                   # Build para producción
npm run clean                   # Limpiar _site/
```

### Pipeline de Build
1. **PostCSS** compila `docs.css` y `dutti.css`
   - Resuelve `@import 'holygrail5/dist/output.css'`
   - Genera `_site/css/docs.css` y `_site/css/dutti.css`
2. **Eleventy** genera HTML en `_site/`
3. **Vercel** publica automáticamente

### Deployment
- **Servidor**: Vercel
- **Branch**: main (deploy automático)
- **Output**: _site/

## Reglas Específicas para Agentes

### 1. HolyGrail5 Integration
- **Ambos CSS importan holygrail5**: `@import 'holygrail5/dist/output.css'`
- Usar variables CSS de holygrail5: `var(--hg-color-*)`
- Consultar [holygrail5 docs](https://holyguide.es/) antes de añadir estilos nuevos

### 2. CSS
- **NO usar CSS inline** en archivos HTML
- Todos los estilos deben estar en:
  - `src/css/docs.css` (para sección docs)
  - `src/css/dutti.css` (para sección dutti)
- Usar **clases de holygrail5** o crear **clases reutilizables** en los CSS
- Ejemplo ❌ INCORRECTO: `style="background-color: var(--hg-color-primary);"`
- Ejemplo ✅ CORRECTO: `class="bg-primary"` (definida en el CSS)

### 3. Accesibilidad (OBLIGATORIO)
- **Siempre cumplir normas de accesibilidad WCAG 2.1 nivel AA**
- Usar **HTML semántico**: `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`
- Usar **roles ARIA** cuando sea necesario: `role="navigation"`, `aria-label`, `aria-describedby`
- **Contraste de colores**: Mínimo 4.5:1 para texto normal, 3:1 para textos grandes
- **Navegación por teclado**: Todos los elementos interactivos deben ser accesibles con Tab
- **Alt text**: Toda imagen debe tener `alt` descriptivo
- **Etiquetas en formularios**: Usar `<label>` con `for` attribute
- **Headings jerárquicos**: No saltar niveles (h1 → h2 → h3, NO h1 → h3)

### 4. Layouts
- **Docs**: Layout con sidebar + main (sin header ni footer)
- **Dutti**: Layout con header + main + footer (sin sidebar)
- **Rutas de includes**: Usar rutas específicas:
  - `{% include 'components/docs/sidebar.html' %}`
  - `{% include 'components/dutti/header.html' %}`
  - `{% include 'components/dutti/footer.html' %}`

### 5. Front Matter
Formato para páginas:
```yaml
---
layout: docs      # o 'dutti'
title: Título
---
```

### 6. Cambios No Intrusivos
- Mantener compatibilidad hacia atrás
- Seguir patrones establecidos
- Documentar cambios complejos

### 7. Convenciones de Git
- **Commits**: Conventional Commits (`feat:`, `fix:`, `chore:`, etc.)
- **Branches**: `feature/nombre`, `hotfix/nombre`
- **Squash and merge** para features

## Guía de Maquetación con HolyGrail5

### Clases de Tipografía (Responsive Automático)
```
.h2 → Título principal
.title-l-b → Título grande negrita
.title-l → Título grande
.title-m → Título mediano
.title-s → Título pequeño
.text-l → Texto grande
.text-m → Texto mediano
```

### Spacing (Usar siempre estas clases, NO inline styles)
**Padding/Margin en todos lados:** `.p-{valor}` / `.m-{valor}`
- Valores: 0, 4, 8, 12, 16, 20, 24, 32, 40, 64, 80, 96
- Responsive: `.p-8 md:p-24` (8px mobile, 24px desktop)

**Por lado:** `.pt-`, `.pr-`, `.pb-`, `.pl-` / `.mt-`, `.mr-`, `.mb-`, `.ml-`

**Margin automático (centrado):** `.m-0 mx-auto`

### Helpers de Display
```
.hg-d-block → Display block
.hg-d-flex → Display flex
.hg-d-inline-block → Display inline-block
.hg-d-none → Ocultar elemento
.hg-d-contents → Display contents
```

### Flexbox - Dirección
```
.hg-flex-row → Fila (horizontal)
.hg-flex-column → Columna (vertical)
.hg-flex-wrap → Con wrapping
.hg-flex-nowrap → Sin wrapping
```

### Flexbox - Alineación (justify-content)
```
.hg-justify-start → Inicio
.hg-justify-center → Centro horizontal
.hg-justify-end → Final
.hg-justify-between → Espacio entre elementos
.hg-justify-around → Espacio alrededor
.hg-justify-evenly → Espacio uniforme
```

### Flexbox - Alineación Vertical (align-items)
```
.hg-items-start → Arriba
.hg-items-center → Centro vertical
.hg-items-end → Abajo
.hg-items-stretch → Estirar
.hg-items-baseline → Baseline
```

### Flexbox - Gap (Espaciado entre items)
```
.hg-gap-{valor} → Gap en todas direcciones (0, 4, 8, 12, 16, 20, 24, 32, 40, 64, 80, 96)
.hg-gap-x-{valor} → Gap horizontal (column-gap)
.hg-gap-y-{valor} → Gap vertical (row-gap)
Responsive: .hg-gap-8 md:hg-gap-16
```

### Flexbox - Crecimiento y Reducción
```
.hg-grow-0 → No crece
.hg-grow-1 → Crece proporcionalmente
.hg-grow-2 → Crece 2x
.hg-grow-auto → Crece automático
.hg-shrink-0 → No se encoge
.hg-shrink-1 → Se encoge proporcionalmente
```

### Flexbox - Order
```
.hg-order-first → Al inicio
.hg-order-last → Al final
.hg-order-1, .hg-order-2, .hg-order-3 → Orden específico
```

### Grid System (12 o 24 columnas según breakpoint)
```html
<div class="row">
  <div class="col-xs-12 col-md-6 col-lg-4">Contenido</div>
  <div class="col-xs-12 col-md-6 col-lg-4">Contenido</div>
  <div class="col-xs-12 col-md-12 col-lg-4">Contenido</div>
</div>
```

**Breakpoints:**
```
.col-xs-{1-12} → Extra small (default)
.col-sm-{1-12} → Small (768px)
.col-md-{1-12} → Medium (992px)
.col-lg-{1-12} → Large (1280px)
.col-xl-{1-24} → Extra large (1440px, 24 columnas)
```

### Colores (Variables CSS - USAR SIEMPRE)
```
var(--hg-color-white) → #ffffff
var(--hg-color-black) → #000000
var(--hg-color-primary) → #000000
var(--hg-color-error) → #b40016
var(--hg-color-success) → #76ae4a
var(--hg-color-warning) → #ffc700
var(--hg-color-info) → #1a32a4
var(--hg-color-dark-grey) → #737373
var(--hg-color-middle-grey) → #a9a9a9
var(--hg-color-light-grey) → #f0f0f0
var(--hg-color-sk-grey) → #e3e3e3
var(--hg-color-feel) → #fb9962
var(--hg-color-feel-dark) → #c94c07
var(--hg-color-special) → #b99d6b
var(--hg-color-bg-light) → #F0F0F0
var(--hg-color-bg-cream) → #f4f2ed
```

### Responsive Design (Mobile-First)
- Clases base aplican en mobile
- Prefijo `md:` para breakpoint 992px+
- Ejemplo: `.p-8 md:p-24` → 8px padding en mobile, 24px en desktop
- Ejemplo: `.hg-d-flex hg-flex-column md:hg-flex-row` → columna en mobile, fila en desktop

### Patrones Comunes

**Header Responsive:**
```html
<header class="p-16 md:p-24" style="background-color: var(--hg-color-primary); color: var(--hg-color-white);">
  <div class="hg-d-flex hg-flex-column md:hg-flex-row hg-justify-between hg-items-center">
    <h1 class="h2">Título</h1>
    <nav class="hg-d-flex hg-gap-16">...</nav>
  </div>
</header>
```

**Card con Grid:**
```html
<div class="row">
  <div class="col-xs-12 col-md-6 col-lg-4">
    <div class="p-16">
      <h3 class="title-l-b mb-8">Card</h3>
      <p class="text-m">Contenido</p>
    </div>
  </div>
</div>
```

**Flexbox Centrado:**
```html
<div class="hg-d-flex hg-justify-center hg-items-center" style="height: 200px;">
  Contenido centrado
</div>
```

**Ocultar en Mobile:**
```html
<div class="hg-d-none md:hg-d-block">
  Solo visible en desktop
</div>
```

### Mejores Prácticas
1. ✅ Usar clases de tipografía (`.h2`, `.text-m`, no `style="font-size"`)
2. ✅ Combinar clases para layout (`.hg-d-flex .hg-justify-between .hg-gap-16`)
3. ✅ Siempre responsive (`.p-8 md:p-24`)
4. ✅ Usar variables CSS para colores (no valores hexadecimales)
5. ✅ HTML semántico (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
6. ❌ NO usar inline styles (`style="..."`)
7. ❌ NO crear clases duplicadas si existen en HolyGrail5

## Recursos

- [HolyGrail5](https://github.com/holygrailcss/holygrail5)
- [Eleventy Documentation](https://www.11ty.dev/)
- [PostCSS](https://postcss.org/)
- [Vercel Documentation](https://vercel.com/docs)

## Repositorio

- GitHub: [pabloblop/minimal-hg5](https://github.com/pabloblop/minimal-hg5)
- Vercel: Auto-deploy en main branch
