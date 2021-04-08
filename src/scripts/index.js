/* Recoleccion de los elementos del DOM */
const btn_dark_mode = document.getElementById('dark-mode');
const body = document.getElementById('body');
const logo = document.getElementById('logo');
const menu = document.getElementById('menu');
const list = document.getElementById('list');
const meta_theme_color = document.getElementById('theme-color');
const btn_search = document.getElementById('btn-search');


/* Local storage para definir el ultimo modo de vista usado */
let myStorage = window.localStorage;

/* Inicializacion de la key modo si no existe */
if (myStorage.modo == undefined) {
    localStorage.setItem('modo', 0);
} else {
    /* Permite aplicar los estilos del ultimo modo utilizado*/
    if (myStorage.modo == 1) {
        body.classList.add("dark");
        btn_dark_mode.textContent = "MODO DIURNO";
        logo.src = "./assets/img/logo-mobile-modo-noct.svg";
        menu.src = "./assets/img/burger-modo-noct.svg";
        btn_search.src = "./assets/img/icon-search-modo-noct.svg";
        meta_theme_color.content = "#37383C";
    }
}

/* Evento click cambiar modo de vista */
btn_dark_mode.addEventListener('click', function modo() {
    if (body.classList == "dark") {
        body.classList.remove("dark");
        btn_dark_mode.textContent = "MODO NOCTURNO";
        logo.src = "./assets/img/logo-desktop.svg";
        btn_search.src = "./assets/img/icon-search.svg";
        meta_theme_color.content = "#572EE5";
        list.classList == "" ? menu.src = "./assets/img/burger.svg" : menu.src = "./assets/img/close.svg";
        localStorage.setItem('modo', 0);
    } else {
        body.classList.add("dark");
        btn_dark_mode.textContent = "MODO DIURNO";
        logo.src = "./assets/img/logo-mobile-modo-noct.svg";
        btn_search.src = "./assets/img/icon-search-modo-noct.svg";
        meta_theme_color.content = "#37383C";
        list.classList == "" ? menu.src = "./assets/img/burger-modo-noct.svg" : menu.src = "./assets/img/close-modo-noct.svg";
        localStorage.setItem('modo', 1);
    }
});

/* Evento click menu hambruguesa */
menu.addEventListener('click', () => {
    if (body.classList == "dark") {
        if (list.classList == "ul-active") {
            list.style.transform = "translateY(-900px)";
            list.style.transition = "transform 1.5s";
            setTimeout(() => { list.classList.remove("ul-active"); }, 1500);
            menu.src = "./assets/img/burger-modo-noct.svg";
        } else {
            list.classList.add("ul-active");
            list.style.transform = "translateY(0px)";
            list.style.transition = "transform 1.5s";
            menu.src = "./assets/img/close-modo-noct.svg";
        }
    } else {
        if (list.classList == "ul-active") {
            list.style.transform = "translateY(-900px)";
            list.style.transition = "transform 1.5s";
            setTimeout(() => { list.classList.remove("ul-active"); }, 1500);
            menu.src = "./assets/img/burger.svg";
        } else {
            list.classList.add("ul-active");
            list.style.transform = "translateY(0px)";
            list.style.transition = "transform 1.5s";
            menu.src = "./assets/img/close.svg";
        }
    }

});