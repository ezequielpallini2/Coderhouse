{Clase 0}
    Nivelación
    nothing new 
    Aplicación web es una plataforma dinámica e interactiva y sus funcionalidades están en constante manenimiento y mejora. 
    Javascript es un lenguaje que se complementa con HTML y CSS. 
{Clase 1}
    sintaxis y variables
    variables se inician con let
    let x;
    x = 1;
    

    ¡Claro! Podemos hablar de JavaScript. En JavaScript, se pueden declarar variables utilizando las palabras clave var, let, o const. Antes de la introducción de ES6 (también conocido como ECMAScript 2015), solo se podía declarar variables usando var. Sin embargo, con ES6, se introdujeron las palabras clave let y const, que ofrecen una mayor flexibilidad y características adicionales.

Para declarar una variable con var, se utiliza la siguiente sintaxis:  -------------------------------

###
###
var variableName;
Con let, se utiliza la siguiente sintaxis:  -------------------------------

###
###
let variableName;
Y con const, se declara una constante, lo que significa que su valor no puede cambiar después de la asignación inicial:  -------------------------------

###
###
const constantName = value;
En cuanto a los tipos de datos en JavaScript, hay varios tipos primitivos, que incluyen:  -------------------------------

Número (number):  ------------------------------- representa tanto números enteros como decimales.
Cadena de texto (string):  ------------------------------- representa una secuencia de caracteres.
Booleano (boolean):  ------------------------------- representa un valor verdadero (true) o falso (false).
Nulo (null):  ------------------------------- representa la ausencia intencional de cualquier objeto o valor.
Indefinido (undefined):  ------------------------------- representa una variable a la que no se le ha asignado un valor.
Símbolo (symbol):  ------------------------------- representa un identificador único e inmutable.
Además de estos tipos primitivos, JavaScript también tiene un tipo de dato compuesto llamado objeto (object), que puede contener pares de clave-valor y métodos.

La diferencia entre ES5 y ES6 (también conocido como ECMAScript 2015) radica en las características y mejoras introducidas en ES6. Algunas de las diferencias clave son:  -------------------------------

Declaración de variables:  ------------------------------- ES6 introdujo las palabras clave let y const para declarar variables, lo que ofrece un mejor alcance y manejo de constantes.

Arrow functions:  ------------------------------- ES6 introdujo una sintaxis más concisa para definir funciones de flecha (arrow functions), lo que facilita la escritura de funciones anónimas y evita problemas con el ámbito (this).

Clases:  ------------------------------- ES6 introdujo la sintaxis de clases, permitiendo una programación orientada a objetos más clara y sencilla.

Desestructuración de objetos y arreglos:  ------------------------------- ES6 permite extraer valores de objetos y arreglos de una manera más sencilla mediante la desestructuración.

Módulos:  ------------------------------- ES6 introdujo un sistema de módulos nativo, lo que facilita la organización y reutilización del código.

Estas son solo algunas de las diferencias principales, pero hay muchas más mejoras y características agregadas en ES6 y las versiones posteriores.

{}

{Retorno;}
    SINTAXIS BASICA Y DECLARACIÖN DE FUNCIONES

    FOR
        for (let i = 0; i < 5; i++) {
            console.log(i);
            }
            // Salida:  ------------------------------- 0, 1, 2, 3, 4
    WHILE

    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;}
    
    DO WHILE

    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 5);
    // Salida:  ------------------------------- 0, 1, 2, 3, 4

    IF ELSE
    const age = 20;
    if (age >= 18) {
        console.log("Eres mayor de edad.");
    } else {
      console.log("Eres menor de edad.");
    }
    // Salida:  ------------------------------- Eres mayor de edad.


    ELSE IF

    const grade = 80;
    if (grade >= 90) {
        console.log("Obtuviste una A.");
    } else if (grade >= 80) {
        console.log("Obtuviste una B.");
    } else if (grade >= 70) {
        console.log("Obtuviste una C.");
    } else {
        console.log("Obtuviste una D.");
    }
    // Salida:  ------------------------------- Obtuviste una B.

    const day = 3;

    SWITCH CASE

    switch (day) {
    case 1:  -------------------------------
        console.log("Hoy es lunes");
        break;
    case 2:  -------------------------------
        console.log("Hoy es martes");
        break;
    case 3:  -------------------------------
        console.log("Hoy es miércoles");
        break;
    case 4:  -------------------------------
        console.log("Hoy es jueves");
        break;
    case 5:  -------------------------------
        console.log("Hoy es viernes");
        break;
    default:  -------------------------------
        console.log("Es fin de semana");
    }

    try catch

    try {
    // Bloque de código donde se ejecutan las instrucciones que pueden generar una excepción
    const result = 10 / 0; // División por cero (genera una excepción)
    console.log(result); // Esta línea no se ejecutará debido a la excepción
    } catch (error) {
    // Bloque de código que se ejecuta cuando se captura una excepción
    console.log("Se produjo un error:  -------------------------------", error);
    }


    ejemplo:  -------------------------------

    function IniciarSesion(usuario) {
        if (usuario) {
            alert("¡Bienvenido", usuario, "!");
        }else{
            alert("Alto ahí");
        }
    }

    funciones = 

        function sumar(a, b) {
        const resultado = a + b;
        return resultado;
        }

        const resultadoSuma = sumar(3, 5);
        console.log(resultadoSuma);
        // Salida:  ------------------------------- 8

    funciones con parámetros por defecto = 

        function saludar(nombre = "Invitado") {
            nombre = prompt("quien chota sos");
            console.log("¡Hola, " + nombre + "!");
        }

        saludar(); // Salida:  ------------------------------- ¡Hola, Invitado!
        saludar("Juan"); // Salida:  ------------------------------- ¡Hola, Juan!

    CLASES

    class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Getter
  getNombre() {
    return this.nombre;
  }

  // Setter
  setNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  // Getter
  getEdad() {
    return this.edad;
  }

  // Setter
  setEdad(nuevaEdad) {
    this.edad = nuevaEdad;
  }

  // Método toString
  toString() {
    return `Nombre:  ------------------------------- ${this.nombre}, Edad:  ------------------------------- ${this.edad}`;
  }
}

// Crear una instancia de la clase Persona
const persona = new Persona("Juan", 25);

// Acceder a los métodos y propiedades
console.log(persona.getNombre()); // Output:  ------------------------------- Juan
console.log(persona.getEdad()); // Output:  ------------------------------- 25

persona.setNombre("Pedro");
persona.setEdad(30);

console.log(persona.toString()); // Output:  ------------------------------- Nombre:  ------------------------------- Pedro, Edad:  ------------------------------- 30




    {ARRAYS}

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  toString() {
    return `Nombre:  ------------------------------- ${this.nombre}, Edad:  ------------------------------- ${this.edad}`;
  }
}

// Crear un array de personas
const personas = [];

// Agregar personas al array
personas.push(new Persona("Juan", 25));
personas.push(new Persona("María", 30));
personas.push(new Persona("Carlos", 22));

// Acceder a elementos del array
console.log(personas[0]); // Imprime el primer elemento del array

// Recorrer el array
for (let i = 0; i < personas.length; i++) {
  console.log(personas[i]);
}

// Obtener el tamaño del array
console.log(personas.length); // Imprime la cantidad de elementos en el array

otro array=

const idiotas = ['Jona' , 'el jona', 'vos']

Recorrer un array:  -------------------------------
Puedes recorrer un array utilizando bucles for, forEach o for...of. Aquí tienes un ejemplo con for:  -------------------------------
###
###
const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
Agregar elementos a un array:  -------------------------------
Puedes agregar elementos al final de un array utilizando el método push:  -------------------------------
###
###
const array = [1, 2, 3];
array.push(4);
console.log(array); // [1, 2, 3, 4]
Buscar elementos en un array:  -------------------------------
Puedes utilizar el método indexOf para buscar un elemento en un array:  -------------------------------
###
###
const array = [1, 2, 3, 4, 5];
const index = array.indexOf(3);
console.log(index); // 2
Quitar elementos de un array:  -------------------------------
Puedes utilizar el método splice para eliminar elementos de un array en una posición específica:  -------------------------------
###
###
const array = [1, 2, 3, 4, 5];
array.splice(2, 1); // Elimina el elemento en la posición 2
console.log(array); // [1, 2, 4, 5]
Ordenar elementos de un array:  -------------------------------
Puedes utilizar el método sort para ordenar los elementos de un array:  -------------------------------
###
###
const array = [3, 1, 4, 2, 5];
array.sort();
console.log(array); // [1, 2, 3, 4, 5]
###
###
Concatenar arrays: -------------------------------
cons personas = personitas.concat(personas); //
###
###
slicing array: -------------------------------
const personasPocas = personitas.slice(1,3)

funciones = 


function agregarProduct (){
  let id = creoID()
  let nombre = prompt("Product name: ")
  let importe = parseFloat(prompt("Importe: "))
  let categoria = prompt("Categoria: ")

  let product = {
                id: id,
                name: nombre,
                importe: importe,
                categoria: categoria
  }
  product.push(product)
  console.table(product)
}

function recorrerArrey() {

  produc.foreach((product) => {
    console.table(product)
  let resultado = productos.find(product => product.id === product)


find retorna el primer elemento del array que coincida con la condicion enviada. 


{DOM - DOCUMENT OBJECT MANAGER}

  DOCUMENT OBJECT MODEL

  get product by query
  <div class="container" id "container">
    const container =document.querySelector('div#product.product1')


  function retornarCardHTML(producto){
    return `<div class="div-card">
              <div class="imagen">
              <h1>${producto.imagen]</h1>
              </div>
              <div class>}

   
  function cargarProductos(){
    arrayProductos.forEach((producto)=>{


    }
  }
  }



