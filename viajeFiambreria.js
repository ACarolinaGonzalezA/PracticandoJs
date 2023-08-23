const prompt = require("prompt-sync")({ sigint: true });

//CLASE4S
Temperatura = 200;
EstaLloviendo = true;
PisoAscensor = 4;
HoraActual= Date;
HoraAperturaFiambrería= 9;
HoraCierreFiambrería= 21;
CantidadQueso= 500;
DeudaMónica= 1500;

// Variables con valores predefinidos
let temperatura = 25;
let llueve = false;
let pisoAscensor = 3;
let horaActual = 15;
let horaAperturaFiambreria = 10;
let horaCierreFiambreria = 19;
let cantidadQueso = 100; 
let deudaConMonica = 0; 

// Mostrar las variables por pantalla
console.log("Temperatura:", temperatura);
console.log("¿Está lloviendo?", llueve);
console.log("Piso del ascensor:", pisoAscensor);
console.log("Hora actual:", horaActual);
console.log("Hora de apertura de la fiambrería:", horaAperturaFiambreria);
console.log("Hora de cierre de la fiambrería:", horaCierreFiambreria);
console.log("Cantidad de queso:", cantidadQueso);
console.log("Deuda con Mónica:", deudaConMonica);

//Desafío Extra: Invertir el Contenido de las Variables:
// Ejemplo de intercambio de contenido de variables usando una variable temporal
let variableA = "Camisa";
let variableB = "Pantalón";

console.log("Antes del intercambio:");
console.log("Variable A:", variableA);
console.log("Variable B:", variableB);

// Usamos una variable temporal para almacenar el valor de A
let temp = variableA;

// Luego asignamos el valor de B a A
variableA = variableB;

// Finalmente, asignamos el valor almacenado en la variable temporal a B
variableB = temp;

console.log("Después del intercambio:");
console.log("Variable A:", variableA);
console.log("Variable B:", variableB);


//CLASE4A
let nombre = prompt("Ingrese su  nombre: ");
console.log(`Hola ${nombre} `);

// Tipos de variables 
//let contador se asigna así; let miApodo = 'hackerman' // su valor puede variar 
// const url = una vez se asigna valor NO se puede cambiar 

//Nuestra tarea será declarar dos variables: una con el nombre edad y la otra con el nombre peso.
let edad;
let peso;

//Declaremos dos variables llamadas edad y peso, a las cuales debemos asignarles un valor numérico.
let edad1 = 36; 
let peso1 = 55;

//Ahora, debemos crear una constante llamada EDAD_MINIMA y otra llamada EDAD_MAXIMA, a las cuales les asignaremos valores numéricos 18 y 99 respectivamente.
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

//Para este ejercicio, debemos declarar 4 variables de tipo let con los nombres: verdadero, nada, texto y numero. A cada una de ellas, tendremos que asignarle el tipo de dato que sugiera su nombre, según corresponda.
let verdadero = true;
let nada= null;
let texto = 'cualquier cosa';
let numero = 4;

//Declarar y asigna dos variables: primerNumero y segundoNumero. Luego, declarar las variables resultadoSuma, resultadoResta, resultadoMultiplicacion, resultadoDivision y en cada una almacena el resultado que corresponda.Por último, imprimir cada uno de los resultados utilizando console.log(nombreDeLaVariable).

let primerNumero = 20;
let segundoNumero = 8;

let resultadoSuma = primerNumero + segundoNumero;
let resultadoResta = primerNumero - segundoNumero;
let resultadoMultiplicacion = primerNumero * segundoNumero;
let resultadoDivision = primerNumero / segundoNumero ;