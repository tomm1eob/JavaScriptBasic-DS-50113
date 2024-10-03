import { suma } from "./scripts/eje1_2";
import { mostrarNombre } from "./scripts/eje1_3";
import { mayor } from "./scripts/eje2_1";
import { convertirCelsiusAFahrenheit } from "./scripts/eje4_2";
import { parImpar } from "./scripts/eje2_2";
import { modificarPersona, mostrarPersona } from "./scripts/eje5_1";
import { comprobarAntiguedad } from "./scripts/Eje5_2";
import { cuentaRegresiva } from "./scripts/eje3_1";
import { mayor100 } from "./scripts/eje3_2";
import { esPar } from "./scripts/eje4_1";
import { multiplicar } from "./scripts/eje6_1";
import { Arraypares } from "./scripts/eje6_2";
import { cambiarcolor } from "./scripts/eje7_1";
import { mostrarAlerta } from "./scripts/eje7_2";
import { mostrarElemento } from "./scripts/eje8_1";
import { desabilitar, habilitar } from "./scripts/eje8_2";
import { eliminar, guardar, verificarCorreoGuardado } from "./scripts/eje9_1";

// Eje 1_2
const buttonEje2 = document.getElementById("eje1_2");
buttonEje2.addEventListener("click", ()=>{suma()})

// Eje 1_3
const buttonEje3 = document.getElementById("eje1_3")
buttonEje3.addEventListener("click", ()=>{mostrarNombre()});

// Eje 2_1
const buttonEje4 = document.getElementById("eje2_1")
buttonEje4.addEventListener("click", ()=>{mayor()});

// Eje 2_2
const buttonEje5 = document.getElementById("eje2_2")
buttonEje5.addEventListener("click", ()=>{parImpar()});

// Eje 3_1
const buttonEje6 = document.getElementById("eje3_1")
buttonEje6.addEventListener("click", ()=>{cuentaRegresiva()});

// Eje 3_2
const buttonEje7 = document.getElementById("eje3_2")
buttonEje7.addEventListener("click", ()=>{mayor100()});

// Eje 4_1
const buttonEje8 = document.getElementById("eje4_1")
buttonEje8.addEventListener("click", ()=>{esPar()});

// Eje 4_2
const buttonEje4_2 = document.getElementById("eje4_2");
buttonEje4_2.addEventListener("click", () => { convertirCelsiusAFahrenheit() });

// Eje 5_1
const buttonMostrarPersona = document.getElementById("mostrarPers");
buttonMostrarPersona.addEventListener("click", () => { mostrarPersona() });
const buttonEje5_1 = document.getElementById("eje5_1");
buttonEje5_1.addEventListener("click", () => { modificarPersona() });

// Eje 5_2
const buttonEje5_2 = document.getElementById("eje5_2");
buttonEje5_2.addEventListener("click", () => { comprobarAntiguedad() });

// Eje 6_1
const buttonEje6_1 = document.getElementById("eje6_1");
buttonEje6_1.addEventListener("click", () => { multiplicar() });

// Eje 6_2
const buttonEje6_2 = document.getElementById("eje6_2");
buttonEje6_2.addEventListener("click", () => { Arraypares() });

// Eje 7_1
const buttonEje7_1 = document.getElementById("eje7_1");
buttonEje7_1.addEventListener("click", () => { cambiarcolor() });

// Eje 7_2
const formulario = document.getElementById("eje7_2");
formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar el envío del formulario
    mostrarAlerta();
});

// Eje 8_1
const elemento1 = document.getElementById("li1");
const elemento2 = document.getElementById("li2");
const elemento3 = document.getElementById("li3");
const elemento4 = document.getElementById("li4");
elemento1.addEventListener("click", () => { mostrarElemento(elemento1)})
elemento2.addEventListener("click", () => { mostrarElemento(elemento2)})
elemento3.addEventListener("click", () => { mostrarElemento(elemento3)})
elemento4.addEventListener("click", () => { mostrarElemento(elemento4)})

// Eje 8_2
const buttonEje8_2a = document.getElementById("eje8_2a");
const inputText8_2 = document.getElementById("input8_2");
buttonEje8_2a.addEventListener("click", () => { desabilitar(inputText8_2) });
const buttonEje8_2b = document.getElementById("eje8_2b");
buttonEje8_2b.addEventListener("click", () => { habilitar(inputText8_2) });

// Eje 9_1
const buttonEje9_1a = document.getElementById("eje9_1a");
const buttonEje9_1b = document.getElementById("eje9_1b");
const inputEmail = document.getElementById("inputCorreo");
const texto = document.getElementById("texto1");

window.addEventListener("load", () => {
    verificarCorreoGuardado(texto);
});

buttonEje9_1a.addEventListener("click", () => { guardar(inputEmail, texto) });  // Guardar correo
buttonEje9_1b.addEventListener("click", () => { eliminar(inputEmail, texto) });  // Eliminar correo







