document.addEventListener('DOMContentLoaded', () => {

    // --- BLOQUE 1: CÁLCULO ALEATORIO DEL ESTADO ACTUAL (Criterio 3.8) ---
    // Selecciona de forma fortuita si el contacto está en línea o no al abrir la ventana.
    const contenedorEstado = document.getElementById('contenedorEstado');
    const estadosPosibles = ['Conectado', 'Desconectado'];
    const estadoElegido = estadosPosibles[Math.floor(Math.random() * estadosPosibles.length)];
    
    const badge = document.createElement('span');
    badge.textContent = estadoElegido;
    badge.classList.add('estado-badge');
    
    if (estadoElegido === 'Conectado') {
        badge.classList.add('conectado');
    } else {
        badge.classList.add('desconectado');
    }
    contenedorEstado.appendChild(badge);


    // --- BLOQUE 2: CONTROL DE APERTURA DE VENTANAS MODALES ---
    const btnGuardar = document.getElementById('guardar');
    const btnEliminar = document.getElementById('eliminar');
    
    const modalAdvertencia = document.getElementById('modalAdvertencia');
    const modalConfirmarGuardar = document.getElementById('modalConfirmarGuardar');
    const modalConfirmarEliminar = document.getElementById('modalConfirmarEliminar');

    // Apertura y cancelación del modal para borrar registros
    btnEliminar.addEventListener('click', () => {
        modalConfirmarEliminar.style.display = 'flex';
    });
    document.getElementById('btnCancelarEliminar').addEventListener('click', () => {
        modalConfirmarEliminar.style.display = 'none';
    });

    // Cierre del modal de error simple
    document.getElementById('cerrarModal').addEventListener('click', () => {
        modalAdvertencia.style.display = 'none';
    });

    // Cancelación de actualización de datos
    document.getElementById('btnCancelarGuardar').addEventListener('click', () => {
        modalConfirmarGuardar.style.display = 'none';
    });


    // --- BLOQUE 3: VALIDACIÓN ESTRICTA DE ENTRADA DE DATOS ---
    // Ejecuta las mismas directrices de la página de registro para asegurar consistencia.
    btnGuardar.addEventListener('click', () => {
        const nombre = document.getElementById('nombre').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const correo = document.getElementById('correo').value.trim();
        
        let errores = 0;

        // Limpieza previa de advertencias visuales en el formulario
        document.getElementById('errorNombre').textContent = "";
        document.getElementById('errorTelefono').textContent = "";
        document.getElementById('errorCorreo').textContent = "";

        // Validar que el nombre no se envíe en blanco
        if (nombre === "") {
            document.getElementById('errorNombre').textContent = "El nombre es obligatorio.";
            errores++;
        }

        // Validar regla de teléfono: Numérico estricto y de 8 caracteres de longitud
        const regexTelefono = /^[0-9]{8}$/;
        if (!regexTelefono.test(telefono)) {
            document.getElementById('errorTelefono').textContent = "Debe tener exactamente 8 dígitos numéricos.";
            errores++;
        }

        // Validar formato estándar de correo electrónico
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexCorreo.test(correo)) {
            document.getElementById('errorCorreo').textContent = "El correo electrónico no es válido.";
            errores++;
        }

        // Intercepción del flujo: Si hay fallas, alerta al alumno; si todo está limpio, pide confirmación.
        if (errores > 0) {
            modalAdvertencia.style.display = 'flex';
        } else {
            modalConfirmarGuardar.style.display = 'flex';
        }
    });

    // Envío final del formulario hacia Flask una vez aprobado por el usuario
    document.getElementById('btnAceptarGuardar').addEventListener('click', () => {
        document.getElementById('formEditarContacto').submit();
    });
});