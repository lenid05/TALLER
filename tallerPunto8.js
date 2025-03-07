const prompt = require('prompt-sync')();

class Persona {
  constructor(nombres, apellidos, genero, fechaNacimiento, salario) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.genero = genero;
    this.fechaNacimiento = new Date(fechaNacimiento);
    this.salario = parseFloat(salario);
    this.edad = this.calcularEdad();
  }

  calcularEdad() {
    const hoy = new Date();
    let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
    const mes = hoy.getMonth();
    if (mes < this.fechaNacimiento.getMonth() || (mes === this.fechaNacimiento.getMonth() && hoy.getDate() < this.fechaNacimiento.getDate())) {
      edad--;
    }
    return edad;
  }
  aumentarSalario(monto) {
    this.salario += monto;
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }
  consultarPersona() {
    console.log(`
      Nombres: ${this.nombres}
      Apellidos: ${this.apellidos}
      Género: ${this.genero}
      Fecha de nacimiento: ${this.fechaNacimiento.toLocaleDateString()}
      Edad: ${this.edad}
      Salario: ${this.salario.toFixed(2)}
    `);
  }

  modificarPersona(nombres, apellidos, genero, fechaNacimiento) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.genero = genero;
    this.fechaNacimiento = new Date(fechaNacimiento);
    this.edad = this.calcularEdad();
  }
}

function mostrarMenu() {
  console.log(`
  --- Menú de Opciones ---
  a. Consultar persona
  b. Modificar persona
  c. Aumentar salario
  d. Verificar mayoría de edad
  e. Salir
  `);
}

function pedirDatos() {
  let nombres = prompt('Ingrese los nombres: ');
  let apellidos = prompt('Ingrese los apellidos: ');
  let genero = prompt('Ingrese el género (Masculino/Femenino): ');
  let fechaNacimiento = prompt('Ingrese la fecha de nacimiento (YYYY-MM-DD): ');
  let salario = prompt('Ingrese el salario: ');

  return new Persona(nombres, apellidos, genero, fechaNacimiento, salario);
}
function main() {
  let persona = null;

  persona = pedirDatos();

  while (true) {
    mostrarMenu();
    let opcion = prompt('Seleccione una opción: ').toLowerCase();

    switch (opcion) {
      case 'a':
        persona.consultarPersona();
        break;

      case 'b':
        console.log('--- Modificar persona ---');
        let nuevosNombres = prompt('Ingrese los nuevos nombres: ');
        let nuevosApellidos = prompt('Ingrese los nuevos apellidos: ');
        let nuevoGenero = prompt('Ingrese el nuevo género (Masculino/Femenino): ');
        let nuevaFechaNacimiento = prompt('Ingrese la nueva fecha de nacimiento (YYYY-MM-DD): ');
        persona.modificarPersona(nuevosNombres, nuevosApellidos, nuevoGenero, nuevaFechaNacimiento);
        break;

      case 'c':
        let monto = parseFloat(prompt('Ingrese el monto a aumentar al salario: '));
        persona.aumentarSalario(monto);
        console.log(`El salario ha sido aumentado a: ${persona.salario.toFixed(2)}`);
        break;

      case 'd':
        if (persona.esMayorDeEdad()) {
          console.log('La persona es mayor de edad.');
        } else {
          console.log('La persona NO es mayor de edad.');
        }
        break;

      case 'e':
        console.log('¡Hasta luego!');
        return;

      default:
        console.log('Opción no válida. Por favor, elige una opción correcta.');
        break;
    }
  }
}

main();
