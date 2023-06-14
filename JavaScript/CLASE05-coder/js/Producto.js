class Producto {
    constructor(id, nombre, importe, stock) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
        this.stock = stock
    }
    obtenerImporteConIVA(iva) {
        return this.importe * iva
    }
    verificarPuntoDePedido() {
        if (this.stock < 10) {
            return "⛔️ Debes reponer el stock cuanto antes. (" + this.stock + ")"
        } else {
            return "✅ El stock es óptimo. (" + this.stock + ")"
        }
    }
    descontarDelStock(unidades) {
        if (this.stock - unidades >= 0) {
            //this.stock = this.stock - unidades
            this.stock -= unidades
            return this.stock
        } else {
            console.error('No se pueden descontar las unidades informadas: ' + unidades)
        }
    }
}