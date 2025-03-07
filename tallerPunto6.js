const prompt = require('prompt-sync')();
let suma = 0;
console.log('Vamos a pedirte números hasta que la suma sea mayor o igual a 50.');
while (suma < 50) {
   let numero = parseFloat(prompt('Ingresa un número: '));
  if (isNaN(numero)) {
    console.log('Por favor, ingresa un número válido.');
  } else {
    suma += numero;
  }
  console.log(`La suma actual es: ${suma}`);
}
console.log(`¡La suma ha alcanzado ${suma}! El programa ha terminado.`);
