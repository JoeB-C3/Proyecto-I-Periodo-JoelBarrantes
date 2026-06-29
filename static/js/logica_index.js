document.getElementById('formLogin').addEventListener('submit', function(evento) {
            const usuario = document.getElementById('usuario').value.trim();
            const contrasena = document.getElementById('contrasena').value.trim();

            // Validación básica en JS antes de enviar al servidor para asegurar que no vayan vacíos
            if (usuario === "" || contrasena === "") {
                evento.preventDefault(); // Detiene el envío
                alert("Por favor, rellene todos los campos obligatorios."); [cite, 190]
            }
        }
    );