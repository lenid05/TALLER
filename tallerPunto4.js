const prompt = require('prompt-sync')();
function calculadora() {
    let opcion;
    do {
        console.log("Seleccione una opción:");
        console.log("1: Sumar");
        console.log("2: Restar");
        console.log("3: Multiplicar");
        console.log("4: Dividir");
        console.log("5: Raíz Cuadrada");
        console.log("6: Salir");
        opcion = parseInt(prompt("Opción: "));

        if (opcion === 1) {
            let num1 = parseFloat(prompt("Ingresa el primer número: "));
            let num2 = parseFloat(prompt("Ingresa el segundo número: "));
            console.log(`El resultado de la suma es: ${num1 + num2}`);
        } else if (opcion === 2) {
            let num1 = parseFloat(prompt("Ingresa el primer número: "));
            let num2 = parseFloat(prompt("Ingresa el segundo número: "));
            console.log(`El resultado de la resta es: ${num1 - num2}`);
        } else if (opcion === 3) {
            let num1 = parseFloat(prompt("Ingresa el primer número: "));
            let num2 = parseFloat(prompt("Ingresa el segundo número: "));
            console.log(`El resultado de la multiplicación es: ${num1 * num2}`);
        } else if (opcion === 4) {
            let num1 = parseFloat(prompt("Ingresa el primer número: "));
            let num2 = parseFloat(prompt("Ingresa el segundo número: "));

            if (num2 === 0) {
                console.log("¡No se puede dividir entre cero!");
            } else {
                console.log(`El resultado de la división es: ${num1 / num2}`);
            }
        } else if (opcion === 5) {
            let num = parseFloat(prompt("Ingresa un número para calcular su raíz cuadrada: "));
        
            if (num < 0) {
                console.log("¡No se puede calcular la raíz cuadrada de un número negativo!");
            } else {
                console.log(`La raíz cuadrada de ${num} es: ${Math.sqrt(num)}`);
            }
        } else if (opcion === 6) {
            console.log("¡Hasta luego!");
        } else {
            console.log("Opción no válida. Por favor, elige una opción del 1 al 6.");
        }

    } while (opcion !== 6);
}

calculadora();
