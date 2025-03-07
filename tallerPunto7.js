const prompt = require('prompt-sync')();
let suma = 0;
let mayor = -Infinity;
let menor = Infinity;
let valores = [];

for (let i = 1; i <= 10; i++) {
  let numero = parseFloat(prompt(`Ingresa el valor #${i}: `));

  if (isNaN(numero)) {
    console.log('Por favor, ingresa un número válido.');
    i--; 
  } else
    valores.push(numero);
    suma += numero;

    if (numero > mayor) mayor = numero;
    if (numero < menor) menor = numero;
  }

let promedio = suma / valores.length;

console.log(`\nResultados:`);
console.log(`Suma total: ${suma}`);
console.log(`Valor mayor: ${mayor}`);
console.log(`Valor menor: ${menor}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);
