// Acceso al DOM, aquí :)
const container = document.querySelector('div#container.container')
const inputSearch = document.querySelector('input#inputSearch')

function retornarCardHTML(producto) {
   return `<div class="div-card">
                <div class="imagen">
                    <h1>${producto.imagen}</h1>
                </div>
                <div class="prenda">
                    <p>${producto.nombre}</p>
                </div>
                <div class="importe">
                    <p>$ ${producto.importe}</p>
                </div>
                <div class="comprar"><button class="button button-outline" id="${producto.codigo}">add</button></div>
           </div>`
}

function activarClickEnBotones() {
    const botones = document.querySelectorAll('button.button.button-outline')
    botones.forEach((boton)=> {
        boton.addEventListener('click', ()=> {
            let producto = arrayProductos.find((prenda)=> prenda.codigo === parseInt(boton.id))
            carritoPrendas.push(producto)
            console.table(carritoPrendas)
        })
    })
}

function cargarProductos(array) {
    container.innerHTML = ""
    array.forEach((producto)=> {
        container.innerHTML += retornarCardHTML(producto)
    })
    activarClickEnBotones()
}
cargarProductos(arrayProductos)

inputSearch.addEventListener('search', ()=> {
    const resultado = arrayProductos.filter((prenda)=> prenda.nombre.toLowerCase().includes(inputSearch.value.toLowerCase()))
    cargarProductos(resultado)
})