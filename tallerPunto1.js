const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Por favor, ingrese el valor de la factura: ", (facturaInput) => {
    let factura = parseFloat(facturaInput);
    if (factura > 50000) {
        let impuestos = factura * 0.15;
        let total = factura + impuestos;
        console.log("El valor de la factura con impuestos es: $" + total.toFixed(2));
    } else {
        console.log("El valor de la factura es: $" + factura.toFixed(2));
    }
    rl.close();
});

