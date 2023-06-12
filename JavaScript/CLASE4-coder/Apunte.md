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

Para declarar una variable con var, se utiliza la siguiente sintaxis:

javascript
Copy code
var variableName;
Con let, se utiliza la siguiente sintaxis:

javascript
Copy code
let variableName;
Y con const, se declara una constante, lo que significa que su valor no puede cambiar después de la asignación inicial:

javascript
Copy code
const constantName = value;
En cuanto a los tipos de datos en JavaScript, hay varios tipos primitivos, que incluyen:

Número (number): representa tanto números enteros como decimales.
Cadena de texto (string): representa una secuencia de caracteres.
Booleano (boolean): representa un valor verdadero (true) o falso (false).
Nulo (null): representa la ausencia intencional de cualquier objeto o valor.
Indefinido (undefined): representa una variable a la que no se le ha asignado un valor.
Símbolo (symbol): representa un identificador único e inmutable.
Además de estos tipos primitivos, JavaScript también tiene un tipo de dato compuesto llamado objeto (object), que puede contener pares de clave-valor y métodos.

La diferencia entre ES5 y ES6 (también conocido como ECMAScript 2015) radica en las características y mejoras introducidas en ES6. Algunas de las diferencias clave son:

Declaración de variables: ES6 introdujo las palabras clave let y const para declarar variables, lo que ofrece un mejor alcance y manejo de constantes.

Arrow functions: ES6 introdujo una sintaxis más concisa para definir funciones de flecha (arrow functions), lo que facilita la escritura de funciones anónimas y evita problemas con el ámbito (this).

Clases: ES6 introdujo la sintaxis de clases, permitiendo una programación orientada a objetos más clara y sencilla.

Desestructuración de objetos y arreglos: ES6 permite extraer valores de objetos y arreglos de una manera más sencilla mediante la desestructuración.

Módulos: ES6 introdujo un sistema de módulos nativo, lo que facilita la organización y reutilización del código.

Estas son solo algunas de las diferencias principales, pero hay muchas más mejoras y características agregadas en ES6 y las versiones posteriores.

{}

{Retorno;}
    SINTAXIS BASICA Y DECLARACIÖN DE FUNCIONES

    FOR
        for (let i = 0; i < 5; i++) {
            console.log(i);
            }
            // Salida: 0, 1, 2, 3, 4
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
    // Salida: 0, 1, 2, 3, 4

    IF ELSE
    const age = 20;
    if (age >= 18) {
        console.log("Eres mayor de edad.");
    } else {
      console.log("Eres menor de edad.");
    }
    // Salida: Eres mayor de edad.


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
    // Salida: Obtuviste una B.

    const day = 3;

    SWITCH CASE

    switch (day) {
    case 1:
        console.log("Hoy es lunes");
        break;
    case 2:
        console.log("Hoy es martes");
        break;
    case 3:
        console.log("Hoy es miércoles");
        break;
    case 4:
        console.log("Hoy es jueves");
        break;
    case 5:
        console.log("Hoy es viernes");
        break;
    default:
        console.log("Es fin de semana");
    }

    try catch

    try {
    // Bloque de código donde se ejecutan las instrucciones que pueden generar una excepción
    const result = 10 / 0; // División por cero (genera una excepción)
    console.log(result); // Esta línea no se ejecutará debido a la excepción
    } catch (error) {
    // Bloque de código que se ejecuta cuando se captura una excepción
    console.log("Se produjo un error:", error);
    }


    ejemplo:

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
        // Salida: 8

    funciones con parámetros por defecto = 

        function saludar(nombre = "Invitado") {
            nombre = prompt("quien chota sos");
            console.log("¡Hola, " + nombre + "!");
        }

        saludar(); // Salida: ¡Hola, Invitado!
        saludar("Juan"); // Salida: ¡Hola, Juan!


