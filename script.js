//variables 
//estructura basica ed una variable 
//1.forma de escribir una variable (no recomendada)

var nombre= "jonathan"
//2. otra forma de escribir una variable (recomendada)

let apellido = "Pantoja"
// variable constante (permite cambiar)

const comida ="Arepa" 
//para fechas

let fechadehoy = Date ()

//operadores aritmeticos todas las formas de realizar operaciones matematicas 
//sumar, restar, multiplicar dividir 
 //para restar (-) para multiplicar (*) para dividir (/)

///variable vacia 
 let resultado 

let numero1 = 50;
let numero2 = 20;

let resultadosuma = numero1 + numero2;
let resultadoresta = numero1 - numero2;
let resultadodivision = numero1 / numero2;
let resultadomultiplicacion = numero1 * numero2;

console.log(resultadosuma)
console.log(resultadoresta)
console.log(resultadodivision)
console.log(resultadomultiplicacion)


//para comporar se pueden usar 3 (===)iguales donde compara el valor y tipo de dato 2(==) compara si el elemento es igual 1 (=) guarda los datos 

//if 
//> mayor que 
// < menor que
let edad = 18;
if (edad <=18) {
    console.log ("No puede entrar");
}else{
        console.log("Bienvenido");
    }

// switch pastilla azul sigues en la simulación pastilla roja eres libre de la matriz If es un condicional 

let pastilla = "roja";
if (pastilla == "azul") {
    console.log ("Todo fue un sueño");    
}else if (pastilla =="azul") {
    console.log ("saliste de la matrix")
}else {
    console.log ("tengo que seleccionar una pastilla")
}
//switch 

switch (edad) {
    case 1:
        console.log("soy un 1")
        break;
        case 20:
            console.log("soy un 20")
            break;
            default:
                console.log ("no se quien soy")
                break;
}

//ciclos nos permiten repetir codigo 
//for (comando para el ciclo) aqui es necesario especificar el inicio y el final 
let final = 5
for (let inicio = 0; inicio <= final; inicio++)
{ console.log("hola mundo mi numero es"+ inicio)
}

//while tambien es una estructura ciclica (significa que mientras este ocurriendo se repite el ciclo) no es es necesario tener claro el inicio y el final

let productos = 5;

while ( productos > 0) {
    console.log("producto vendido",productos)
    productos--;    
}
//productos = productos -1 java ecrip permite reducior o decrementar un numero, hay que cuidar que quede doble guion (--) ya que si no se repetira el loop infinitamente ya que no se designa el final, esto podria dañar el equipo esta es la forma mas sencilla de reducir un elemento (hay que establecerle cuando parar)

//funciones (es una manera de no repetir codigo) las funciones sirve para agrupar,permite hacer codigos mas complejos sin alargar tanto codigo
//si una funcion tiene algo entre parentesis, hay que entregar algo entre parentesis (los parentesis se llaman parametro)tambien permite 

function saludar (nombre) {
    console.log("hola soy", nombre)
}
saludar (nombre) //aqui se activa la funcion

//null: nulo, inexistente, faltante
//undefined: no esta definido, no hay nada puesto
//none: ninguno, nada 
