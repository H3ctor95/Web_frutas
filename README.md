# Frutas Tropicales de Guatemala

Sitio web informativo sobre las frutas tropicales de Guatemala: tipos de frutas, zonas de cultivo y recetas tradicionales.

**Proyecto:** Página de Frutas  
**Curso:** Desarrollo Web  
**Año:** 2026  
**Estudiante:** Veliz  

---

## Descripción

Página web estática que presenta contenido sobre frutas tropicales producidas en Guatemala. Incluye una introducción general, información nutricional y consejos de salud, un catálogo de frutas con sus características, las zonas donde se cultivan y una sección de recetas con frutas.

*"Naturaleza, sabor y salud en cada fruta."*

---

## Tecnologías

- **HTML5** — Estructura y contenido de las páginas
- **CSS3** — Estilos, layout (Flexbox, Grid), diseño responsive
- **Normalize.css** — Normalización de estilos entre navegadores
- **Google Fonts** — Tipografía *Playfair Display*

---

## Estructura del proyecto

```
Web_frutas-main/
├── index.html              # Página de inicio
├── README.md                # Este archivo (documentación)
├── css/
│   ├── normalize.css        # Reset de estilos
│   └── style.css            # Estilos principales del sitio
├── img/                     # Imágenes (frutas, fondos, recetas, zonas)
├── frutas/
│   └── Frutas.html          # Sección: tipos de frutas tropicales
├── zonas/
│   └── ZonaCultivos.html    # Sección: zonas de cultivo
└── recetas/
    └── Recetas.html         # Sección: recetas con frutas
```

---

## Secciones del sitio

- **Inicio** (`index.html`)  
  Presentación del sitio, texto “¿Sabías que…?” y dos bloques: Información nutricional y Consejos de salud.

- **Frutas** (`frutas/Frutas.html`)  
  Catálogo de frutas tropicales costeras con descripción y características de cada una.

- **Zonas de Cultivos** (`zonas/ZonaCultivos.html`)  
  Regiones de cultivo en Guatemala y descripción de cada zona.

- **Recetas** (`recetas/Recetas.html`)  
  Recetas con frutas: licuados, jugos, helado de coco, mango con pepita y chamoy, entre otras.

---

## Navegación

En todas las páginas hay un menú superior fijo con enlaces a:

- Inicio  
- Frutas  
- Zonas de Cultivos  
- Recetas  

---

## Cómo ver el proyecto

1. Clona o descarga el proyecto en tu equipo.
2. Abre la carpeta del proyecto y abre `index.html` con tu navegador (doble clic o arrastrar el archivo al navegador).
3. También puedes usar una extensión de “Live Server” en VS Code o similar para servir los archivos y evitar problemas con rutas relativas.

No se requiere servidor ni instalación de dependencias; es solo HTML y CSS.

---

## Diseño y estilos

- **Colores:** Verde (#2E7D32, #1B5E20), naranja/ámbar (#FF9800, #ff7043), fondos claros.
- **Layout:** Contenedores con `max-width`, Grid y Flexbox para secciones y tarjetas.
- **Recetas:** Primera receta estándar; recetas 2 y 3 en mosaico de dos columnas (imagen izquierda, texto derecha); receta 4 con imagen a la derecha; receta 5 igual que la primera.
- **Responsive:** Ajustes con `@media` para pantallas pequeñas (por ejemplo, mosaico de recetas en una sola columna).

---

## Licencia

© 2026 Veliz — Proyecto académico. Todos los derechos reservados.
