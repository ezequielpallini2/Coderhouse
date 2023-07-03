const carrito = [{id: 1234, nombre: 'NOTEBOOK EXO E17', importe: 79950},
                 {id: 6789, nombre: 'IPAD PRO 12', importe: 219890},
                 {id: 3456, nombre: 'LENOVO IDEAPAD 13', importe: 199949}]

const carrito2 = [{id: 1234, nombre: 'NOTEBOOK EXO E17', importe: 79950, cantidad: 1},
                  {id: 6789, nombre: 'IPAD PRO 12', importe: 219890, cantidad: 3}]


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
    // for convencional y for ... of
    // for (const elemento of array) {
    //     console.log(elemento)
    // }

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

function mapearProductos() {
    //permite realizar transf. a partir del array original

    //EJEMPLO1: creamos array de elementos con nombres de productos
    //let arraySimplificado = productos.map((producto)=> producto.nombre )

    //EJEMPLO2: creamos un array de obj con nombre e importe
    // let arraySimplificado = productos.map((producto)=> {
    //         return {
    //                 descripcion: producto.nombre,
    //                 precio: producto.importe
    //                }
    //     })
    // console.table(arraySimplificado)

    //EJEMPLO3:  proyección de precios trimestral
    let arrayProyeccion = productos.map((producto)=> {
            return {
                    nombre: producto.nombre,
                    importeActual: producto.importe,
                    importe10on: parseFloat((producto.importe * 1.1).toFixed(2)),
                    importeCash: parseFloat((producto.importe * 0.9).toFixed(2)),
                    importeMes1: parseFloat((producto.importe * 1.06).toFixed(2)),
                    importeMes2: parseFloat((producto.importe * 1.12).toFixed(2)),
                    importeMes3: parseFloat((producto.importe * 1.18).toFixed(2)),
                   }
    })
    console.table(arrayProyeccion)
}

function calcularTotalCarrito() {
    //EJEMPLO1: carrito simple
    // let totalCarrito = carrito.reduce((total, producto)=> total + producto.importe, 0)
    // console.log('Total del carrito:', totalCarrito)                                      

    //EJEMPLO2: carrito múltiples unidades
    let totalCarrito = carrito2.reduce((total, producto)=> total + (producto.importe * producto.cantidad), 0)
    console.log('Total del carrito:', totalCarrito)
}

function ordenarProductos() {
    //ORDERN ASC
    // productos.sort((a, b)=> {
    //     if (a.importe > b.importe) {
    //         return 1
    //     }
    //     if (a.importe < b.importe) {
    //         return -1
    //     }
    //     return 0
    // })
    //console.table(productos)
    //ORDEN DESC
    productos.sort((a, b)=> {
        if (a.importe < b.importe) {
            return 1
        }
        if (a.importe > b.importe) {
            return -1
        }
        return 0
    })
    console.table(productos) 
}

/* A FUTURO...
    findLast()
    findLastIndex()
    flat(1) //
    group()
    new Set()
*/