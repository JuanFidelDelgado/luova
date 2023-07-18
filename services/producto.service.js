//Este archivo se encarga de la comunicación con el servidor
//Manejo con Fetch API
const listaProductos = () => fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());

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

export const productoServices = {
    listaProductos,
};
