// Arreglos
/**
 * Para declarar un arreglo, podemos hacerlo de las siguientes maneras
 * Palabras reservadas: var, let, const
 * 
 * 3 posibles maneras de agregar elementos dentro de un arreglo
 * 
 * 1. Agregar los elementos de manera manual
 * 2. Agregarlo indicando el indice y que elemento se va a agregar dentro de esta posicion
 * 3. Mandar a llamar a la clase Array para construir un nuevo arreglo
 */

//Manera numero 1 de agregar elementos de un arreglo
let oddNumbers = [1, 3, 5, 7, 9, 11]
let shopping = ["queso", "manzana", "pan", "lechuga", "carne"]
 
//Manera #2
let cars = []
cars[0] = "Kia"
cars[1] = "Honda"
cars[2] = "Nissan"

//Manera #3 Construyendo un nuevo arreglo y colocando los elementos
let singers = new Array("Gerard Way", "Matt Bellamy", "Alex Turner", "Julian Casablancas")

//console.log(oddNumbers);
console.log(shopping);
//console.log(cars);
//console.log(singers);

//Como acceder a un elemento en específico de mi arreglo - indice o posicion
console.log(shopping[2]);

//Como acceder al último elemento de mi arreglo cuando no conozco la longitud lenght-1
//array[array.lenght-1]
console.log(shopping.length);
console.log(shopping[shopping.length-1]);

//--------------------------------MÉTODOS PARA ARREGLOS

//pop, push, unshift, shift, slice, at, sort, reverse, indexOff, forEach, map


//pop - elimina el último elemento de un arreglo
shopping.pop()
console.log(shopping);

//push -agrega un elemento al final del arreglo
shopping.push("agua")
console.log(shopping);

//unshift - agrega un nuevo elemento al inicio del arreglo
shopping.unshift("Zanahoria")
console.log(shopping);

//shift elimina el primer elemento de mi arreglo
shopping.shift()
console.log(shopping);

//slice - a partir del indice colocando me devuelve el resto de elementos dentro de un arreglo
console.log(shopping.slice(1));

//at - devuelve el elemento indicando el indice
console.log(shopping.at(0));

//sort . ordena los elementos dentro de un arreglo de manera ascendente
//shopping.sort()
//console.log(shopping);

//reverse - invierte el orden del arreglo
shopping.reverse()
console.log(shopping);

//indexOf - me devuelve el indice del elemento que yo coloque como argumento
console.log(shopping.indexOf("lechuga"));


//MÉTODOS ITERATIVOS (forEach, map)

//forEach - para cada elemento del arreglo, ejecuta una instrucción

//arreglo.forEach(alias) => bloque de código a ejecutar)
shopping.forEach((printList) => console.log(`${printList} es un elemento de la lista de compras`))

shopping.forEach(function (listItem){
    console.log(`${listItem} es un elemento de la lista de compras`)
})

//map mos permite iterar una instrucción sobre cada elemento del arreglo con diferencia de que map me crea un arreglo nuevo

//sintaxis
//Declarar una variable para almacenar un nuevo arreglo
//arreglo.map(alias) => bloque de código a ejecutar

let buyItem = shopping.map(function(lista){
    return`${lista} producto comprado`
})

let buyItem2 = shopping.map(listItem => `${listItem} producto comprado`)
console.log(buyItem);
console.log(buyItem2);

