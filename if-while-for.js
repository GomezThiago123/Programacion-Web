//Thiago Gomez 5ºB

// NIVEL 1: EJERCICIOS BÁSICOS
//IF

//Crear una variable con un número. Usar if para mostrar un mensaje si el número es mayor a 10.
const test = 84;

if (test > 10) {
  console.log("el numero es mayor");
} else {
  console.log("el numero es menor o igual a 10");
}

//Crear dos variables con números. Usar if para mostrar cuál número es mayor.
let primernumero = 6;
let segundonumero = 12;

if (primernumero > segundonumero) {
  console.log("El primer número es mayor");
} else if (segundonumero > primernumero) {
  console.log("El segundo número es mayor");
} else {
  console.log("Los dos números son iguales.");
}

//While

//Usar un while para mostrar en consola los números del 1 al 5.

let number = 5;
let counter = 0;
while (counter <= number) {
  counter++;
  console.log(`el contador ${counter}`);
}

//Usar un while para sumar los números del 1 al 4. Mostrar la suma al final.

let suma = 1;
let counter1 = 0;

while (counter1 <= 4) {
  suma += counter1;
  counter1++;
  console.log("la suma es: ", suma);
}

//FOR

//Usar un for para imprimir en consola los números del 0 al 4.
for (let numero = 0; numero <= 4; numero++) {
  console.log(numero);
}

//Usar un for para sumar los números del 0 al 4. Mostrar el resultado al final.
let suma1 = 0;
for (let numero = 0; numero <= 4; numero++) {
  suma1 += numero;
}
console.log("La suma total del 0 al 4 es:", suma1);

// NIVEL 2: EJERCICIOS DE DIFICULTAD MEDIA
