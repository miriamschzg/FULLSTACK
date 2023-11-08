
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

//TEXTO BEATING
const beatingText = document.getElementById('beatingText');
let scale = 1;
let scalingUp = true;

function updateBeatingText() {
  if (scalingUp) {
    scale += 0.002; //ajusta la velocidad a la que aumenta la escala
    if (scale >= 1.05) { //tamaño máximo
      scalingUp = false;
    }
  } else {
    scale -= 0.002;
    if (scale <= 0.95) { //tamaño mínimo
      scalingUp = true;
    }
  }
  
  beatingText.style.transform = `scale(${scale})`;
  requestAnimationFrame(updateBeatingText);
}

updateBeatingText();