"use strict";
/* EJERCICIO 2 */
console.log("Ejercicio 2: corriendo desde typescript");
/* EJERCICIO 3*/
const texto = "Hola, Typescript!";
const numero = 123;
const booleano = true;
const fecha = new Date("2024-9-8");
const pEj1 = document.getElementById("pEjercicio1");
if (pEj1) {
    pEj1.innerHTML = `
    <p>Texto: ${texto}</p>
    <p>Número: ${numero}</p>
    <p>Booleano: ${booleano}</p>
    <p>Fecha: ${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}</p>
    `;
}
/* EJERCICIO 4 */
const num = 456;
function convertirNumAString(num) {
    return num.toString();
}
const pEj4 = document.getElementById("pEjercicio4");
if (pEj4) {
    pEj4.textContent = `Número convertido a cadena: ${convertirNumAString(num)}`;
}
/* EJERCICIO 5 */
const nums = [1, 7, 5, 12];
function sumarElementos(array) {
    let suma = 0;
    array.forEach((num) => {
        suma += num;
    });
    return suma;
}
const pEj5 = document.getElementById("pEjercicio5");
if (pEj5) {
    pEj5.textContent = `Suma del array: ${sumarElementos(nums)}`;
}
const estudiante = {
    nombre: "Juan",
    edad: 20,
    curso: "Matemáticas"
};
const pEj6 = document.getElementById("pEjercicio6");
if (pEj6) {
    pEj6.innerHTML = `
    <p>Estudiante: ${estudiante.nombre}</p>
    <p>Edad: ${estudiante.edad}</p>
    <p>Curso: ${estudiante.curso}</p>
    `;
}
const dir = {
    calle: "Av. Principal",
    ciudad: "Mendoza",
    cp: 12345
};
const pEj7 = document.getElementById("pEjercicio7");
if (pEj7) {
    pEj7.innerText = `Dirección: Calle: ${dir.calle} - Ciudad: ${dir.ciudad} - CP: ${dir.cp}`;
}
const usuario = {
    nombre: "Ana",
    correo: "ana65@gmail.com",
    saludar() {
        return `Hola, mi nombre es ${this.nombre}`;
    }
};
const pEj8 = document.getElementById("pEjercicio8");
if (pEj8) {
    pEj8.innerText = usuario.saludar();
}
/* EJERCICIO 9 */
class Persona {
    //
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    //
    presentarse() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
    }
}
const persona1 = new Persona("Carlos", 30);
const pEj9 = document.getElementById("pEjercicio9");
if (pEj9) {
    pEj9.innerText = persona1.presentarse();
}
/* EJERCICIO 10 */
class Caja {
    //
    constructor(valor) {
        this.valor = valor;
    }
    getValor() {
        return this.valor;
    }
}
const cajaTexto = new Caja("Mensaje secreto");
const cajaNum = new Caja(42);
const p1Ej10 = document.getElementById("p1Ejercicio10");
const p2Ej10 = document.getElementById("p2Ejercicio10");
if (p1Ej10) {
    p1Ej10.innerText = `Contenido caja de texto: ${cajaTexto.getValor()}`;
}
if (p2Ej10) {
    p2Ej10.innerText = `Contenido caja de texto: ${cajaNum.getValor()}`;
}
/* EJERCICIO 11 */
function retornarValor(valor) {
    return valor;
}
const p1Ej11 = document.getElementById("p1Ejercicio11");
const p2Ej11 = document.getElementById("p2Ejercicio11");
if (p1Ej11) {
    p1Ej11.innerText = `Identidad del número: ${retornarValor(123)}`;
}
if (p2Ej11) {
    p2Ej11.innerText = `Identidad del texto: ${retornarValor("texto")}`;
}
/* EJERCICIO 12 */
var Color;
(function (Color) {
    Color["Rojo"] = "rojo";
    Color["Morado"] = "morado";
    Color["Azul"] = "azul";
})(Color || (Color = {}));
const colorFav = Color.Morado;
const pEj12 = document.getElementById("pEjercicio12");
if (pEj12) {
    pEj12.innerText = `Color favorito: ${colorFav}`;
}
