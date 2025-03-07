const prompt = require('prompt-sync')();
class Vehiculo {
  constructor(placa, color, marca, modelo) {
    this.placa = placa;
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.kilometraje = 0;
    this.velocidad = 0;
    this.prendido = false;
  }

  prender() {
    if (this.prendido) {
      console.log('El vehículo ya está encendido.');
      return;
    }
    console.log(`Información del vehículo:
      Placa: ${this.placa}
      Color: ${this.color}
      Marca: ${this.marca}
      Modelo: ${this.modelo}
      Kilometraje: ${this.kilometraje} km
      Velocidad: ${this.velocidad} km/h
    `);
    console.log('... ha sido prendido');
    this.prendido = true;
  }


  apagar() {
    if (!this.prendido) {
      console.log('El vehículo no está encendido, no se puede apagar.');
      return;
    }
    console.log(`Condiciones finales del vehículo:
      Placa: ${this.placa}
      Color: ${this.color}
      Marca: ${this.marca}
      Modelo: ${this.modelo}
      Kilometraje: ${this.kilometraje} km
      Velocidad: ${this.velocidad} km/h
    `);
    console.log('... ha sido apagado');
    this.prendido = false;
  }

  acelerar() {
    if (!this.prendido) {
      console.log('El vehículo debe estar encendido para acelerar.');
      return;
    }

    if (this.velocidad >= 100) {
      console.log('El vehículo ya ha alcanzado la velocidad máxima de 100 km/h.');
      return;
    }

    this.velocidad += 10;
    this.kilometraje += 10;

    console.log(`El vehículo ha acelerado. Nueva velocidad: ${this.velocidad} km/h`);
    console.log(`Kilometraje actual: ${this.kilometraje} km`);
  }
}

function mostrarMenu() {
  console.log(`
  --- Menú de Opciones ---
  a. Prender vehículo
  b. Apagar vehículo
  c. Acelerar vehículo
  d. Salir
  `);
}

function main() {
  let placa = prompt('Ingrese la placa del vehículo: ');
  let color = prompt('Ingrese el color del vehículo: ');
  let marca = prompt('Ingrese la marca del vehículo: ');
  let modelo = prompt('Ingrese el modelo del vehículo: ');

  let vehiculo = new Vehiculo(placa, color, marca, modelo);

  while (true) {
    mostrarMenu();
    let opcion = prompt('Seleccione una opción: ').toLowerCase();

    switch (opcion) {
      case 'a':
        vehiculo.prender();
        break;

      case 'b':

        vehiculo.apagar();
        break;

      case 'c':
        vehiculo.acelerar();
        break;

      case 'd':
    
        console.log('¡Hasta luego!');
        return;

      default:
        console.log('Opción no válida. Por favor, elige una opción correcta.');
        break;
    }
  }
}

main();
