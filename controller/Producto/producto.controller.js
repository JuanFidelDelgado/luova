import { productoServices } from "../../services/producto.service.js";

const crearNuevaLinea = (portada, nombre, categoria, precio, descripcion, id) => {
    const linea = document.createElement("div")
    const contenido =
        `<div class="producto" data-producto>
            <img class="producto--portada" src="${portada}" alt="Aqui va la imagen" data-portada>
            <h2 class="producto--nombre" data-nombre>${nombre}</h2>
            <p class="producto--categoria" data-categoria>${categoria}</p>
            <p class="producto--precio" data-precio>$<span>${precio}</span></p>
            <p class="producto--id" data-id>#<span>${id}</span></p>
            <div class="producto-controles">
                <a href=""><i class="producto-controles--icon ri-delete-bin-2-fill" data-delete="delete"></i></a>
                <a href=""><i class="producto-controles--icon ri-pencil-fill" data-edit="edit"></i></a>
            </div>
        </div>
        `;
    linea.innerHTML = contenido;
    return linea;
};

const div = document.querySelector("[data-producto]")

productoServices.listaProductos().then((data) => {
    data.forEach((productos) => {
        const nuevaLinea = crearNuevaLinea(productos.portada, productos.nombre, productos.categoria, productos.precio, productos.descripcion, productos.id);
        div.appendChild(nuevaLinea);
    });
})
    .catch((error) => alert("Ocurrió un error"));

