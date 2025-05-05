//lenguaje de programacion client-side
//actualmente orientado a funciones

//variables
var miVariable = "hola soy una variable con var"; //no se usa
let miVariable2 = "variable con let"; //solo vive en el scope declarado
const miVariable3 = "constante no cambian los valores";

const hola = "hola fede";
console.log(hola); //es el equivalente a print

//funciones
function myFunction(variable) {
  //la funcion tiene una declaracion,
  //en los parentesis van los parametros
  console.log(variable);
  return variable; //en general las funciones van a retornar algo
}

//funcion flecha
const myArrowFunction = (variable) => variable;

//ejecucion de una funcion
myFunction(8);

const variable = true;
//condicional con if
if (variable) {
  console.log(true);
} else {
  console.log(false);
}

//condicional ternario sirve solo para dos clausulas
variable ? console.log(true) : console.log(false);

//Arreglos o arrays
//los arreglos son las listas de python
const arr = [1, true, "hola como va", 0, 1, 2];
console.log(`la posicion 1 del arreglo es, ${arr[1]}`);

//Objetos
//los objetos son como los diccionarios en python
const objeto = {
  clave: "valor",
};
//los objetos estan compuestos por clave valor
//accedemos al valor de la clave por medio del punto
console.log(objeto.clave);

//bucle for
const arrayNumero = [1, 2, 3, "saludos"];

for (let i = 0; i < arrayNumero.length; i++) {
  console.log(arrayNumero[i]);
}

//metodos
const arrayNumeros = [1, 2, 3, 4, 5, 6];

//push(valor) -> Agrega un elemento al final del arreglo (append de)
arrayNumeros.push(10);
console.log(arrayNumeros[6]);

//pop() Elimina el ultimo elemento de un arreglo y lo guarda
//en una variable
const ultimo = arrayNumeros.pop();
console.log("ultimo", ultimo);

console.log(arrayNumeros);

//shift() elimina el primer valor de un arreglo, tambien lo gurda
const primero = arrayNumeros.shift();
console.log(primero);

// unshitf(valor) Agrega un elemento al principio del arreglo
arrayNumeros.unshift("Thiago");

//map(funcion) Crea un nuevo arreglo aplicando una nueva funcion
//a cada elemento
const nuevoArreglo = arrayNumeros.map((item, index) => {
  return (item += 1);
});
console.log(nuevoArreglo);

//filter Crea un nuevo array con los elementos que cumplen la
//condicion

const pares = arrayNumeros.filter((n) => n % 2 === 0);
console.log(pares);

//forEach solamente recorre un arreglo
//podemos ver items, index y array completo

arrayNumeros.forEach((item, idex, array) => console.log(item, idex, array));
