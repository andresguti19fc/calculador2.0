// Definimos la variable display
var display = document.getElementById("display");

// Definimos la variable operador
var operador;

// Función para los botones numéricos
function botonNumerico(numero) {
  display.value += numero;
}

// Función para el botón decimal
function botonDecimal() {
  if (display.value.indexOf(".") == -1) {
    display.value += ".";
  }
}

// Función para los botones de operador
function botonOperador(op) {
  operador = op;
  display.value += operador;
}

// Función para el botón de igual
function botonIgual() {
  var resultado = 0;
  var numeros = display.value.split(operador);
  switch (operador) {
    case "+":
      resultado = parseFloat(numeros[0]) + parseFloat(numeros[1]);
      break;
    case "-":
      resultado = parseFloat(numeros[0]) - parseFloat(numeros[1]);
      break;
    case "*":
      resultado = parseFloat(numeros[0]) * parseFloat(numeros[1]);
      break;
    case "/":
      resultado = parseFloat(numeros[0]) / parseFloat(numeros[1]);
      break;
    default:
      return;
  }
  display.value = resultado;
}
