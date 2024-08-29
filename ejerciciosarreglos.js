//Función que imprima todos los números del 0 al 100 y compare que números son divisibles entre 4 y 9

function imprimirNumDiv4y9() {
    
    for (let i = 0; i <= 100; i++) {
        let mensaje = `${i}`; 

        if (i % 4 === 0) {
            mensaje += " - Este número es divisible entre 4";
        }

        if (i % 9 === 0) {
            mensaje += " - Este número es divisible entre 9";
        }
        console.log(mensaje);
    }
}

imprimirNumDiv4y9();


// Ejercicio sobre la iteracion que ayude a llenar el arreglo con los numeros del 1 al 10
function Arreg1() {

    let numeros = [];

    for (let i = 1; i <= 10; i++) {
        numeros.push(i);
    }

    numeros.sort((a, b) => b - a);

    console.log(numeros);
}

Arreg1();

// Ejercicio sobre un bucle que sume los numeros del 1 al 100
// Resultado final 5050
function Arreg5050() {
    
    let sumaTotal = 0;

    for (let i = 1; i <= 100; i++) {
        sumaTotal += i;
    }

    console.log(sumaTotal);
}


Arreg5050();
