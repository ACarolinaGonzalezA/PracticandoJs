const prompt = require("prompt-sync")({ sigint: true });

//PRÁCTICA DE LOGICA DE PROGRAMACIÓN DEL 16 DE AGOSTO DEL 2023
//Ejercicio 1: Suma de Números Pares: Escribe una función que tome un número positivo como parámetro y devuelva la suma de todos los números pares desde 1 hasta ese número.
/*let numeroMax = parseInt(prompt("Ingrese un numero para mostrar la suma de los numemros pares que contiene: "));
function sumaDePares (numeroMax){
    let suma = 0;  // Inicializamos la suma en 0
    for (let i=0; i<=numeroMax; i++){
        if(i%2===0){
            suma += i; // Sumamos solo los números pares
        }
    }
    return suma;
}
const resultado = sumaDePares(numeroMax);
console.log(`La suma de los números pares hasta ${numeroMax} es: ${resultado}`);

//Ejercicio 2: Números Primos. Escribe una función que determine si un número dado es primo o no. Un número primo es aquel que solo es divisible por 1 y por sí mismo.
function esPrimo (numero){
    if(numero <=1) return false;
    for (let i=2; i<=Math.sqrt(numero); i++){
        if (numero % i === 0) return false;
    }
    return true
}
let numeroPrimo = parseInt(prompt("Ingrese un número para determinar si es primo: "));

console.log(esPrimo(numeroPrimo) ? `${numeroPrimo} es un número primo.` : `${numeroPrimo} no es un número primo.`);

let numeroPri = parseInt(prompt("Ingrese un número para determinar si es primo: "));

//--------------------------------------------------------------------------------------------------------------------------------
function esPrimo(numero) {
  if (numero <= 1) {
    return false; // Los números menores o iguales a 1 no son primos
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false; // Si es divisible por algún número, no es primo
    }
  }

  return true; // Si no se encontraron divisores, es primo
}

if (esPrimo(numeroPri)) {
  console.log(`${numeroPri} es un número primo.`);
} else {
  console.log(`${numeroPri} no es un número primo.`);
}

//Ejercicio 3: Suma de Números Impares. Escribe una función que tome un número positivo como parámetro y devuelva la suma de todos los números impares desde 1 hasta ese número.

let numero1 = parseInt(prompt("Ingrese un numero para mostrar la suma de los numemros impares que contiene: "));
function sumaDeImpares (numero1){
    let suma = 0;  // Inicializamos la suma en 0
    for (let i=0; i<=numero1; i++){
        if(i%2===1){
            suma += i; // Sumamos solo los números pares
        }
    }
    return suma;
}
const resultadoImpar = sumaDeImpares(numero1);
console.log(`La suma de los números impares hasta ${numero1} es: ${resultadoImpar}`);*/

// Practica 17 de agosto del 2023
//Ejercicio 1 Contador de Números Pares e Impares
/*
let numero = parseInt(prompt("Ingrese un número entero positivo: "));
let pares = 0;
let impares = 0;

for (let i=1; i <= numero; i++){
  if (i%2===0){
    pares++;
  } else{
    impares++;
  }
}
console.log(`Cantidad de numeros pares: ${pares}`);
console.log(`Cantidad de numeros impares: ${impares}`);

//Ejercicio: Suma de los Primeros N Números Pares
// Definimos una función llamada sumaPrimerosNumerosPares que toma un parámetro n.
function sumaPrimerosNumerosPares(n){
  let suma= 0; // Inicializamos una variable suma en 0.
  let numero =2; // Empezamos desde el primer número par.

  // Iniciamos un bucle for que se ejecutará n veces, que están definidas en el parametro de la funcion.
  for (i=1; i<=n; i++){ // Iniciamos un bucle for que se ejecutará n veces. La variable de control i se inicializa en 1 y se incrementa en 1 en cada iteración.
    suma += numero; // Sumamos el valor actual de numero a la suma. En cada iteración, sumamos el valor actual de numero a la variable suma. Esto acumula la suma de los números pares hasta el momento.
    numero += 2; // Avanzamos al siguiente número par. Después de sumar el valor actual de numero, avanzamos al siguiente número par. Sumamos 2 a numero, lo que efectivamente nos mueve al siguiente número par.
  }
  return suma; // Devolvemos el valor de la suma.
}

const cantidadNumeros =5; // Definimos la cantidad de números a sumar.
const resultado = sumaPrimerosNumerosPares(cantidadNumeros); // Llamamos a la función y almacenamos el resultado.
// Mostramos en la consola un mensaje que incluye la cantidad de números y el resultado de la suma.
console.log(`la suma de los primeros ${cantidadNumeros} numeros pares es: ${resultado}`);

//Ejercicio: Producto de los Primeros N Números Impares
function productoPrimerosNumerosImpares(x){
  let producto= 1; // Inicializamos una variable suma en 0.
  let num =1; // Empezamos desde el primer número par.

  // Iniciamos un bucle for que se ejecutará n veces, que están definidas en el parametro de la funcion.
  for (i=1; i<=x; i++){ // Iniciamos un bucle for que se ejecutará n veces. La variable de control i se inicializa en 1 y se incrementa en 1 en cada iteración.
    producto *= numero; // multiplicaomos el valor actual de numero al producto. 
    numero += 2; // Avanzamos al siguiente número impar.
  }
  return producto; // Devolvemos el valor de la suma.
}

const cantidadNum =3; // Definimos la cantidad de números a multiplicar.
const result = productoPrimerosNumerosImpares(cantidadNum); // Llamamos a la función y almacenamos el resultado.
// Mostramos en la consola un mensaje que incluye la cantidad de números y el resultado de la suma.
console.log(`la suma de los primeros ${cantidadNum} numeros impares es: ${result}`);


//Ejercicio: Números Pares Hasta N

let n = parseInt(prompt("Ingrese un número entero positivo: "));
for (i=2; i<=n; i +=2){  //utilizamos un bucle for para iterar desde 2 hasta n, incrementando en 2 en cada iteración. De esta manera, solo imprimimos los números pares en la consola.
  console.log(i);
}

//Ejercicio: Números Impares Hasta N

let x = parseInt(prompt("Ingrese un número entero positivo: "));
for (i=1; i<=x; i +=2){ 
  console.log(i);
}
*/
// 18 DE AGOSTO//
//Ejercicio: Contador de Números Positivos, Negativos y Ceros//
/*let numerosPositivos = 0;
let numeroNegativos = 0;
let ceros=0;

while (true){
  let numero = parseInt(prompt("Ingrese un número entero (0 para terminar): "));

  if (numero ===0){
    break; // termina bucle sin ingresa cero
  } else if(numero>0){
    numerosPositivos++;
  } else if(numero<0){
    numeroNegativos++;
  }else{
    ceros++;
  }
}

console.log(`La cantidad de numeros positivos ingresados es de: ${numerosPositivos}`);
console.log(`La cantidad de numeros negativos ingresados es de : ${numeroNegativos}`);
console.log(`La cantidad de otros caracteres ingresados es de: ${ceros}`);

//Ejercicio: Cálculo de Factorial Escribe un programa que solicite al usuario ingresar un número entero positivo n y calcule el factorial de ese número.

function calcularFactorial(n){
  let factorial = 1 ;
  for (i=1; i<=n; i++){
    factorial *=i;
  }

  return factorial;
}

let numero = parseInt(prompt("Ingrese un número entero positivo: "));
let resultado = calcularFactorial(numero);
console.log(`el factorial del numero ${numero} es : ${resultado}`)

*/
// Ejercicio: Números Perfectos .Escribe un programa que determine si un número entero positivo n es un número perfecto. Un número perfecto es aquel que es igual a la suma de sus divisores propios positivos (excluyendo el número en sí mismo).

function esNumeroPerfercto(num){  //Esto define una función llamada esNumeroPerfecto que toma un número como argumento y devuelve true si el número es perfecto y false si no lo es.
  let sumaDivisores=0;  //Inicializamos una variable llamada sumaDivisores que se utilizará para acumular la suma de los divisores propios positivos del número

  
  // Utilizamos un bucle for para iterar desde 1 hasta numero - 1. En cada iteración, verificamos si el número es divisible por i (un posible divisor propio positivo).
  for (i=1; i< num; i++){
    if (num % i ===0){ //Si el número es divisible por i, significa que i es un divisor propio positivo. 
      sumaDivisores += i; // Sumamos el divisor propio al acumulador
    }
  }
  return sumaDivisores===num; // Comparamos la suma con el número original
}

// Llamamos a la función esNumeroPerfecto y mostramos el resultado en la consola
let num = parseInt(prompt("Ingrese un número entero positivo: "));

if(esNumeroPerfercto(num)){
  console.log(`${num} es un numero perfecto.`);
}else{
  console.log(`${num} no es numero perfecto.`)
}


