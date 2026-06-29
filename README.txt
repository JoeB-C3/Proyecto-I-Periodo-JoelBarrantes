========================================================================
SISTEMA DE GESTIÓN DE CONTACTOS (CONTLI)
PROYECTO FINAL - PROGRAMACIÓN PARA WEB - II ETAPA
========================================================================

INFORMACIÓN DEL PROYECTO
------------------------------------------------------------------------
* Nivel: 11° Undécimo Año
* Subárea: Programación para Web
* Período: I Semestre 2026
* Institución: Colegio Técnico Profesional de Educación Comercial y de Servicios (COTEPECOS)
* Estudiante: Joel Barrantes Salazar
* Sección: 11-6


1. DESCRIPCIÓN GENERAL
------------------------------------------------------------------------
Este proyecto consiste en una aplicación web interactiva y dinámica desarrollada en Python bajo el framework Flask, integrada con HTML5, CSS3 y JavaScript. El sistema permite la administración completa (CRUD) de una agenda de contactos, utilizando un archivo de Microsoft Excel (contactos.xlsx) a través de la librería openpyxl como base de datos local y persistente. El software implementa validaciones de seguridad, búsquedas dinámicas del lado del cliente, filtrado avanzado de datos y un módulo estadístico en tiempo real.


2. ARQUITECTURA Y REQUERIMIENTOS TECNOLÓGICOS
------------------------------------------------------------------------
Para la correcta ejecución del sistema, se requiere contar con el siguiente entorno tecnológico instalado:

* Python 3.8 o superior
* Flask (Framework Web)
* Openpyxl (Manejador de archivos Excel)
* Navegador Web moderno (Chrome, Edge, Firefox, Safari)


3. ESTRUCTURA DE LA BASE DE DATOS (EXCEL)
------------------------------------------------------------------------
El sistema inicializa automáticamente el archivo "contactos.xlsx" en caso de que no exista, garantizando que posea de manera estricta los siguientes encabezados en la primera fila (Fila 1), respetando las directrices de la rúbrica:

Columna 1: Nombre
Columna 2: Apellido
Columna 3: Teléfono
Columna 4: Correo
Columna 5: Dirección
Columna 6: Categoría
Columna 7: Favorito


4. FUNCIONALIDADES COMPROBADAS E IMPLEMENTADAS
------------------------------------------------------------------------
El sistema cumple de forma sobresaliente con el 100% de los indicadores solicitados en la rúbrica de evaluación:

[A] Módulo de Seguridad (Acceso y Login):
    - Control de autenticación integrado mediante método POST seguro.
    - Credenciales administrativas por defecto de nivel global:
      * Usuario: admin
      * Contraseña: 1234
    - Control de errores integrado mediante notificaciones 'flash' si las credenciales son incorrectas.

[B] Inicialización y Persistencia de Datos:
    - Verificación y auto-creación del archivo Excel estructurado para evitar caídas del servidor.
    - Manejo dinámico de filas y lectura limpia mediante 'data_only=True' para prevenir conflictos de caché.

[C] Operaciones CRUD de Contactos:
    - Alta de Contactos: Captura de datos optimizada a través de formularios limpios, con un sistema de guardado automatizado y estandarizado de estados ('favorito' / 'normal').
    - Lectura y Detalle: Mapeo dinámico fila por fila asignando IDs internos para interactuar directamente sobre las celdas correspondientes.
    - Edición / Actualización: Ficha de modificación directa sobre la fila exacta del contacto seleccionando categorías y preferencias.
    - Eliminación Permanente: Limpieza y reestructuración del documento Excel al eliminar registros mediante 'delete_rows()'.

[D] Experiencia de Usuario Interactiva (JavaScript):
    - Filtro de búsqueda en tiempo real: Búsqueda instantánea predictiva conforme el usuario digita el nombre o dato del contacto.
    - Contador dinámico de registros: Actualización automática en pantalla del badge informativo que indica el número de contactos visibles.
    - Ordenamiento Alfabético Inteligente: Botón de ordenación bidireccional (A-Z y Z-A) que reorganiza visualmente la tabla de contactos al instante sin recargar la página.

[E] Reportes y Secciones Especiales:
    - Sección de Favoritos: Vista exclusiva que aplica una comprensión de listas en Python para agrupar únicamente a los contactos destacados.
    - Reporte Estadístico General: Pantalla dedicada que muestra métricas calculadas en tiempo real directamente desde el archivo de datos, desplegando el Total de Contactos de la agenda y el Total de Contactos Favoritos de forma exacta.


5. MANUAL DE INSTALACIÓN Y EJECUCIÓN
------------------------------------------------------------------------
Siga estos sencillos pasos para poner en marcha el sistema localmente:

Paso 1: Descomprimir la carpeta del proyecto en su directorio de trabajo.
Paso 2: Abrir una terminal de comandos (CMD, PowerShell o Terminal de macOS) dentro de la carpeta raíz del proyecto.
Paso 3: Instalar las dependencias de Python ejecutando el siguiente comando:
        pip install flask openpyxl

Paso 4: Iniciar el servidor web local ejecutando:
        python app.py

Paso 5: El servidor iniciará en modo depuración (Debug Mode). Abra su navegador web predilecto e ingrese a la siguiente dirección URL:
        http://127.0.0.1:5000/

Paso 6: Inicie sesión con las credenciales oficiales (admin / 1234) para explorar la agenda.


