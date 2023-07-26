// FUNCION DEL SCROLL HEADER
const header = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add("nav-scrolled");
    } else if (window.scrollY <= 50) {
        header.classList.remove("nav-scrolled");
    }
})