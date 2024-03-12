document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  /* Evitar que el formulario se envíe automáticamente */

    /* Valores de los campos de entrada */
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    /* Lógica de autenticación */
    if (username === 'usuario' && password === 'contraseña') {
         /* Si las credenciales son correctas, redirige al usuario a otra página y muestra un mensaje de éxito */
       
        alert("Inicio de sesión exitoso");
        window.location.href="cuenta.html"
    } else {
        /* Mostrar un mensaje de error */
        document.getElementById('message text-bg-danger').textContent = 'Usuario o contraseña incorrectos';
        alert('Usuario o contraseña incorrectos');
    }
});