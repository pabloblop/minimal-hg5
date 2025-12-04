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
│   ├── header.html             # Header para docs
│   ├── footer.html             # Footer para docs
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
- **Docs**: Layout con header, sidebar + content, footer
- **Dutti**: Layout con header + content, footer (sin sidebar)
- **Rutas de includes**: Usar rutas específicas:
  - `{% include 'components/docs/header.html' %}`
  - `{% include 'components/dutti/header.html' %}`

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

## Recursos

- [HolyGrail5](https://github.com/holygrailcss/holygrail5)
- [Eleventy Documentation](https://www.11ty.dev/)
- [PostCSS](https://postcss.org/)
- [Vercel Documentation](https://vercel.com/docs)

## Repositorio

- GitHub: [pabloblop/minimal-hg5](https://github.com/pabloblop/minimal-hg5)
- Vercel: Auto-deploy en main branch
