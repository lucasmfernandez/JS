const carrito = []

const ordenarMayorMenor = () => {
    productos.sort((a, b) => b.precio - a.precio)
    MostrarProductos()

};


const MostrarProductos = () => {
    const listaProductos = productos.map(producto => {
        return '- '+producto.nombre+' $'+producto.precio
    })
    alert('Lista de productos:'+'\n\n'+listaProductos.join('\n'))
    comprarProductos(listaProductos)
}



const comprarProductos = (listaProductos) => {
    let productoNombre = ''
    let productoCantidad = 0
    let otroProducto = false

    do {
        productoNombre = prompt('Que producto seas comprar?'+'\n\n'+listaProductos.join('\n'))
        productoCantidad = parseInt(prompt('Cantidad'))
        
        const producto = productos.find(producto => producto.nombre.toLowerCase() == productoNombre.toLowerCase())  
       
        if (producto) {
            agregarAlCarrito(producto, producto.id, productoCantidad)
        } else {
            alert('Producto fuera de stock')
        }

        otroProducto = confirm('Desea agregar otro producto?')
    } while (otroProducto);

};

const agregarAlCarrito = (producto, productoId, productoCantidad) => {
    const productoRepetido = carrito.find(producto => producto.id === productoId)

    if (productoRepetido) {
        productoRepetido.cantidad += productoCantidad
    } else {
        producto.cantidad += productoCantidad
        carrito.push(producto)
    }

}


ordenarMayorMenor()



















// const comprarProductos = () => {
//     let producto = ''
//     let cantidad = 0
//     let precio = 0
//     let subtotal = 0
//     let seguirComprando = false

//     do {
//         producto = prompt('Ingrese el nombre del producto a comprar', 'Productos disponibles: Remera, Buzo, Camiseta')
//         cantidad = parseInt(prompt('Que cantidad queres comprar?'))

//         switch (producto) {
//             case 'remera':
//                 precio = 5000                
//                 break;
//             case 'buzo':
//                 precio = 9000
//                 break;
//             case 'camiseta':
//                 precio = 12000
//                 break;
//             default:
//                 alert('Usted ingreso un producto incorrecto o fuera de stock')
//                 precio = 0
//                 cantidad = 0
//         }
        
//         subtotal += precio * cantidad
//         seguirComprando = confirm('Desea seguir comprando?')

//     } while (seguirComprando);

//     return subtotal     

// };

// const subtotal = comprarProductos()


// const costoEnvio = (subtotal) => {
//     const enviarProductos = confirm('Queres que te lo enviemos a tu domicilio?')
    
//     if (enviarProductos &&  subtotal >= 15000) {
//         alert('Envio bonificado. El total es: $'+subtotal)
//     } else if (enviarProductos && subtotal < 15000) {
//         subtotal  += 1000
//         alert('El costo de tu compra con envio es de: $'+subtotal)
//     } else {
//         alert('El total de tu compra es de: $'+subtotal)
//     }

//     return subtotal
// }


// costoEnvio (subtotal)

// alert('Gracias por tu compra!')
