export function convertirCelsiusAFahrenheit (){

    let temCels;
    let temFahr;
    
    do{
        temCels = prompt("Ingrese una temperatura en Celsius")
    }while(isNaN(temCels))

    temFahr = temCels * 1.8 + 32;
    console.log(temCels,"°C son equivalentes a",temFahr,"°F");
}