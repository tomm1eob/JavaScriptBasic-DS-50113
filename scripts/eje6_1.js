const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosMultiplicados = [];

export function multiplicar(){
    for (let i = 0; i < numeros.length; i++) {
        numerosMultiplicados[i] = numeros[i] * 2;
    }
    
    console.log("Array original:", numeros);
    console.log("Array multiplicado por 2:", numerosMultiplicados);
}

