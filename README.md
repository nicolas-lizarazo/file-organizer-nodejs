# 📂 File Organizer CLI

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Software Architecture](https://img.shields.io/badge/Architecture-Clean_Architecture-blue?style=for-the-badge)

Una herramienta de línea de comandos (CLI) robusta y eficiente diseñada para organizar automáticamente archivos en un directorio específico basándose en sus extensiones. Este proyecto ha sido construido aplicando principios de **Arquitectura Limpia** y **Patrones de Diseño** avanzados.

---

## ✨ Características

* 🔍 **Escaneo Inteligente**: Clasifica archivos automáticamente en categorías (Imágenes, Documentos, Música, etc.).
* 🛠 **Arquitectura Desacoplada**: Implementación mediante interfaces y adaptadores (Plugins) para `Inquirer`, `Chalk` y el sistema de archivos de Node.
* 🛡 **Manejo de Errores Robusto**: Uso del **Result Pattern** para asegurar flujos de datos predecibles sin excepciones no controladas.
* 🚀 **Confirmación de Seguridad**: Sistema de verificación previo a la ejecución para evitar movimientos accidentales.
* 📁 **Gestión Automática**: Creación inteligente de directorios destino mediante el uso de `mkdirSync` recursivo.

---

## 🏗 Arquitectura y Patrones

El proyecto sigue una estructura de capas para garantizar la escalabilidad y facilidad de mantenimiento:



1.  **Core (Use Cases)**: Contiene la lógica de negocio pura (`FileOrganizer.ts`), totalmente independiente de frameworks o librerías externas.
2.  **Services**: Implementación de adaptadores para el sistema operativo (`NodeFileSystem.ts`).
3.  **Plugins**: Abstracciones para herramientas de terceros (`Inquirer`, `Chalk`), permitiendo cambiar de librería con mínimo impacto.
4.  **Utils**: Estructuras de soporte como el objeto `Result` para estandarizar respuestas y manejo de estados.

---

## 🛠 Instalación y Configuración

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/file-organizer-nodejs.git](https://github.com/tu-usuario/file-organizer-nodejs.git)
    cd file-organizer-nodejs
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Compilar el proyecto:**
    ```bash
    npm run build
    ```

---

## 🚀 Uso

Inicia la herramienta en modo desarrollo con el siguiente comando:

```bash
npm run dev
```

### 🚀 Flujo de Trabajo

1.  **Ingreso de Ruta**: El CLI solicitará la ruta absoluta de la carpeta a organizar. El sistema arregla la entrada (elimina comillas y espacios).
2.  **Validación**: Se escanea el directorio y se informa al usuario la cantidad de archivos encontrados.
3.  **Confirmación**: Se solicita una confirmación final antes de realizar cualquier movimiento de archivos.

---

### 📂 Clasificación Predeterminada

El sistema utiliza las reglas definidas en `FILE_ORGANIZER_RULES` para agrupar archivos:

| Carpeta | Extensiones soportadas |
| :--- | :--- |
| **Documentos** | `.pdf`, `.docx`, `.txt`, `.xlsx`, `.pptx`, `.csv`, `.rtf` |
| **Imágenes** | `.jpg`, `.png`, `.gif`, `.webp`, `.svg`, `.ico`, `.heic` |
| **Videos** | `.mp4`, `.mkv`, `.mov`, `.avi`, `.webm` |
| **Música** | `.mp3`, `.wav`, `.flac`, `.aac`, `.m4a` |
| **Programación** | `.js`, `.ts`, `.py`, `.html`, `.css`, `.tsx`, `.java`, `.go` |
| **Comprimidos** | `.zip`, `.rar`, `.7z`, `.tar.gz` |
| **Instaladores** | `.exe`, `.msi`, `.dmg`, `.pkg`, `.deb` |
| **Diseño** | `.psd`, `.ai`, `.xd`, `.fig` |
| **Fuentes** | `.ttf`, `.otf`, `.woff2` |
| **Configuración** | `.json`, `.yaml`, `.xml`, `.env`, `.ini` |
| **Bases de Datos**| `.sql`, `.sqlite`, `.db` |
| **Otros** | Cualquier extensión no identificada en las reglas anteriores. |

---

### 🛠 Scripts del Proyecto

| Script | Comando | Descripción |
| :--- | :--- | :--- |
| **dev** | `npm run dev` | Ejecución en desarrollo usando `tsx` con hot-reload. |
| **build** | `npm run build` | Limpieza de `dist/` y compilación mediante `tsc`. |
| **start** | `npm start` | Compila y ejecuta la versión de producción. |

---

### 📝 Licencia

Este proyecto está bajo la Licencia MIT.

**Desarrollado por Nicolás Lizarazo**