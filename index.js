let arreglovacio = []; // Array vacío

let arregloconelementos = [poker,club,costeña]; // array con elementos


let arreglocondiferentes = [55, "brayan", {nombre: "valentina"}, ["negro", "rosado", "azul"]];



let arregloconstructor = new Array(2, 4, 6, 8, 10); // array constructor 


let arreglosecuencia = Array.from({ length: 200 }, (_, index) => index + 1);//array secuencia numérica



let arrayRepeticion = new Array(50).fill(0); // array de repeticion 





let arreglotexto = "soñame vos que si dormis";

let arregloDePalabras = cadena.split(" ");       // array cadenas de texto

console.log(arregloDePalabras); 





let arreglo1 = [1, 2, 3];
let arreglo2 = [4, 5, 6];


let arregloCombinado = [...arreglo1, ...arreglo2];    // array combinado 

console.log(arregloCombinado);






let arregloConRepetidos = [1, 2, 2, 3, 4, 4, 5];

let conjunto = new Set(arregloConRepetidos);

let arregloSinRepetidos = [...conjunto];

console.log(arregloSinRepetidos);








function generarValores(numElementos) {
    let array = [];
    for (let i = 0; i < numElementos; i++) {
        array.push(Math.random() * 100); 
    }
    return array;                                 // array dinamico  de numeros aleatorios entre 0 y 100
}

const arrayGenerado = generarValores(5);

console.log(arrayGenerado);