let ocultarSearch = (container) => {
    search.style.opacity = 0;
    setTimeout(() => {
        search.style.display = "none";
        container.style.display = "flex";
    }, 1000);
    setTimeout(() => {
        container.style.opacity = 1;
    }, 1250);
};

let ocultarContainer = (container) => {
    let activeId = active().id;
    if (activeId == "a-favs" && container.id != "favorites") {
        containerFavoritos.style.opacity = 0;
        setTimeout(() => {
            containerFavoritos.style.display = "none";
            container.style.display = "flex";
        }, 1000);
        setTimeout(() => {
            container.style.opacity = 1;
        }, 1250);
    } else if (container.id != "my-gifs") {
        containerMyGifs.style.opacity = 0;
        setTimeout(() => {
            containerMyGifs.style.display = "none";
            container.style.display = "flex";
        }, 1000);
        setTimeout(() => {
            container.style.opacity = 1;
        }, 1250);
    }
};

let active = () => { return document.querySelector(".active"); };

function srcBtnInputSearch() {
    let index = 0;
    while (index < search_buttons.length) {
        if (body.classList == "dark") {
            search_buttons[index].src = "./assets/img/icon-search-modo-noct.svg";
        } else {
            search_buttons[index].src = "./assets/img/icon-search.svg";
        }
        index = index + 1;
    }
}

// Objeto que contiene las funciones de la navbar
const events = {
    favoritesActive: () => {
        if (active() != null) {
            ocultarContainer(containerFavoritos);
            active().classList.remove("active");
        } else {
            ocultarSearch(containerFavoritos);
        }
        let aFav = document.getElementById("a-favs");
        aFav.classList.add("active");
    },
    searchActive: () => {
        if (active() != null) {
            ocultarContainer(search);
            active().classList.remove("active");
        }
    },
    myGifsActive: () => {
        if (active() != null) {
            ocultarContainer(containerMyGifs);
            active().classList.remove("active");
        } else {
            ocultarSearch(containerMyGifs);
        }
        let aMyGifs = document.getElementById("a-misGifs");
        aMyGifs.classList.add("active");
    },
    btnTrending: () => {
        btnRight.addEventListener('mouseover', function() {
            sliderRight.setAttribute('src', "./assets/img/Button-Slider-right-hover.svg");
        });
        btnRight.addEventListener('mouseout', function() {
            sliderRight.setAttribute('src', "./assets/img/Button-Slider-right.svg");
        });

        btnLeft.addEventListener('mouseover', function() {
            sliderLeft.setAttribute('src', "./assets/img/button-slider-left-hover.svg");
        });
        btnLeft.addEventListener('mouseout', function() {
            sliderLeft.setAttribute('src', "./assets/img/button-slider-left.svg");
        });
    },
    btnTrendingNoct: () => {
        btnRight.addEventListener('mouseover', function() {
            sliderRight.setAttribute('src', "./assets/img/btn-slider-right-hover-md-noc.svg");
        });
        btnRight.addEventListener('mouseout', function() {
            sliderRight.setAttribute('src', "./assets/img/button-slider-right-md-noct.svg");
        });

        btnLeft.addEventListener('mouseover', function() {
            sliderLeft.setAttribute('src', "./assets/img/btn-slider-left-hover-md-noc.svg");
        });
        btnLeft.addEventListener('mouseout', function() {
            sliderLeft.setAttribute('src', "./assets/img/button-slider-left-md-noct.svg");
        });
    },
    menuEvent: () => {
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
    }
};
