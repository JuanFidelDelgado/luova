// FUNCION DEL SCROLL HEADER
const header = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add("nav-scrolled");
    } else if (window.scrollY <= 50) {
        header.classList.remove("nav-scrolled");
    }
})

// FUNCTION DEL VALIDAR FORMULARIO
const inputs = document.querySelectorAll('.inputs--input, .inputs--textarea');

inputs.forEach((input) => {
    input.addEventListener('blur', (parametro) => {
        validar(parametro.target);
    })
})

const validar = (parametro) => {
    const tipodeParametro = parametro.dataset.tipo;
    if (parametro.validity.valid) {
        parametro.classList.remove('formulario--error');
        parametro.parentElement.querySelector('.input--mensaje').innerHTML = ""
    } else {
        parametro.classList.add('formulario--error');
        parametro.parentElement.querySelector('.input--mensaje').innerHTML =
            mostrarTipodeError(tipodeParametro, parametro);
    }
}

const tipodeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
]

const mensajeError = {
    name: {
        valueMissing: "Ingrese su nombre.",
        patternMismatch: "Escriba solo letras.",
    },
    message: {
        valueMissing: "Ingrese su mensaje.",
    },
    email: {
        valueMissing: "Ingrese su correo.",
        typeMismatch: "El correo no es válido",
    },
    pass: {
        valueMissing: "Ingrese su contraseña.",
    }
}

const mostrarTipodeError = (tipodeParametro, parametro) => {
    let mensaje = "";
    tipodeErrores.forEach((error) => {
        if (parametro.validity[error]) {
            mensaje = mensajeError[tipodeParametro][error];
        }
    })
    return mensaje;
}
