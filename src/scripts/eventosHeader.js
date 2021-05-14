let myStorage = window.localStorage;
if (body.classList != "dark") {
    events.btnTrending();
}
/* Aplica ultimo tema usado */
if (myStorage.modo == undefined) {
    localStorage.setItem('modo', 0);
} else {
    if (myStorage.modo == 1) {
        body.classList.add("dark");
        btn_dark_mode.textContent = "MODO DIURNO";
        logo.src = "./assets/img/Logo-modo-noc.svg";
        menu.src = "./assets/img/burger-modo-noct.svg";
        srcBtnInputSearch();
        meta_theme_color.content = "#37383C";
        sliderLeft.src = "./assets/img/button-slider-left-md-noct.svg";
        sliderRight.src = "./assets/img/button-slider-right-md-noct.svg";
        events.btnTrendingNoct();
    }
}

/* Evento click cambiar modo de vista */
btn_dark_mode.addEventListener('click', function tema() {
    if (body.classList == "dark") {
        body.classList.remove("dark");
        btn_dark_mode.textContent = "MODO NOCTURNO";
        logo.src = "./assets/img/logo-desktop.svg";
        srcBtnInputSearch();
        meta_theme_color.content = "#572EE5";
        if (list.classList == "") {
            menu.src = "./assets/img/burger.svg";
        } else {
            menu.src = "./assets/img/close.svg";
        }
        sliderLeft.src = "./assets/img/button-slider-left.svg";
        sliderRight.src = "./assets/img/Button-Slider-right.svg";
        events.btnTrending();
        localStorage.setItem('modo', 0);
    } else {
        body.classList.add("dark");
        btn_dark_mode.textContent = "MODO DIURNO";
        logo.src = "./assets/img/Logo-modo-noc.svg";
        srcBtnInputSearch();
        meta_theme_color.content = "#37383C";
        if (list.classList == "") {
            menu.src = "./assets/img/burger-modo-noct.svg";
        } else {
            menu.src = "./assets/img/close-modo-noct.svg";
        }
        sliderLeft.src = "./assets/img/button-slider-left-md-noct.svg";
        sliderRight.src = "./assets/img/button-slider-right-md-noct.svg";
        events.btnTrendingNoct();
        localStorage.setItem('modo', 1);
    }
});

/* Evento click menu hambruguesa */
menu.addEventListener('click', events.menuEvent);

// Eventos SPA
favNav.addEventListener('click', () => {
    if (screen.width < 768) {
        events.menuEvent();
        search.style.transition = "none";
        containerMyGifs.style.transition = "none";
        containerFavoritos.style.transition = "opacity 1s";
    }
    events.favoritesActive();
});

myGifsNav.addEventListener('click', () => {
    if (screen.width < 768) {
        events.menuEvent();
        search.style.transition = "none";
        containerFavoritos.style.transition = "none";
        containerMyGifs.style.transition = "opacity 1s";
    }
    events.myGifsActive();
});

logo.addEventListener('click', () => {
    if (screen.width < 768) {
        if (list.classList == "ul-active") {
            events.menuEvent();
            search.style.transition = "none";
            containerFavoritos.style.transition = "none";
            containerMyGifs.style.transition = "opacity 1s";
        }
    }
    events.searchActive();
});