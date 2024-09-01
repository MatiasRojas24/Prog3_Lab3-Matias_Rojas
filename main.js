// INTRODUCCIÓN A JAVASCRIPT
// 2. 
let a = 5
let b = 10
let c = a+b

console.log("La suma de a y b es: "+c)

//3.
let nombre = prompt("¿Cuál es tu nombre?")
console.log("Hola, "+nombre+"!")

// OPERADORES LÓGICOS Y CONDICIONALES
//1.
let num1 = 8
let num2 = 6
let num3 = 11
let numMayor = num1

if(numMayor<num2){
  numMayor=num2
}else if (numMayor<num3){
  numMayor=num3
}

console.log(numMayor)

//2.
let numIngresado = prompt("Ingresa un número y te diré si es par o impar")
if(numIngresado%2 == 0){
  console.log("El número "+numIngresado+" es par")
}else{
  console.log("El número "+numIngresado+" es impar")
}

// OPERADORES DE ASIGNACIÓN Y BUCLES
//1.  
let contador = 10

while (contador != 0){
  console.log(contador)
  contador--
}

//2.
let numeroIngresado
do{
  numeroIngresado = prompt("Ingresa un número mayor a 100")
}while (numeroIngresado<100)
console.log("El número ingresado fue: "+numeroIngresado)

// FUNCIONES DE JAVASCRIPT
//1. 
function esPar(num){
  if (num%2==0){
    return true
  }else{return false}
}
console.log("El número 8 es par:"+esPar(8))
console.log("El número 7 es par: "+esPar(7))

//2.
function convertirCelsiusAFahrenheit(temperatura){
  return temperatura * 1.8+32
}
let tempC = 30
let tempF = convertirCelsiusAFahrenheit(tempC)

console.log(tempC+"°C son equivalentes a "+tempF+"°F")

// OBJETOS EN JAVASCRIPT
//1.
let persona = {
  nombre: "Ana",
  edad:30,
  Ciudad:""
}
function cambiarCiudad(personaACambiar){
  personaACambiar.Ciudad = prompt("Ingrese la ciudad de la persona")
}
cambiarCiudad(persona)

console.log("Persona: "+persona.nombre+", Edad: "+persona.edad+", Ciudad: "+persona.Ciudad)

//2.
let libro = {
  titulo:"El Quijote",
  autor: "Miguel de Cervantes Saavedra",
  year:1605
}
function libroEsAntiguo(libroAComprobar){
  const fechaActual = new Date();
  const añoActual = fechaActual.getFullYear();
  if (añoActual-libroAComprobar.year > 10){
    return true
  } else{return false}
}
console.log("El libro '"+libro.titulo+"' es antiguo: "+libroEsAntiguo(libro))

// ARRAYS
//1.
let numerosOriginales = [1,2,3,4,5,6,7,8,9,10]
let numerosMult = []
for (let num of numerosOriginales){
  numerosMult.push(num*2)
}
console.log("Números originales: "+numerosOriginales)
console.log("Números multiplicados por 2: "+numerosMult)  

//2.
let pares = []
for (let i = 1; i<20+1; i++){
  if(i%2 == 0){
    pares.push(i)
  }
}
console.log("Primeros 10 números pares: "+pares)

// INTRODUCCIÓN AL DOM
//1.
const parrafo = document.getElementsByClassName("parrafoEj1")
const botonCambiarColor = document.getElementById("botonColorAzul")

const cambiarColorParrafos = ()=>{
  for(let p of parrafo){
    p.classList.add("blueP")
  }
}
botonCambiarColor.addEventListener("click",()=>{
  cambiarColorParrafos()
})



//2.
const mensaje = document.getElementById("mensaje")
const botonForm = document.getElementById("enviarFormulario")

botonForm.addEventListener("click",()=>{
  alert("Has ingresado: "+mensaje.value)  
})

// EVENTOS EN DOM
//1.
const elemento1 = document.getElementById("elemento1")
const elemento2 = document.getElementById("elemento2")
const elemento3 = document.getElementById("elemento3")
const elemento4 = document.getElementById("elemento4")
elemento1.addEventListener("click",()=>{
  console.log(elemento1.innerHTML)
})
elemento2.addEventListener("click",()=>{
  console.log(elemento2.innerHTML)
})
elemento3.addEventListener("click",()=>{
  console.log(elemento3.innerHTML)
})
elemento4.addEventListener("click",()=>{
  console.log(elemento4.innerHTML)
})

//2.
const botonHabilita = document.getElementById("habilita")
const botonDeshabilita = document.getElementById("deshabilita")
const cuadroTexto = document.getElementById("inputTexto")

botonHabilita.addEventListener("click",()=>{
  cuadroTexto.disabled = false
})
botonDeshabilita.addEventListener("click",()=>{
  cuadroTexto.disabled = true
})

// LOCALSTORAGE
document.addEventListener("DOMContentLoaded", function() {
const correo = document.getElementById("inputCorreo")
const botonGuardarCorreo = document.getElementById("guardarCorreo")
const correoGuardado = document.getElementById("correoGuardado")
const botonBorrarCorreo = document.getElementById("borrarCorreo")
mostrarCorreo()

botonGuardarCorreo.addEventListener("click",()=>{
  let correoStorage = correo.value
  localStorage.setItem("correo",correoStorage)
  mostrarCorreo()
})

botonBorrarCorreo.addEventListener("click",()=>{
  localStorage.removeItem("correo")
  mostrarCorreo()
})
function mostrarCorreo(){
  let correoStorage = localStorage.getItem("correo")
  correoGuardado.textContent = "Correo Guardado: "+correoStorage
}
})