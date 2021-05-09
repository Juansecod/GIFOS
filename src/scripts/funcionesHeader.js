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
    if (activeId == "a-favs") {
        containerFavoritos.style.opacity = 0;
        setTimeout(() => {
            containerFavoritos.style.display = "none";
            container.style.display = "flex";
        }, 1000);
        setTimeout(() => {
            container.style.opacity = 1;
        }, 1250);
    } else {
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
};