

//Clase Empleado:

class Empleado {
    constructor(nombre, apellido, dni, domicilio) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.domicilio = domicilio;
    }
}

const empleado1 = new Empleado("Gabriel", "Fernandez", 22158457, "San juan 2355");
const empleado2 = new Empleado("Enrique", "Kleisinger", 20147564, "Alsina 1255");
const empleado3 = new Empleado("Mariano", "Sanchez", 26854789, "Pje 10 de Diciembre 975");
const empleado4 = new Empleado("Ismael", "Morilla", 21658974, "Avellaneda 3455");

const arrayEmpleados = [];

arrayEmpleados.push(empleado1);
arrayEmpleados.push(empleado2);
arrayEmpleados.push(empleado3);
arrayEmpleados.push(empleado4);


console.log(arrayEmpleados);

//Función Menu inicial:

function menu() {
    alert("Bienvenido al Sistema de ABM Empleados");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Alta Empleado \n 2) Baja Empleado \n 3) Modificación Empleado \n 4) Consulta Empleado \n 5) Salir"));
    return opcion;
}

//Función alta Empleado:

function altaEmpleado() {
    let nombre = prompt("Ingrese el nombre del Empleado: ");
    let apellido = prompt("Ingrese el apellido del Empleado: ");
    let dni = parseInt(prompt("Ingrese el DNI del Empleado: "));
    let domicilio = prompt("Ingrese Domicilio del Empleado: ");
    let empleado = new Empleado(nombre, apellido, dni, domicilio);
    arrayEmpleados.push(empleado);
    console.log(arrayEmpleados);
}

//Función baja Empleado:

function bajaEmpleado() {
    let dni = parseInt(prompt("Ingrese el DNI del Empleado: "));
    let empleado = arrayEmpleados.find(Empleado => Empleado.dni === dni);
    let indice = arrayEmpleados.indexOf(empleado);
    arrayEmpleados.splice(indice, 1);
    console.log(arrayEmpleados);
}

//Función modificar Empleado:

function modificacionEmpleado() {
    let dni = parseInt(prompt("Ingrese el DNI del Empleado: "));
    let empleado = arrayEmpleados.find(Empleado => Empleado.dni === dni);
    let indice = arrayEmpleados.indexOf(empleado);
    let nombre = prompt("Ingrese el nombre del Empleado: ");
    let apellido = prompt("Ingrese el apellido del Empleado: ");
    let domicilio = prompt("Ingrese el Domicilio del Empleado: ");
    let empleadoModificado = new Empleado(nombre, apellido, dni, domicilio);
    arrayEmpleados.splice(indice, 1, empleadoModificado);
    console.log(arrayEmpleados);
}

//Función consultar Empleado:

function consultaEmpleado() {
    let dni = parseInt(prompt("Ingrese el DNI del Empleado: "));
    let empleado = arrayEmpleados.find(empleado => empleado.dni === dni);
    console.log(empleado);
}


//Función salir del programa:

function salir() {
    alert("Gracias por utilizar la aplicacion ABM Empleados");
}

//Ejecuta segun opcion:

let opcion = menu();
switch (opcion) {
    case 1:
        altaEmpleado();
        break;
    case 2:
        bajaEmpleado();
        break;
    case 3:
        modificacionEmpleado();
        break;
    case 4:
        consultaEmpleado();
        break;
    case 5:
        salir();
        break;
    default:
        alert("Opción incorrecta");
        break;
}





