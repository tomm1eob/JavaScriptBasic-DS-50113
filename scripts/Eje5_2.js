let libro = {
    titulo: "La sombra sobre Innsmouth",
    autor: "Howard Phillips Lovecraft",
    año: 1936
}

export function comprobarAntiguedad() {
    if ((2024-libro.año) > 10){
        console.log("El libro:", libro.titulo, "es antiguo", true);
    }else{
        console.log("El libro:", libro.titulo, "es antiguo", false);
    }
    
}