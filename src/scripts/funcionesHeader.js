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

let ocultarContainer = (active, container) => {
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


// Objeto que contiene las funciones de la navbar
const events = {
    favorites: () => {
        if (active() != null) {
            ocultarContainer(active, containerFavoritos);
            active().classList.remove("active");
        } else {
            ocultarSearch(containerFavoritos);
        }
        let aFav = document.getElementById("a-favs");
        aFav.classList.add("active");
    },
    search: () => {
        if (active() != null) {
            ocultarContainer(active, search);
            active().classList.remove("active");
        }
    },
    myGifs: () => {
        if (active() != null) {
            ocultarContainer(active, containerMyGifs);
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
            sliderLeft.setAttribute('src', "./assets/img/Button-Slider-left-hover.svg");
        });
        btnLeft.addEventListener('mouseout', function() {
            sliderLeft.setAttribute('src', "./assets/img/Button-Slider-left.svg");
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
    }
};