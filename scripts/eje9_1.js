export function guardar(input, texto) {
    const correo = input.value;  // Corregido: Usar .value en lugar de .textContent
    localStorage.setItem("datos", JSON.stringify({ correo }));
    texto.textContent = "Correo guardado: " + correo;
}

export function eliminar(input, texto) {
    localStorage.removeItem("datos");  // Corregido: Pasar la clave correcta ("datos")
    texto.textContent = "Correo guardado: ";
}

export function verificarCorreoGuardado(texto) {
    const datosGuardados = localStorage.getItem("datos");
    if (datosGuardados !== null) {
        const correo = JSON.parse(datosGuardados).correo;
        texto.textContent = "Correo guardado: " + correo;
    } else {
        texto.textContent = "No hay ningún correo guardado.";
    }
}
