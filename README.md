# Amigo Secreto

Una aplicación web simple para organizar el juego de "Amigo Secreto". Permite agregar nombres de participantes y sortear aleatoriamente quién será el amigo secreto de cada persona.

## 🎯 Características

- **Agregar participantes**: Ingresa los nombres de todos los participantes
- **Lista visual**: Los nombres se muestran en una lista organizada, uno debajo del otro
- **Sorteo aleatorio**: Al hacer clic en "Sortear amigo", se selecciona aleatoriamente un participante
- **Interfaz limpia**: Diseño moderno y fácil de usar
- **Validación**: No permite agregar nombres vacíos

## 🚀 Cómo usar

1. **Agregar amigos**: 
   - Escribe el nombre de un participante en el campo de texto
   - Haz clic en "Añadir" para agregarlo a la lista

2. **Ver la lista**: 
   - Todos los nombres agregados aparecerán en una lista debajo del campo de entrada

3. **Sortear**:
   - Haz clic en el botón "Sortear amigo" para seleccionar aleatoriamente un participante
   - El nombre sorteado aparecerá en la parte inferior
   - La lista se limpiará automáticamente después del sorteo

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos y responsivos
- **JavaScript**: Lógica de la aplicación
- **Fonts**: Google Fonts (Inter y Merriweather)

## 📁 Estructura del proyecto

```
amigosecreto/
├── index.html          # Página principal
├── app.js             # Lógica de la aplicación
├── style.css          # Estilos CSS
├── assets/            # Imágenes y recursos
│   ├── amigo-secreto.png
│   ├── frame.png
│   └── play_circle_outline.png
└── README.md          # Este archivo
```

## 🎮 Funcionalidades técnicas

- **Array de participantes**: Almacena los nombres en un array JavaScript
- **Manipulación del DOM**: Crea elementos `<li>` dinámicamente para cada participante
- **Generación aleatoria**: Utiliza `Math.random()` para seleccionar participantes
- **Gestión de estado**: Limpia automáticamente la lista después del sorteo

## 🎨 Interfaz

- Diseño responsive y moderno
- Iconos intuitivos
- Colores suaves y agradables
- Tipografía clara y legible
- Accesibilidad mejorada con atributos ARIA

## 📝 Licencia

Este proyecto está bajo la licencia especificada en el archivo LICENSE.