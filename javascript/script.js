
const productos = ["zapallo", "papa", "camote", "zanahoria", "acelga"];
const precios = [100, 150, 120, 50, 80];
let carrito = [];
let total = 0;


function mostrarProductos() {
    console.log("Verduras disponibles:");
    productos.forEach((producto, index) => {
        console.log(`${producto}: $${precios[index]}`);
    });
}


function agregarAlCarrito() {
    let seguirComprando = true;
    while (seguirComprando) {
        let seleccion = prompt("Ingrese la verdura que desea comprar o 'pagar' para finalizar:").toLowerCase();
        if (seleccion === "pagar") {
            seguirComprando = false;
            break;
        }
        
        let indice = productos.indexOf(seleccion);
        if (indice !== -1) {
            carrito.push(productos[indice]);
            total += precios[indice];
            alert(`${seleccion} Agregado al carrito. Total actual: $${total}`);
        } else {
            alert("Verdura no encontrada. Intente nuevamente.");
        }
    }
}


function mostrarTotal() {
    console.log("Carrito de compras:");
    carrito.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto}`);
    });
    console.log(`Total a pagar: $${total}`);
    alert(` Total a pagar: $${total}`);
}


mostrarProductos();
agregarAlCarrito();
mostrarTotal();
