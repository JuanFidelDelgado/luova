/*import { productosServicios } from '../../services/producto.service.js';*/
import { productoServices } from "../../services/producto.service.js";

const listaAretes = document.getElementById('categoriaAretes');
const listaCollares = document.getElementById('categoriaCollares');
const listaAccesorios = document.getElementById('categoriaAccesorios');

const templateAretes = document.getElementById('templateAretes').content;
const templateCollares = document.getElementById('templateCollares').content;
const templateAccesorios = document.getElementById('templateAccesorios').content;
const fragment = document.createDocumentFragment();


const contenedorProductos = document.getElementById('contenedorProductos');

const listarProductos = (template, lista, categoria) => {
    productoServices.listaProductos().then(data => {
        const filtrar_categoria = data.filter(producto => producto.categoria == categoria);

        for (let index = 0; index < 7; index++) {
            const element = filtrar_categoria[index];
            if (!(element === undefined)) {
                template.querySelector('[data-portada]').setAttribute('src', element.portada);
                template.querySelector('[data-nombre]').textContent = element.nombre;
                template.querySelector('[data-precio] span').textContent = element.precio;
                template.querySelector('[data-id] span').textContent = element.id;
                template.querySelector('[data-detalle]').dataset.id = element.id;

                const clone = template.cloneNode(true);
                fragment.appendChild(clone);
            }
        }
        lista.appendChild(fragment);
    }).catch((error) => console.log(error));
}

listarProductos(templateAretes, listaAretes, 'Aretes');
listarProductos(templateCollares, listaCollares, 'Collares');
listarProductos(templateAccesorios, listaAccesorios, 'Accesorios');

contenedorProductos.addEventListener('click', e => {
    if (e.target.dataset.detalle == "detalle") {
        const id = e.target.dataset.id;
        window.location.href = '../../productos/detalle-producto.html?id=' + id;
    }
})