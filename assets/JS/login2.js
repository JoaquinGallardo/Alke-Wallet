$('#loginForm').submit(function(event) {
    event.preventDefault();
  
    // Obtener los valores de los campos
    let username = $('#username').val();
    let password = $('#password').val();
  
    // Lógica de autenticación
    if (username === 'usuario' && password === 'contraseña') {
      // Redirigir al usuario a otra página
      window.location.href = "cuenta.html";
    } 
    else {
      // Mostrar mensaje de error
      $('#message-error').text('Usuario o contraseña incorrectos');
    }
  });