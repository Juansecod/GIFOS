let myStorage = window.localStorage;

if (body.classList != "dark" && btnRight != undefined) {
    eventsHeader.btnTrending();
}
if (myStorage.GifsFavs == undefined) { localStorage.setItem('GifsFavs', `[]`); }
if (myStorage.MisGifos == undefined) { localStorage.setItem('MisGifos', `[]`); }

let gifsFavs = localStorage.getItem("GifsFavs");
gifsFavs = JSON.parse(gifsFavs);
if (gifsFavs.length != 0 && window.location.pathname != '/public/crear-gifo.html') {
    containerGifsFav.innerHTML = "";
    containerGifsFav.classList.add("view-gifs");
    gifsFavs.forEach((gif) => DOMgenerator.createDOMFavorites(gif));
}


let gifsMyGifs = localStorage.getItem("MisGifos");
gifsMyGifs = JSON.parse(gifsMyGifs);
if (gifsMyGifs.length != 0 && window.location.pathname != '/public/crear-gifo.html') {
    containerGifsMyGifs.innerHTML = "";
    containerGifsMyGifs.classList.add('view-gifs');
    gifsMyGifs.forEach((gif) => DOMgenerator.createDOMMyGifs(gif));
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

        meta_theme_color.content = "#37383C";
        if (sliderLeft != undefined && sliderRight != undefined) {
            sliderLeft.src = "./assets/img/button-slider-left-md-noct.svg";
            sliderRight.src = "./assets/img/button-slider-right-md-noct.svg";
            eventsHeader.btnTrendingNoct();
        }
    }
}
srcBtnInputSearch();
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
        if (sliderLeft != undefined && sliderRight != undefined) {
            sliderLeft.src = "./assets/img/button-slider-left.svg";
            sliderRight.src = "./assets/img/Button-Slider-right.svg";
            eventsHeader.btnTrending();
        }
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
        if (sliderLeft != undefined && sliderRight != undefined) {
            sliderLeft.src = "./assets/img/button-slider-left-md-noct.svg";
            sliderRight.src = "./assets/img/button-slider-right-md-noct.svg";
            eventsHeader.btnTrendingNoct();
        }
        localStorage.setItem('modo', 1);
    }
});

/* Evento click menu hambruguesa */
menu.addEventListener('click', eventsHeader.menuEvent);

// Eventos SPA
if (favNav != undefined && myGifsNav != undefined) {
    favNav.addEventListener('click', () => {
        if (screen.width < 768) {
            eventsHeader.menuEvent();
            sectionSearch.style.transition = "none";
            containerMyGifs.style.transition = "none";
            containerFavoritos.style.transition = "opacity 1s";
        }
        eventsHeader.favoritesActive();
    });

    myGifsNav.addEventListener('click', () => {
        if (screen.width < 768) {
            eventsHeader.menuEvent();
            sectionSearch.style.transition = "none";
            containerFavoritos.style.transition = "none";
            containerMyGifs.style.transition = "opacity 1s";
        }
        eventsHeader.myGifsActive();
    });

    logo.addEventListener('click', () => {
        if (screen.width < 768) {
            if (list.classList == "ul-active") {
                eventsHeader.menuEvent();
            }
            containerFavoritos.style.transition = "none";
            containerMyGifs.style.transition = "none";
            sectionSearch.style.transition = "opacity 1s";
        }
        eventsHeader.searchActive();
    });
}

// Carga en la parte deseada
const url = window.location.hash.split(('#'));
if (url[1] == "favoritos") eventsHeader.favoritesActive();
if (url[1] == "mis-gifs") eventsHeader.myGifsActive();

/* Animacion al hacer scroll en vistas Desktop */
if (window.screen.width > 950) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 90) {
            header[0].style.boxShadow = "0 2px 4px 1px rgba(156, 175, 195, 0.55)";
            searchHeader.style.display = "flex";
            searchHeader.style.opacity = 1;
            searchHeader.style.width = "calc(40% - 19%)";
            inputSearchHeader.style.cursor = "text";
            search_buttons[0].style.cursor = "pointer";
        } else {
            header[0].style.boxShadow = "0 0 0 0";
            searchHeader.style.width = "0";
            searchHeader.style.opacity = "0";
            inputSearchHeader.style.cursor = "default";
            search_buttons[0].style.cursor = "default";
        }
    });
} else {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 90) {
            header[0].style.boxShadow = "0 2px 4px 1px rgba(156, 175, 195, 0.55)";
        } else {
            header[0].style.boxShadow = "0 0 0 0";
        }
    });
}