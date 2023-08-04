import { productoServices } from "../../services/producto.service.js";
import { sweetAlert } from '../../assets/js/sweetAlert.js';

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const portada = document.querySelector("[data-imagen]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    const confirmacion = sweetAlert.mensaje("Producto agregado correctamente", "success", "#b8c995")

    if (confirmacion) {
        productoServices.registrarProducto(portada, nombre, categoria, precio, descripcion)
            .then(() => {
                window.location.href = "../../productos/listar-productos.html";
            }).catch((error) => console.log(error));
    }
}, { once: true });