const productos = [
    { id: 1, nombre: "papa kg", precio: 2100 },
    { id: 2, nombre: "zapallo kg", precio: 2500 },
    { id: 3, nombre: "zanahoria kg", precio: 900 },
    { id: 4, nombre: "acelga kg", precio: 1000 }
  ];
  
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
  const contenedorProductos = document.getElementById("productos");
  const contenedorCarrito = document.getElementById("items-carrito");
  const total = document.getElementById("total");
  const btnVaciar = document.getElementById("vaciar-carrito");
  
  
  productos.forEach(producto => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio}</p>
      <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
    `;
    contenedorProductos.appendChild(div);
  });
  
  function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
  }
  
  function eliminarProducto(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
  }
  
  function actualizarCarrito() {
    contenedorCarrito.innerHTML = "";
    carrito.forEach((item, index) => {
      const div = document.createElement("div");
      div.innerHTML = `
        ${item.nombre} - $${item.precio}
        <button onclick="eliminarProducto(${index})">Eliminar</button>
      `;
      contenedorCarrito.appendChild(div);
    });
  
    const totalCarrito = carrito.reduce((acc, item) => acc + item.precio, 0);
    total.innerText = totalCarrito;
  
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  
  btnVaciar.addEventListener("click", () => {
    carrito = [];
    actualizarCarrito();
  });
  
  actualizarCarrito(); 
  