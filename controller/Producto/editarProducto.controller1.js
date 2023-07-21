import { productoServices } from '../../services/producto.service.js';
import { sweetAlert } from './../../assets/js/sweetAlert.js';
const formulario = document.querySelector('[data-form]');

const obtenerProducto = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id === null) {
        console.log("Error");
    }

    const portada = document.querySelector('[data-imagen]');
    const nombre = document.querySelector('[data-nombre]');
    const categorias = document.querySelectorAll('option[value]');
    const precio = document.querySelector('[data-precio]');
    const descripcion = document.querySelector('[data-descripcion]');

    try {
        const producto = await productoServices.detalleProducto(id);
        if (producto.portada && producto.nombre && producto.precio && producto.categoria && producto.descripcion) {
            portada.value = productos.portada;
            nombre.value = productos.nombre;
            precio.value = productos.precio;
            for (let i = 0; i < categorias.length; i++) {
                if (categorias[i].value == productos.categoria) {
                    categorias[i].setAttribute('selected', '')
                }
            }
            descripcion.value = productos.descripcion;

        } else {
            throw new Error();
        }
    } catch (error) {

    }
}

obtenerProducto();

const categoria = document.querySelector('[data-categoria]');

const obtenerCategoria = () => categoria.value;
categoria.addEventListener('change', obtenerCategoria)



formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const portada = document.querySelector('[data-imagen]').value;
    const nombre = document.querySelector('[data-nombre]').value;
    const categoria = obtenerCategoria();
    const precio = document.querySelector('[data-precio]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;

    const confirmacion = await sweetAlert.mensaje("Producto editado correctamente", "success", "#b8c995");
    if (confirmacion) {
        productosServicios.actualizarProducto(portada, nombre, categoria, precio, descripcion, id)
            .then(() => {
                window.location.href = "../../admin/admin.html";
            })
    }
})

function mensaje(title, icon) {
    return new Promise(resolve => {
        Swal.fire({
            position: 'center',
            icon,
            title,
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
        }).then((result) => {
            resolve(result);
        })
    })
}