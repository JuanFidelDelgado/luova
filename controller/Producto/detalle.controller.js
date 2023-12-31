import { productoServices } from "../../services/producto.service.js";

const detalleProducto = document.getElementById('detalleProducto');
const listaProductos = document.getElementById('listaProductos');
const templateDetaProducto = document.getElementById('templateDetaProducto').content;
const templateListaProductos = document.getElementById('templateListaProductos').content;
const fragment = document.createDocumentFragment();

const obtenerProducto = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id === null) {
        console.log("Error en la información del producto");
    }

    try {
        const producto = await productoServices.detalleProducto(id);
        const { categoria } = producto;
        //templateDetaProducto.querySelector('[data-imagen]').setAttribute('src', producto.portada);
        templateDetaProducto.querySelector('[data-cover]').setAttribute('src', producto.portada);
        templateDetaProducto.querySelector('[data-nombre]').textContent = producto.nombre;
        templateDetaProducto.querySelector('[data-precio] span').textContent = producto.precio;
        templateDetaProducto.querySelector('[data-descripcion]').textContent = producto.descripcion;

        const clone = templateDetaProducto.cloneNode(true);
        fragment.appendChild(clone);
        detalleProducto.appendChild(fragment);

        ProductosSimilares(categoria);
    } catch (error) {

    }
}

obtenerProducto();

const ProductosSimilares = (categoria) => {
    productoServices.listaProductos().then(data => {

        const filtrar_categoria = data.filter(
            producto => producto.categoria == categoria
        );

        for (let index = 0; index < 7; index++) {
            const element = filtrar_categoria[index];
            if (!(element === undefined)) {
                templateListaProductos.querySelector('[data-portada]').setAttribute('src', element.portada);
                templateListaProductos.querySelector('[data-nombre]').textContent = element.nombre;
                templateListaProductos.querySelector('[data-precio] span').textContent = element.precio;
                templateListaProductos.querySelector('[data-nombre]').textContent = element.nombre;
                templateListaProductos.querySelector('[data-detalle]').dataset.id = element.id;

                const clone = templateListaProductos.cloneNode(true);
                fragment.appendChild(clone);
            }
        }
        listaProductos.appendChild(fragment);
    })
}

listaProductos.addEventListener('click', e => {
    if (e.target.dataset.detalle == "detalle") {
        const id = e.target.dataset.id;
        window.location.href = '../../productos/detalle-producto.html?id=' + id;
    }
}, { once: true })