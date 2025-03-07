const prompt = require('prompt-sync')();
let edad = prompt("¿Cuántos años tienes? ");
edad = parseInt(edad);
if (isNaN(edad)) {
  console.log("Por favor, ingresa un número válido.");
} else {
  if (edad >= 18) {
    console.log("Eres mayor de edad.");
  } else {
    console.log("Eres menor de edad.");
  }
}


