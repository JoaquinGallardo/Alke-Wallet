$(document).ready(function() {
    var balanceLS = localStorage.getItem("#balance") || 0;
  
    function updateBalance() {
      $('#balance').text(balanceLS.toFixed(2));
    }
  
    $('#depositBtn').click(function() {
      var amount = parseFloat($('#amount').val());
      if (!isNaN(amount) && amount > 0) {
        balanceLS += amount;
        localStorage.setItem("#balance", balanceLS);
        updateBalance();
        $('#amount').val('');
        alert('Deposito realizado!');
      } else {
        alert('Monto invalido. Por favor ingrese un número positivo.');
      }
    });
  
    $('#withdrawBtn').click(function() {
      var amount = parseFloat($('#amount').val());
      if (!isNaN(amount) && amount > 0 && amount <= balanceLS) {
        balanceLS -= amount;
        localStorage.setItem("#balance", balanceLS);
        updateBalance();
        $('#amount').val('');
        alert('Retiro exitoso!');
      } else {
        alert('Cantidad no válida. Ingrese un número válido dentro de su saldo.');
      }
    });
  
    updateBalance();
  });
  