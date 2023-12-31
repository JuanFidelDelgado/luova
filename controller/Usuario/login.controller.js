/*import { usuarioServicios } from '../../services/usuario-services.js';*/
import { usuarioServices } from '../../services/usuario.services.js';
import { sweetAlert } from '../../assets/js/sweetAlert.js';
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    var txtemail = document.getElementById('txtemail').value;
    var txtpass = document.getElementById('txtpass').value;

    usuarioServices.validarUsuario().then(async (datos) => {
        const { email, password } = datos[0];

        if (txtemail == email && txtpass == password) {
            const valido = await sweetAlert.mensaje("Datos correctos", "success", "#b8c995");
            if (valido) {
                window.location.href = '../../productos/listar-productos.html'
            }
        } else {
            const invalido = await sweetAlert.mensaje("Datos incorrectos", "error", "#f59d9c");
            return invalido;

        }
    })

}, { once: true })


    // console.log(data[0]);