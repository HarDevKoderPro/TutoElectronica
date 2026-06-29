# AGENTS.md - Tutorial Interactivo de Electrónica

## Estado del Proyecto: Activo

## Última Sesión: 28/06/2026

### Cambios Implementados
- Creación completa del sitio web con 15 temas de electrónica
- Implementación de 6 calculadoras interactivas (Ohm, Potencia, Frecuencia, Serie, Paralelo, Colores)
- Visor 3D de componentes con rotación X/Y/Z
- Integración con Tinkercad para simulación práctica
- 8 ejercicios prácticos con instrucciones paso a paso
- 16 diagramas esquemáticos SVG
- Sistema de navegación sidebar con progreso
- **14 SVG heroes ilustrativos** para cada tema (inline en JS)
- **Calculadoras con resultados visuales SVG**: triángulos interactivos, formas de onda, diagramas de resistencias, resistor con bandas de colores
- **Estilos CSS** para resultados de calculadoras con animaciones

### Archivos del Proyecto
```
/
├── index.html        (Estructura HTML, modales, sidebar)
├── style.css         (Estilos CSS, variables, responsive)
├── main.js           (Lógica, courseData, calculadoras, visor)
├── AGENTS.md         (Este archivo)
├── images/svg/
│   ├── components/   (resistor-1k, led-red, capacitor, transistor, ic-555, protoboard)
│   └── diagrams/     (ohm-triangle, watt-triangle, exercise-15-1 a 15-8)
```

### Decisiones Clave
- **Sin frameworks**: HTML/CSS/JS vanilla, sin dependencias externas
- **SVG inline y externo**: Componentes como SVG externos, diagramas como inline en el JS
- **Tinkercad embebido**: Simulador externo en iframe en lugar de Three.js custom
- **Calculadoras bidireccionales**: Código de colores acepta entrada por selección de colores
- **Heroes SVG inline en JS**: 14 ilustraciones por tema generadas directamente en template literals
- **Resultados visuales en calculadoras**: SVG dinámicos con triángulos interactivos, formas de onda y diagramas

### Problemas Resueltos (Sesión Actual)
1. ❌ **Sintaxis rota**: `tema15` insertado dentro de `TINKERCAD_URLS` → Movido a `courseData`
2. ❌ **courseData sin cerrar**: Faltaba `};` de cierre → Agregado
3. ❌ **TINKERCAD_URLS inválido**: Le faltaba coma y cierre → Corregido
4. ✅ **Página no mostraba contenido**: Resuelto con corrección de sintaxis
5. ✅ **Imágenes SVG por tema**: 14 heroes inline en JS con colores del sitio
6. ✅ **Calculadoras con SVG visuales**: Triángulos, formas de onda, diagramas

### Pendiente (Prioridad Alta)
- [ ] Mejorar hero section de bienvenida principal
- [ ] Modo oscuro
- [ ] Más ejercicios prácticos
- [ ] Quizzes interactivos por tema
- [ ] Certificado de finalización

### Estructura del courseData
```javascript
const courseData = {
    welcome: { title, content },   // Página de bienvenida
    tema1: { title, content },      // Orígenes
    tema2: { title, content },      // Evolución
    ... hasta ...
    tema15: { title, content }      // Taller de simulación
};
```

### Funciones Principales
- `navigateToSection(id)` - Navega a un tema
- `loadSection(id)` - Carga contenido en el main
- `calculateOhm/Power/Frequency/Series/Parallel()` - Calculadoras
- `calculateFromColors()` - Código de colores
- `viewComponent3D(id)` - Visor 3D
- `openTinkercad(id)` - Abre simulador con ejercicio

### Convenciones
- IDs de temas: `tema1` a `tema15`, `welcome`
- IDs de ejercicios: `15-1` a `15-8`
- IDs de componentes: `resistor-1k`, `led-red`, etc.
- Nombres de archivos SVG: kebab-case
- Clases CSS: camelCase
- Funciones JS: camelCase

### Próximas Mejoras Planeadas
1. Imágenes SVG ilustrativas por tema (hero banners)
2. Diagramas de apoyo visual para temas teóricos
3. Modo oscuro
4. Más ejercicios prácticos
5. Quizzes interactivos por tema
6. Certificado de finalización
