const prompt = require("prompt-sync")({ sigint: true });

//PRÁCTICA DE LOGICA DE PROGRAMACIÓN DEL 16 DE AGOSTO DEL 2023
//Ejercicio 1: Suma de Números Pares: Escribe una función que tome un número positivo como parámetro y devuelva la suma de todos los números pares desde 1 hasta ese número.
let numeroMax = parseInt(prompt("Ingrese un numero para mostrar la suma de los numemros pares que contiene: "));
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
