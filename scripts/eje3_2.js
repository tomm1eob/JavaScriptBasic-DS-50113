export function mayor100(){
    let valor;

    do{
        valor = prompt("Ingrese un valor mayor a 100")
    }while(valor < 100)

    console.log("Ingrese un valor mayor a 100:", valor)
}