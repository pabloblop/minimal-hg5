# Minimal HG5

Proyecto Node ultra básico para servir contenido estático.

## Requisitos
- Node 18+

## Instalación
```bash
npm install
```

(No hay dependencias por defecto.)

## Uso
```bash
npm start
```
Abre `http://localhost:3000` en el navegador.

## Estructura
```
minimal-hg5/
  package.json
  server.js
  public/
    index.html
```

## Personalización
- Edita `public/index.html` para el contenido.
- Añade más archivos en `public/` y se servirán automáticamente.

## Variables
- `PORT` para cambiar el puerto (`export PORT=4000`).

## Licencia
Uso interno.
