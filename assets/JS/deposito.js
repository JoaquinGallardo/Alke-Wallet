// Activar el modo de depuración
const debugMode = true;

// Función para registrar mensajes en la consola
function log(...messages) {
  if (debugMode) {
    console.log(...messages);
  }
}

// Obtener referencias a los botones de depósito y retiro
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');

// Obtener referencia al campo de entrada de monto
const amountInput = document.getElementById('amount');

// Obtener referencia al elemento de visualización del saldo
const balanceDisplay = document.getElementById('idSaldo');

// Función para actualizar la visualización del saldo
function updateHistoryBalance() {


}
function updateBalance(change) {
  const currentBalance = parseFloat(balanceDisplay.textContent.slice(1));
  const newBalance = currentBalance + change;
  balanceDisplay.textContent = `$${newBalance.toFixed(2)}`;
  localStorage.setItem('balance', newBalance); // Guardar el nuevo balance en localStorage
}

// Evento al hacer clic en el botón de depósito
depositBtn.addEventListener('click', () => {
  const depositAmount = parseFloat(amountInput.value);
  log('Monto de depósito ingresado:', depositAmount);

  if (!isNaN(depositAmount) && depositAmount > 0) {
    updateBalance(depositAmount);
    amountInput.value = '';
    alert('Depósito realizado con éxito');
  } else {
    alert('Por favor ingrese un monto válido.');
  }
});

// Evento al hacer clic en el botón de retiro
withdrawBtn.addEventListener('click', () => {
  const withdrawAmount = parseFloat(amountInput.value);
  log('Monto de retiro ingresado:', withdrawAmount);

  if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
    const currentBalance = parseFloat(balanceDisplay.textContent.slice(1));

    if (withdrawAmount <= currentBalance) {
      updateBalance(-withdrawAmount);
      amountInput.value = '';
      alert('Retiro realizado con éxito');
      log('Estado del saldo:', balanceDisplay.textContent);
    } else {
      alert('Saldo insuficiente para relizar retiro');
    }
  } else {
    alert('Por favor ingrese un monto válido.');
  }
});
