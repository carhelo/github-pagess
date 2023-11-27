// Carga de datos desde un archivo JSON utilizando fetch
let productos = [];

fetch("js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    });

// Selección de elementos del DOM
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const numerito = document.querySelector("#numerito");

// Páginas
const paginas = {
    principal: document.querySelector("#pagina-principal"),
    grados: document.querySelector("#pagina-grados"),
    eventos: document.querySelector("#pagina-eventos"),
    secundaria: document.querySelector("#pagina-secundaria"),
    tutores: document.querySelector("#pagina-tutores"),
};

// Función para cargar productos en el contenedor del DOM
function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        // Creación de elementos HTML para cada producto
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
    <div class="producto-detalles">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">Bs.${producto.precio}</p> <!-- Cambio en la línea para utilizar "Bs." -->
        <button class="producto-inscribirme" id="${producto.id}">Inscribirme</button>
    </div>
`;

        // Agrega el nuevo elemento al contenedor
        contenedorProductos.append(div);
    });

    // Actualiza los botones "Inscribirme" después de cargar los productos
    actualizarBotonesInscribirme();
}

// Asigna un evento de clic a cada botón de categoría para filtrar productos
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        const categoria = e.currentTarget.id;

        // Lógica para filtrar productos por categoría y actualizar el contenido visible
        if (categoria === "todos") {
            mostrarPagina("principal");
            cargarProductos(productos);
        } else {
            const productosFiltrados = productos.filter(producto => producto.categoria === categoria);
            mostrarPagina(categoria);
            cargarProductos(productosFiltrados);
        }
    });
});

// Función para actualizar los botones "Inscribirme" después de cambios en el DOM
function actualizarBotonesInscribirme() {
    const botonesInscribirme = document.querySelectorAll(".producto-inscribirme");
    botonesInscribirme.forEach(boton => {
        boton.addEventListener("click", inscribirmeAlCarrito);
    });
}

// Función para mostrar la página deseada y ocultar las demás
function mostrarPagina(pagina) {
    for (const key in paginas) {
        if (Object.hasOwnProperty.call(paginas, key)) {
            paginas[key].style.display = key === pagina ? "block" : "none";
        }
    }
}

// Resto del código (inscribirmeAlCarrito, actualizarNumerito, etc.)

// Función para agregar un producto al carrito y actualizar la interfaz de usuario
function inscribirmeAlCarrito(e) {
    const idProducto = e.target.id; // Obtén el ID del botón clickeado
    const productoSeleccionado = productos.find(producto => producto.id === idProducto);

    if (productoSeleccionado) {
        // Lógica para agregar productos al carrito y mostrar un mensaje de notificación
        // Por ejemplo, podrías agregar el producto al array productosEnCarrito y actualizar el localStorage
        productosEnCarrito.push({
            id: productoSeleccionado.id,
            cantidad: 1, // Puedes ajustar esto según tus necesidades
        });

        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

        // Actualiza el numerito en la interfaz
        actualizarNumerito();
    }
}

// Función para actualizar el número que indica la cantidad de productos en el carrito
function actualizarNumerito() {
    const nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
