export function esPar () {

    let numero = prompt("Coloca un número");

    if((numero % 2) == 0)
        console.log("El número",numero,"es par:", true);
    else{
        console.log("El número",numero,"es par:", false);
    }

}