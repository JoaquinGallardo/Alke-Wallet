document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  /* Evitar que el formulario se envíe automáticamente */

    /* Valores de los campos de entrada */
    let number = document.getElementById('exampleInputContactNumber').value;
    let mail = document.getElementById('exampleInputEmail1').value;

    /* Lógica de autenticación */
    if (mail === 'admin@example.com' && number === '999999999') {
         /* Si las credenciales son correctas, redirige al usuario a otra página y muestra un mensaje de éxito */
       
        alert("Muchas gracias, en breves momentos nos contacataremos contigo");
      
    } else {
        /* Mostrar un mensaje de error */
        document.getElementById('message text-bg-danger').textContent = 'Usuario o contraseña incorrectos';
        alert('Dirección de correo y/o Número de contacto no válidos');
    }
});