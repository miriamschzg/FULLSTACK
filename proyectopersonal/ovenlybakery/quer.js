
//MENÚ DESPLEGABLE
document.addEventListener("DOMContentLoaded", function() {
    const toggleMenu = document.getElementById("toggle-menu");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    toggleMenu.addEventListener("click", function() {
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        } else {
            dropdownMenu.style.display = "block";
        }
    });
});


//AMPLIAR FICHAS AL HACER CLICK
const fichas = document.querySelectorAll('.estiloFicha');

fichas.forEach((estiloFicha) => {
    estiloFicha.addEventListener('click', () => {
        estiloFicha.querySelector('.cuerpoFicha').classList.toggle('active')
    });
});
