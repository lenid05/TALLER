const prompt = require('prompt-sync')();
let n = parseInt(prompt('Ingrese el valor de n para la serie Fibonacci: '));
if (isNaN(n) || n <= 0) {
  console.log('Por favor ingrese un número válido mayor que 0.');
} else {
  let a = 0, b = 1;
  console.log(`Serie Fibonacci hasta el ${n}º número:`);
    for (let i = 0; i < n; i++) {
    console.log(a);
    let siguiente = a + b;
    a = b;
    b = siguiente;
  }
}
