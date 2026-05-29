# ⚙️ System Design — Interactive Guide

Guía visual e interactiva de diseño de sistemas, optimizada para GitHub Pages.

## 🚀 Deploy en GitHub Pages

### Opción 1: Desde la raíz del repositorio
1. Crea un nuevo repositorio en GitHub (ej: `system-design`)
2. Sube el contenido de esta carpeta como raíz del repo
3. Ve a **Settings → Pages → Source: Deploy from a branch**
4. Selecciona `main` branch y `/ (root)`
5. El sitio estará disponible en `https://tu-usuario.github.io/system-design/`

### Opción 2: Desde una subcarpeta `/docs`
1. Renombra esta carpeta a `docs` dentro de tu repo
2. En Settings → Pages, selecciona source: `/docs`

### Archivos importantes para GitHub Pages
- `.nojekyll` — Evita procesamiento Jekyll (necesario para archivos con `_`)
- `404.html` — Página de error personalizada
- `index.html` — Punto de entrada principal

## 📁 Estructura del Proyecto

```
system-design/
├── index.html              ← Página principal (Chapter 1)
├── styles.css              ← Tema visual (Deep Blue + Sky Blue)
├── script.js               ← Interactividad y animaciones
├── .nojekyll               ← Desactiva Jekyll en GitHub Pages
├── 404.html                ← Página de error personalizada
├── README.md               ← Este archivo
├── tema_system_design.md   ← Documento de tema/paleta de colores
└── diagrams/
    ├── chapter1_single_server.drawio
    ├── chapter1_load_balancer.drawio
    ├── chapter1_cache_cdn.drawio
    ├── chapter1_data_centers_sharding.drawio
    └── chapter1_full_architecture.drawio
```

## 🎨 Paleta de Colores

Inspirada en un diseño moderno tipo healthcare/tech con gradientes azules:

| Color | Hex | Uso |
|-------|-----|-----|
| Deep Blue | `#0a1628` | Background principal |
| Navy Card | `#0f2137` | Cards y contenedores |
| Sky Blue | `#4da8da` | Acento primario |
| Electric Blue | `#007bff` | Botones, CTAs |
| Purple | `#6c63ff` | Nav active, badges |
| Teal | `#20c997` | Success, checkmarks |

## 📐 Diagramas Draw.io

Los archivos `.drawio` se pueden abrir con:
- [draw.io web](https://app.diagrams.net/)
- VS Code + extensión "Draw.io Integration"
- App de escritorio diagrams.net

## 🛠️ Tecnologías

- HTML5 semántico
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- JavaScript vanilla (Intersection Observer API)
- SVG inline para diagramas interactivos
- Google Fonts (Inter, JetBrains Mono)
- Font Awesome 6 icons
- 100% estático — no requiere build step

## 📱 Responsive

- Desktop: navegación completa + TOC lateral con dots
- Tablet: TOC oculto, grid adaptativo
- Mobile: layout single-column, nav colapsada
