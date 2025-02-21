document.addEventListener("DOMContentLoaded", function () {
    const menuCheckbox = document.getElementById("menu-checkbox");

    // Cierra el menú solo cuando el usuario haga scroll en pantallas de escritorio
    window.addEventListener("scroll", function () {
        // Verifica si la pantalla es de escritorio (mayor a 1024px)
        if (window.innerWidth > 1024 && menuCheckbox.checked) {
            menuCheckbox.checked = false;
        }
    });
});
