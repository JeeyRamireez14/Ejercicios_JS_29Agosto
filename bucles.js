//Ciclos
/** 
 * Un ciclo nos permite ejecutar una misma instruccion n
 * cantidad de veces, esto definido por una condicion, que:
 * 
 * De ser TRUE se repiten las instruccion
 * De ser FALSE, se termina el proceso
 * 
 * 
 */

//---------------------Ciclo for
//inicialización
//Condición
//Contador

//Ciclo for para imprimir los números del 1 al 5
for(let i = 1; i <= 5; i++){
    console.log(i);
    
}


//Ciclo for que imprima los números del 1 al 100, pero con conteo de 5 en 5
for (let i = 5; i <= 100; i+=5){
    console.log(i);
    }

//Como usar un ciclo for para recorrer todos los elementos de un arreglo
let mkRoster = ["Scorpion", "Sub-Zero", "Sonya Blade", "Raiden", "Liu Kang", "Kano", "Johnny Cage"]
for(let x = 0; x;) {
    console.log(mkRoster);
    
}

for (let x = 0; x < mkRoster.length; x++) {
    console.log(mkRoster[x]);
    
}

//Ciclo for que decremente los números desde el 5 hasta el 1
for(let z = 5; z>=1; z--){
    console.log(z);
    
}

//-----------------------Ciclo while
let i = 11;
while(i <= 100) {
console.log(i);
i++
}

//Ciclo do while

do {
    console.log(i)
i++
} while (i<=100);


//Derivados del ciclo for - for of / for in

//for of - me devuelve los elementos de un arreglo
for (const figthers of mkRoster){
    console.log(figthers);
    
}

//for in - me devuelve los indices de un arreglo
for (const figthers in mkRoster)
{
    console.log(figthers);
    
}