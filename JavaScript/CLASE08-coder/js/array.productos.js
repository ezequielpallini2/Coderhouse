const paises = ['Uruguay', 'Chile', 'Argentina']

/*
    .push()     //agregar elementos en la última posición
    .pop()      //elimina elemento (de la última posición)
    .slice()    //cortar y generar un nuevo array con determinados elementos
    .splice()   //eliminar un elemento de un array, (eliminar varios), reemplazar un elemento por otro
    .join()     // ", " " - " 
    .concat()   //fusionar varios arrays
    .sort()     // ordenar arrays ASC, 
    .reverse()  // invertir posición de elementos del array
    .sort().reverse() //ordenamiento descendente
*/

// {id: 1234, imagen:'💻', nombre: 'NOTEBOOK EXO E17', importe: 79950, categoria: 'Portátiles'}

const productos = [{id: 1234, imagen:'💻', nombre: 'NOTEBOOK EXO E17', importe: 79950, categoria: 'Portátiles'},
                   {id: 2345, imagen:'💻', nombre: 'MACBOOK AIR 13', importe: 749900, categoria: 'Portátiles'},
                   {id: 3456, imagen:'💻', nombre: 'LENOVO IDEAPAD 13', importe: 199949, categoria: 'Portátiles'},
                   {id: 4567, imagen:'🖥️', nombre: 'LENOVO GAMER 15', importe: 609090, categoria: 'Desktop'},
                   {id: 5678, imagen:'🖥️', nombre: 'ASUS GAMING PRO 17', importe: 679800, categoria: 'Desktop'},
                   {id: 6789, imagen:'📱', nombre: 'IPAD PRO 12', importe: 219890, categoria: 'Tablets'},
                   {id: 7890, imagen:'📱', nombre: 'PAD DROID 10.1', importe: 119960, categoria: 'Tablets'},
                   {id: 8901, imagen:'📱', nombre: 'IPAD MINI 7.9', importe: 229900, categoria: 'Tablets'},
                   {id: 9012, imagen:'⌚️', nombre: 'SMARTWATCH 1.8', importe: 29900, categoria: 'Relojes'}]

//Creamos una función para generar números aleatorios.
const creoID = ()=> parseInt(Math.random() * 10_000)

function agregarProducto() {
    let id = creoID()
    let nombre = prompt("Nombre del producto:")
    let importe = parseFloat(prompt("Importe del producto:"))
    let categoria = prompt("Categoría del producto:")

    let nuevoProducto = {
                         id: id, 
                         imagen:' ', 
                         nombre: nombre, 
                         importe: importe, 
                         categoria: categoria
                        }
        productos.push(nuevoProducto)
        console.table(productos)
}

function sumarNumeros(nroA, nroB, fn) {
    let resultado = nroA + nroB
        fn(resultado)
}

function recorrerArrayProductos() {
    //iterar: recorrer array de principio a fin
    //toma cada elemento u objeto, y lo pasa como parámetro
    productos.forEach((producto)=> {
        console.log(producto)
    })
}

function buscarProducto() {
    /*  find: busca un elemento u objeto en el array
        Recorre el array de principio a fin
        Cuando encuentra la coincidencia, retorna el elemento u objeto
        Cuando retornó, deja de iterar el array
        Si no encontró nada, retorna 'undefined' */
    let codigo = parseInt(prompt('Ingresa el código de producto a buscar:'))
    
    let resultado = productos.find((producto)=> producto.id === codigo)
        if (resultado === undefined) {
            console.warn('No se encontró producto con dicho código:', codigo)
        } else {
            console.log(resultado)
        }
}

// function filtrarProductos() {
//     /*
//     Itera el array de principio a fin
//     busca uno o más elementos u objetos que coincidan con el parámetro indicado
//     retorna un array con el o los elementos u objetos, si encontró coincidencias
//     Sino, retorna un array vacío
//     */
//     let cat = prompt('Ingresa la categoría de productos a buscar:')
    
//     let resultado = productos.filter((producto)=> producto.categoria === cat)
//         if (resultado.length === 0) { //retornó array vacío
//             console.warn('No se encontraron categorías con el nombre:', cat)
//         } else {
//             console.table(resultado)
//         }
// }

function filtrarProductos() {
    let nombre = prompt('Ingresa (parte) del nombre del producto a buscar:')
    
    let resultado = productos.filter((producto)=> producto.nombre.toUpperCase().includes(nombre.toUpperCase()))
        if (resultado.length === 0) {
            console.warn('No se encontraron productos con dicho nombre:', nombre)
        } else {
            console.table(resultado)
        }
}

