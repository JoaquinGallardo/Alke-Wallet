// Función para recuperar el balance de localStorage y mostrarlo
function showBalance() {
    const balance = localStorage.getItem('balance');
    if (balance) {
      balanceDisplay.textContent = `$${balance}`;
    } else {
      // Mostrar un mensaje si no hay un balance almacenado
      balanceDisplay.textContent = 'No hay saldo almacenado.';
    }
  }
  
  // Mostrar el balance al cargar la página
  showBalance();
  