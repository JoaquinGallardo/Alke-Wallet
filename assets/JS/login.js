document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los valores de los campos de entrada
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Aquí puedes agregar tu lógica de autenticación, como enviar los datos a un servidor y recibir una respuesta
    // Por ahora, simularemos una autenticación básica con valores de usuario y contraseña fijos
    if (username === 'usuario' && password === 'contraseña') {
        // Si las credenciales son correctas, redirige al usuario a otra página o muestra un mensaje de éxito
       
        alert("Inicio de sesión exitoso");
        window.location.href="../../cuenta.html"
    } else {
        // Si las credenciales son incorrectas, muestra un mensaje de error
        document.getElementById('message text-bg-danger').textContent = 'Usuario o contraseña incorrectos';
        alert('Usuario o contraseña incorrectos');
    }
});