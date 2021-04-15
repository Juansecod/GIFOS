let myStorage = window.localStorage;

/* Aplica ultimo tema usado */
if (myStorage.modo == undefined) {
    localStorage.setItem('modo', 0);
} else {
    if (myStorage.modo == 1) {
        body.classList.add("dark");
        btn_dark_mode.textContent = "MODO DIURNO";
        logo.src = "./assets/img/Logo-modo-noc.svg";
        menu.src = "./assets/img/burger-modo-noct.svg";
        btn_search.src = "./assets/img/icon-search-modo-noct.svg";
        meta_theme_color.content = "#37383C";
    }
}

/* Evento click cambiar modo de vista */
btn_dark_mode.addEventListener('click', function tema() {
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
        logo.src = "./assets/img/Logo-modo-noc.svg";
        btn_search.src = "./assets/img/icon-search-modo-noct.svg";
        meta_theme_color.content = "#37383C";
        list.classList == "" ? menu.src = "./assets/img/burger-modo-noct.svg" : menu.src = "./assets/img/close-modo-noct.svg";
        localStorage.setItem('modo', 1);
    }
});

/* Evento click menu hambruguesa */
menu.addEventListener('click', () => {
    if (list.classList == "ul-active") {
        list.style.transform = "translateY(-900px)";
        list.style.transition = "transform 1.5s";
        setTimeout(() => { list.classList.remove("ul-active"); }, 1500);
        if (body.classList == "dark") {
            menu.src = "./assets/img/burger-modo-noct.svg";
        } else {
            menu.src = "./assets/img/burger.svg";
        }
    } else {
        list.classList.add("ul-active");
        list.style.transform = "translateY(0px)";
        list.style.transition = "transform 1.5s";
        if (body.classList == "dark") {
            menu.src = "./assets/img/close-modo-noct.svg";
        } else { menu.src = "./assets/img/close.svg"; }
    }
});