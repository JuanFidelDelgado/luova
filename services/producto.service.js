//Este archivo se encarga de la comunicación con el servidor

/*Manejo con promesas original
const listaProductos = () => {
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open("GET", "http://localhost:3000/productos");
        http.send();
        http.onload = () => {
            const response = JSON.parse(http.response);
            if (http.status >= 400) {
                reject(response);
            } else {
                resolve(response);
            }
        };
    });

    return promise;
    //La respuesta que se obtiene de una promesa se convierte en "data"
};
*/

//Manejo con Fetch API
const listaProductos = () => fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());

//Función para crear productos
const registrarProducto = (portada, nombre, categoria, precio, descripcion) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ portada, nombre, categoria, precio, descripcion, id: uuid.v4() })
    })
}

//Función para eliminar el producto según el id
const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE"
    })
}

//Función para obtener los datos del producto para editar
const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => respuesta.json());
};

const editarProducto = (portada, nombre, categoria, precio, descripcion, id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ portada, nombre, categoria, precio, descripcion })
    }).then(respuesta => respuesta)
        .catch((err) => console.log(err));
};

export const productoServices = {
    listaProductos,
    registrarProducto,
    eliminarProducto,
    detalleProducto,
    editarProducto
};
