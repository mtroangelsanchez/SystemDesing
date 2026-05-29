# 🎨 Tema Visual — System Design Site

## Inspiración

Basado en un diseño moderno tipo "Poly Clinic" con hero section de impacto visual, 
gradientes azules suaves, tipografía bold y layout limpio profesional.

## Paleta de Colores

### Colores Principales

| Nombre | Hex | RGB | Uso |
|--------|-----|-----|-----|
| Deep Blue | `#0a1628` | 10, 22, 40 | Background principal |
| Navy Card | `#0f2137` | 15, 33, 55 | Cards y contenedores |
| Royal Blue | `#1e3a5f` | 30, 58, 95 | Bordes activos |
| Sky Blue | `#4da8da` | 77, 168, 218 | Acento primario |
| Electric Blue | `#007bff` | 0, 123, 255 | Botones, CTAs |
| Light Cyan | `#67d4fc` | 103, 212, 252 | Highlights, badges |

### Colores de Soporte

| Nombre | Hex | Uso |
|--------|-----|-----|
| Soft White | `#f0f4f8` | Texto principal |
| Muted Gray | `#8ba4bc` | Texto secundario |
| Slate | `#5a7a95` | Texto muted |
| Accent Purple | `#6c63ff` | Nav active, badges |
| Success Teal | `#20c997` | Checkmarks, ventajas |
| Warning Amber | `#ffc107` | Alertas, consideraciones |
| Danger Coral | `#ff6b6b` | Errores, limitaciones |

### Gradientes

```css
--gradient-hero: linear-gradient(135deg, #0a1628 0%, #1a3a5c 40%, #4da8da 100%);
--gradient-primary: linear-gradient(135deg, #007bff, #67d4fc);
--gradient-card: linear-gradient(180deg, #0f2137 0%, #0a1628 100%);
--gradient-overlay: linear-gradient(to right, rgba(10,22,40,0.95) 0%, rgba(77,168,218,0.3) 100%);
```

## Tipografía

- **Headings:** Inter (800, 900) — bold, impactante
- **Body:** Inter (400, 500) — legible, moderno
- **Code:** JetBrains Mono (400) — monospace técnico

## Componentes Clave

### Hero Section
- Full-width con gradiente azul de izquierda a derecha
- Texto grande bold a la izquierda
- Efecto de overlay con transparencia
- Badge/pill con borde redondeado para categoría
- Botón "View Details" con borde blanco outline

### Navigation
- Fija en top con backdrop-filter blur
- Logo a la izquierda
- Links centrados con hover underline
- Active state con pill/badge púrpura
- Dropdown support

### Cards
- Background semi-transparente oscuro
- Borde sutil 1px con color del tema
- Border-left de 4px con gradiente para categoría
- Hover: elevación + glow sutil
- Border-radius: 16px

### Indicadores de Sección
- Dots verticales a la derecha (navegación lateral)
- Números grandes con gradiente para capítulos
- Icons en pills coloreadas para subtítulos

## Layout

- Max-width: 1200px centrado
- Padding lateral: 30px (desktop), 16px (mobile)
- Spacing entre secciones: 80px
- Grid de 2 columnas para comparaciones
- Grid responsive para cards de consideraciones

## Efectos y Animaciones

- `fadeInUp` para elementos al hacer scroll
- Hover scale(1.02) en diagramas SVG
- Transiciones suaves (0.3s cubic-bezier)
- Background grid sutil animado
- Glow effect en hover de cards

## Responsive Breakpoints

- Desktop: > 1200px (TOC visible, full grid)
- Tablet: 768px - 1200px (TOC hidden, 2-col grid)
- Mobile: < 768px (1-col, font sizes reducidos)

## GitHub Pages Ready

- No requiere build step
- Assets estáticos (HTML, CSS, JS)
- Fonts desde Google Fonts CDN
- Icons desde Font Awesome CDN
- `.nojekyll` para evitar procesamiento Jekyll
- Relative paths para navegación interna
