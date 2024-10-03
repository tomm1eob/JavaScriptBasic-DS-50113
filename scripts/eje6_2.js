const pares = [];

export function Arraypares() {
    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }
    
    console.log("Primeros 10 números pares:", pares);
}

