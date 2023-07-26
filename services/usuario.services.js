const listarUsuarios = () =>
    fetch("http://localhost:3000/usuarios").then(respuesta => respuesta.json());

const validarUsuario = () => {
    return fetch("http://localhost:3000/usuarios", {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    }).then(resp => resp.json());
}

export const usuarioServices = {
    listarUsuarios,
    validarUsuario
}