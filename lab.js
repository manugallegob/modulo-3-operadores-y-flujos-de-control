console.log("");
console.log("*********** EJERCICIO 1 ************");
console.log("");

const product = { count: 4, price: 12.55, type: "alimentacion" };

// CALCULAR EL TOTAL SIN IVA

if (product.count <= 0) {
  precioSinIva = 0;
  console.log(
    "Productos en inventario: " +
      product.count +
      " / Total a pagar: " +
      precioSinIva +
      "€"
  );
  console.log("No disponemos de inventario para realizar su compra");
} else {
  precioSinIva = product.count * product.price;
  console.log("Total a pagar sin IVA: " + precioSinIva + "€");

  // CALCULAR EL IVA

  switch (product.type) {
    case "alimentacion":
      iva = 0.1;
      break;
    case "libro":
      iva = 0.04;
      break;
    default:
      iva = 0.21;
      break;
  }

  precioTotal = precioSinIva * iva + precioSinIva;

  console.log("Typo de producto: " + product.type);
  console.log("IVA: " + iva * 100 + "%");
  console.log("Total a pagar con IVA: " + precioTotal);
}

console.log("");
console.log("*********** EJERCICIO 2 ************");
console.log("");

const empleado = {
  bruto: 11500,
  hijos: 2,
  pagas: 14,
};

let retencion = 0;

switch (true) {
  case empleado.bruto < 12000:
    retencion = 0;
    break;
  case empleado.bruto < 24000:
    retencion = 0.08;
    break;
  case empleado.bruto < 34000:
    retencion = 0.16;
    break;
  case empleado.bruto >= 34000:
    retencion = 0.3;
    break;
}

if (empleado.hijos > 0) {
  retencion = retencion - 0.02;
  console.log(
    "Usted tiene hijos. Le corresponden un descuento en retención de 2%"
  );
}

if (retencion < 0) {
  retencion = 0;
}

totalRetenido = empleado.bruto * retencion;
sueldoNeto = empleado.bruto - totalRetenido;

console.log("Tasa de retención total: " + retencion);
console.log("Cantidad retención: " + totalRetenido);
console.log("Su sueldo neto es de: " + sueldoNeto);

console.log("");
console.log("*********** EJERCICIOS EXTRAS ************");
console.log("");

console.log("*********** Extra 2 ************");

let hora = 1;

switch (true) {
  case hora >= 6 && hora <= 12:
    console.log("Buenos días");
    break;
  case hora >= 13 && hora <= 20:
    console.log("Buenas tardes");
    break;
  case hora > 20 || hora <= 5:
    console.log("Buenas noches");
    break;
}

console.log("");
console.log("*********** Extra 3 ************");

let diaSemana = 10;

switch (diaSemana) {
  case 1:
    console.log("Hoy es Lunes");
    break;
  case 2:
    console.log("Hoy es Martes");
    break;
  case 3:
    console.log("Hoy es Miercoles");
    break;
  case 4:
    console.log("Hoy es Jueves");
    break;
  case 5:
    console.log("Hoy es Viernes");
    break;
  case 6:
    console.log("Hoy es Sábado");
    break;
  case 7:
    console.log("Hoy es Domingo");
    break;
  default:
    console.log("No es un día válido");
    break;
}

console.log("");
console.log("*********** Extra 4 ************");

let nota1 = 10;
let nota2 = 5;
let nota3 = 17;

if (nota1 < 0 || nota1 > 10) {
  console.log("Introduzca un valor correcto para nota1");
} else if (nota2 < 0 || nota2 > 10) {
  console.log("Introduzca un valor correcto para nota2");
} else if (nota3 < 0 || nota3 > 10) {
  console.log("Introduzca un valor correcto para nota3");
} else {
  let mediaNota = (nota1 + nota2 + nota3) / 3;
  console.log("Su nota media es de: " + mediaNota);

  switch (true) {
    case mediaNota >= 0 && mediaNota <= 6:
      console.log("Usted no está apto");
      break;
    case mediaNota >= 6 && mediaNota <= 7:
      console.log("Notable");
      break;
    case mediaNota > 7 && mediaNota <= 10:
      console.log("Sobresaliente");
      break;
    default:
      console.log("Una de sus notas no tiene un valor correcto");
      break;
  }
}

console.log("");
console.log("*********** Extra 5 ************");

let diaNacimiento = 6;
let mesNacimiento = 3;

console.log("Día de nacimiento: " + diaNacimiento);
console.log("Mes de nacimiento: " + mesNacimiento);

switch (true) {
  case (diaNacimiento >= 21 && mesNacimiento == 3) ||
    (diaNacimiento <= 20 && mesNacimiento == 4):
    console.log("Usted es Aries");
    break;
  case (diaNacimiento >= 21 && mesNacimiento == 4) ||
    (diaNacimiento <= 21 && mesNacimiento == 5):
    console.log("Usted es Tauro");
    break;
  case (diaNacimiento >= 22 && mesNacimiento == 5) ||
    (diaNacimiento <= 21 && mesNacimiento == 6):
    console.log("Usted es Géminis");
    break;
  case (diaNacimiento >= 23 && mesNacimiento == 7) ||
    (diaNacimiento <= 22 && mesNacimiento == 8):
    console.log("Usted es Leo");
    break;
  case (diaNacimiento >= 23 && mesNacimiento == 8) ||
    (diaNacimiento <= 22 && mesNacimiento == 9):
    console.log("Usted es Virgo");
    break;
  case (diaNacimiento >= 23 && mesNacimiento == 9) ||
    (diaNacimiento <= 22 && mesNacimiento == 10):
    console.log("Usted es Libra");
    break;
  case (diaNacimiento >= 23 && mesNacimiento == 10) ||
    (diaNacimiento <= 22 && mesNacimiento == 11):
    console.log("Usted es Escorpio");
    break;
  case (diaNacimiento >= 23 && mesNacimiento == 11) ||
    (diaNacimiento <= 21 && mesNacimiento == 12):
    console.log("Usted es Sagitario");
    break;
  case (diaNacimiento >= 22 && mesNacimiento == 12) ||
    (diaNacimiento <= 20 && mesNacimiento == 1):
    console.log("Usted es Capricornio");
    break;
  case (diaNacimiento >= 21 && mesNacimiento == 01) ||
    (diaNacimiento <= 19 && mesNacimiento == 02):
    console.log("Usted es Acuario");
    break;
  case (diaNacimiento >= 20 && mesNacimiento == 2) ||
    (diaNacimiento <= 20 && mesNacimiento == 3):
    console.log("Usted es Piscis");
    break;
}

console.log("");
console.log("*********** Extra 6 ************");

let num = 14;
if (num % 2 == 0) {
  console.log("El número " + num + " es par");
} else {
  console.log("El número " + num + " es impar");
}

console.log("");
console.log("*********** Extra 7 ************");

let numPosNeg = -14;

if (numPosNeg > 0) {
  console.log("El número " + numPosNeg + " es positivo");
} else {
  console.log("El número " + numPosNeg + " es negativo");
}

console.log("");
console.log("*********** Extra 8 ************");

let num100 = 140;

if (num100 > 100) {
  console.log("El número " + num100 + " es mayor a 100");
} else if (num100 == 100) {
  console.log("El número " + num100 + " es igual a 100");
} else {
  console.log("El número " + num100 + " es menor a 100");
}

console.log("");
console.log("*********** Extra 9 ************");

let numero1 = 5;
let numero2 = 5;
let numero3 = 10;

if (numero1 + numero2 == numero3) {
  console.log("La suma del primero y del segundo es igual al tercero");
} else {
  console.log("La suma del primero y del segundo NO es igual al tercero");
}

console.log("");
console.log("*********** Extra 10 ************");

var square = {
  sideOne: 1,
  sideTwo: 3,
  typeOfGemotricFigure: "Cuadrado",
};
var circle = {
  radius: 5,
  typeOfGemotricFigure: "Círculo",
};

let areaCuadrado = square.sideOne * square.sideTwo;
console.log(
  "El área del " + square.typeOfGemotricFigure + " es igual a " + areaCuadrado
);

let areaCirculo = 3.14 * Math.pow(circle.radius, 2);
console.log(
  "El área del " + circle.typeOfGemotricFigure + " es igual a " + areaCirculo
);
