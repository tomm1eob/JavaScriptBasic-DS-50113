export function mostrarNombre () {

    let nombre = prompt("Coloca un nombre");

    if(nombre != null)
        console.log("Hola, ",nombre);
    else{
        console.log("No colocaste un nombre");
    }

}