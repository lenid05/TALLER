const prompt = require('prompt-sync')();

let edad = prompt("¿Cuántos años tienes? ");
edad = parseInt(edad);

if (isNaN(edad)) {
  console.log("Por favor, ingresa un número válido.");
} else {
  if (edad >= 0 && edad <= 9) {
    console.log("Es niño.");
  } else if (edad >= 10 && edad <= 17) {
    console.log("Es adolescente.");
  } else if (edad >= 18 && edad <= 40) {
    console.log("Es adulto.");
  } else if (edad >= 41 && edad <= 60) {
    console.log("Es adulto mayor.");
  } else if (edad > 60) {
    console.log("Es abuelo.");
  }
}
