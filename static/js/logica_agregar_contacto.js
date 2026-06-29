document.addEventListener('DOMContentLoaded', () => {
    // 1. OBTENER LOS ELEMENTOS DEL DOM
    const form = document.getElementById('formNuevoContacto');
    const inputNombre = document.getElementById('nombre');
    const inputTelefono = document.getElementById('telefono');
    const inputCorreo = document.getElementById('correo');
    
    // Elementos del Modal
    const modal = document.getElementById('modalAdvertencia');
    const mensajeModal = document.getElementById('mensajeModal');
    const btnCerrarModal = document.getElementById('cerrarModal');
    
    // Elementos del Avatar
    const avatarInitials = document.getElementById('avatarInitials');
    const avatarPreview = document.getElementById('avatarPreview');

    // 2. LÓGICA DEL AVATAR (Se actualiza al escribir)
    inputNombre.addEventListener('input', () => {
        const nombreVal = inputNombre.value.trim();
        if (nombreVal.length > 0) {
            // Toma la primera letra y la pone en mayúscula
            avatarInitials.textContent = nombreVal.charAt(0).toUpperCase();
            avatarPreview.classList.add('has-initials');
        } else {
            avatarInitials.textContent = '?';
            avatarPreview.classList.remove('has-initials');
        }
    });

    // 3. CERRAR EL MODAL
    btnCerrarModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 4. VALIDACIÓN AL ENVIAR (Botón Guardar)
    form.addEventListener('submit', (evento) => {
        // Prevenimos que la página se recargue inmediatamente
        evento.preventDefault(); 
        
        let errores = [];

        // Validación de campos vacíos
        if (!inputNombre.value.trim() || !inputTelefono.value.trim() || !inputCorreo.value.trim()) {
            errores.push("Los campos Nombre, Teléfono y Correo son obligatorios.");
        }

        // Validación de 8 dígitos para el teléfono usando Expresiones Regulares
        const telefonoRegex = /^[0-9]{8}$/;
        if (inputTelefono.value.trim() && !telefonoRegex.test(inputTelefono.value.trim())) {
            errores.push("El número de teléfono debe tener exactamente 8 dígitos.");
        }

        // Validación básica de correo electrónico
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (inputCorreo.value.trim() && !correoRegex.test(inputCorreo.value.trim())) {
            errores.push("El correo electrónico debe tener un formato válido (ej: usuario@dominio.com).");
        }

        // 5. MOSTRAR MODAL O ENVIAR FORMULARIO
        if (errores.length > 0) {
            // Si hay errores, unimos los mensajes y mostramos el modal
            mensajeModal.innerHTML = errores.join("<br><br>");
            modal.style.display = 'flex'; // Mostramos el modal
        } else {
            // Si no hay errores, ¡todo está perfecto!
            // Aquí enviamos el formulario de verdad hacia Flask
            form.submit(); 
        }
    });
});