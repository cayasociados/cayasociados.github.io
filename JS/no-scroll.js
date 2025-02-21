const menuCheckbox = document.querySelector(".navbar__menu-checkbox");
const body = document.body;

// Función para bloquear/desbloquear el scroll
function toggleNoScroll() {
    const isMobileOrTablet = window.innerWidth >= 360 && window.innerWidth <= 1024;
    
    if (menuCheckbox.checked && isMobileOrTablet) {
        body.classList.add("no-scroll");
    } else {
        body.classList.remove("no-scroll");
    }
}

// Agregar evento de cambio al checkbox del menú
menuCheckbox.addEventListener("change", toggleNoScroll);

// Agregar evento de redimensionamiento
window.addEventListener("resize", () => {
    // Si cambia el tamaño y el menú está cerrado, asegurarse de que el scroll vuelva a la normalidad
    if (!menuCheckbox.checked) {
        body.classList.remove("no-scroll");
    }
});
