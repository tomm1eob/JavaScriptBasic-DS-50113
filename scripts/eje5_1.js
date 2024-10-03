let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Barcelona"
}

export function mostrarPersona() {
    console.log("Persona:",persona.nombre,"Edad:",persona.edad,"Ciudad:",persona.ciudad)
}

export function modificarPersona() {
    persona.ciudad = prompt("Ingrese nueva ciudad")
    console.log("Se modifico Persona y ahora {Persona:",persona.nombre,"Edad:",persona.edad,"Ciudad:",persona.ciudad,"}")
}