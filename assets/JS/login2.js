$(document).ready(function(){


$('#loginForm').submit(function(event) {
    event.preventDefault();
  
    // Obtener los valores de los campos que requiere el formulario
    let username = $('#username').val();
    let password = $('#password').val();

    let h2Text = $('#alertBoot').text(); 

    
  
    // Lógica de autenticación
    if (username === 'usuario' && password === 'contraseña') {
      alert('Login exitoso');
      // Ingresar al usuario a la página principal
      window.location.href = "cuenta.html"; 
    } 
    else {
      // Mostrar mensaje de error
      $('#alertBoot').removeClass('d-none');
      $('#alertBoot').addClass('text-danger');
      alert('Usuario o contraseña incorrectos');
      console.log(h2Text);
    }
  });

});