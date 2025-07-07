document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show1');
});

//volver a ocultar menu cuando se de click en cualquier opcion
document.getElementById('inicio').addEventListener('click', () => {
    location.reload();
});
//optimizado, para asi recorrer todas las opciones de menu y cerrarlo al dar click
// document.querySelectorAll('#menu a').forEach(link => {
//     link.addEventListener('click', () => {
//         setTimeout(() => {
//             const menu = document.getElementById('menu');
//             if(menu.classList.contains('show1')) {
//                 menu.classList.toggle('show1');
//             }
//         }, 1050)
//     });
// });

//boton de contacto
document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("btnContact")

    //Mostrar u ocultar el boton dependiendo del scroll
    window.addEventListener("scroll", function() {
        if(window.scrollY > 300){//se muestra despues de 300px de scroll
            scrollToTopBtn.style.display = "flex";
        }else {
            scrollToTopBtn.style.display = "none";
        }
    });
});

//animacion de entrada
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0, rootMargin: "100px" }); //activa cuando el 30% del elemento es visible

    elements.forEach(element => observer.observe(element));
});

//efecto de subrayado para los menu para saber donde esta la persona