export function parImpar () {

    let numero = prompt("Coloca un número");

    if((numero % 2) == 0)
        console.log("El número",numero,"es par");
    else{
        console.log("El número",numero,"es impar");
    }

}