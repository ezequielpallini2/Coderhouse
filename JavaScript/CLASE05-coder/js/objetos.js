const IVA21 = 1.21 //impuesto al valor agregado === TAX
const IVA105 = 1.105
/*
1999 ES2 > Objeto literal
2009 ES5 > Funciones constructoras
2015 ES6 > Clases JS (basadas en método constructor)

Joe McMillian
Cameron Howe
Gordon Clark
Donna Clark

*/

//OBJETO LITERAL - 1999
const empleado1 = {nombre: 'Joe McMillian', ocupacion: 'CEO', edad: 38, fechaIngreso: '1981-03-21'}
const empleado2 = {nombre: 'Cameron Howe', ocupacion: 'Programadora', edad: 32, fechaIngreso: '1981-03-30'}



function escribirIVAEnConsola() {
    console.log(IVA)
}

// FUNCIONES CONSTRUCTORAS - 2009
// function Producto(id, nombre, importe, stock) {
//     this.id = id
//     this.nombre = nombre
//     this.importe = importe
//     this.stock = stock
//     this.obtenerImporteConIVA = function(iva) {
//         return this.importe * iva
//     }
//     this.verificarPuntoDePedido = function() {
//         if (this.stock < 10) {
//             return "⛔️ Debes reponer el stock cuanto antes. (" + this.stock + ")"
//         } else {
//             return "✅ El stock es óptimo. (" + this.stock + ")"
//         }
//     }
//     this.descontarDelStock = function(unidades) {
//         if (this.stock - unidades >= 0) {
//             //this.stock = this.stock - unidades
//             this.stock -= unidades
//             return this.stock
//         } else {
//             console.error('No se pueden descontar las unidades informadas: ' + unidades)
//         }
//     }
// }

const producto1 = new Producto(1, "MACBOOK PRO", 1800, 28)
const producto2 = new Producto(2, "IPAD AIR", 280, 40)
const producto3 = new Producto(3, "APPLE WATCH", 99, 5)
