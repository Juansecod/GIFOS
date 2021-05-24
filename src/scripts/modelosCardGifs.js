function createCardTrending(gif) {
    let icons = createIcons(gif);
    icons.style.display = "none";

    let text = createTextCard(gif.username, gif.title);
    text.style.display = 'none';

    let urlImg = gif.urlImg;
    let img = document.createElement('div');
    img.style.backgroundImage = `url(${urlImg})`;
    img.appendChild(icons);
    img.appendChild(text);

    let cardTrending = document.createElement('li');
    cardTrending.id = gif.id;
    cardTrending.className = "card-trending";
    cardTrending.appendChild(img);
    if (screen.width > 760) {
        hoverDesktopCard(cardTrending, urlImg, icons, text, img);
    }
    return cardTrending;
}

function createCardResults(gif) {
    let icons = createIcons(gif);


    icons.style.float = "right";
    icons.style.listStyle = "none";
    icons.style.display = "flex";
    icons.style.width = "40%";
    icons.style.height = "auto";
    icons.style.maxHeight = "40px";
    icons.style.maxWidth = "142.797px";
    icons.style.position = "relative";
    icons.style.top = "-10%";
    icons.style.display = "none";


    let text = createTextCard(gif.username, gif.title);
    text.style.display = 'none';


    /* let urlImg = gif.images.fixed_height.url; */
    let urlImg = gif.urlImg;
    let img = document.createElement('div');
    img.style.backgroundImage = `url(${urlImg})`;
    img.appendChild(icons);
    img.appendChild(text);

    if (screen.width > 760) {
        hoverDesktopCard(img, urlImg, icons, text, img);
    }

    img.style.width = "357px";
    img.style.height = "275px";
    img.style.display = "flex";

    img.style.backgroundSize = "cover";
    img.style.flexWrap = "wrap";
    img.style.alignContent = "space-around";
    img.style.justifyContent = "flex-end";
    img.style.backgroundSize = "100% 100%";
    return img;
}

function hoverDesktopCard(card, url, icons, text, img) {
    card.addEventListener('mouseout', () => {
        icons.style.display = 'none';
        text.style.display = 'none';
        img.style.backgroundImage = `url(${url})`;
    });
    card.addEventListener('mouseover', () => {
        icons.style.display = '';
        text.style.display = '';
        if (body.classList == "dark") {
            img.style.backgroundImage = `linear-gradient(rgba(55, 56, 60, 0.7), rgba(55, 56, 60, 0.7)), url(${url})`;
        } else {
            img.style.backgroundImage = `linear-gradient(rgba(87, 46, 229, 0.7), rgba(87, 46, 229, 0.7)), url(${url})`;
        }
    });
}

function createIcons(gif) {
    let ulIcons = document.createElement('ul');
    ulIcons.className = "icons";

    for (let i = 0; i < 3; i++) {
        let li = document.createElement('li');
        let em = document.createElement('em');
        switch (i) {
            /* Boton Favoritos */
            case 0:
                let gifsFavs = JSON.parse(localStorage.getItem("GifsFavs"));
                let filter = gifsFavs.filter(function(gifJson) { return gifJson.id == gif.id; });
                if (filter.length == 0) {
                    eventsIcons.eventsFavsAdd(em, gif, li);
                } else {
                    eventsIcons.eventsFavsRemove(em, gif, li);
                }
                li.addEventListener("mouseout", () => {
                    let gifsFavsUpdate = JSON.parse(localStorage.getItem("GifsFavs"));
                    let filterUpdate = gifsFavsUpdate.filter(function(gifJson) { return gifJson.id == gif.id; });
                    if (filterUpdate.length == 0) {
                        eventsIcons.eventsFavsAdd(em, gif, li);
                    } else {
                        eventsIcons.eventsFavsRemove(em, gif, li);
                    }
                });
                break;
                /* Boton Fullscreen */
            case 1:
                em.className = "fas fa-download";
                li.addEventListener("click", () => eventsIcons.downloadGifos(gif));
                break;
                /* Boton Download */
            case 2:
                em.className = "fas fa-expand-alt";
                break;
        }
        li.appendChild(em);
        ulIcons.appendChild(li);
    }
    return ulIcons;
}

const eventsIcons = {
    addFavGifos: (obj) => {
        let gifsFavs = localStorage.getItem("GifsFavs");
        gifsFavs = JSON.parse(gifsFavs);
        let results = gifsFavs.filter(function(gifJson) { return gifJson.id == obj.id; });
        if (results.length == 0) {
            gifsFavs.push(obj);
            localStorage.setItem('GifsFavs', JSON.stringify(gifsFavs));
        }
    },
    removeFavs: (obj) => {
        let data = JSON.parse(localStorage.getItem('GifsFavs'));
        data.forEach((gifJson, index, data) => gifJson.id === obj.id ? data.splice(index, 1) : null);
        localStorage.setItem('GifsFavs', JSON.stringify(data));
    },
    eventsFavsAdd: (em, gif, li) => {
        em.className = "far fa-heart";
        em.addEventListener("mouseout", () => {
            em.classList = "";
            em.className = "far fa-heart";
        });
        em.addEventListener("mouseover", () => {
            em.classList = "";
            em.className = "fas fa-heart";
        });
        li.addEventListener('click', () => {
            eventsIcons.addFavGifos(gif);
            em.classList = "";
            em.className = "fas fa-heart";
        });
    },
    eventsFavsRemove: (em, gif, li) => {
        em.className = "fas fa-heart";
        em.addEventListener("mouseout", () => {
            em.classList.remove("fas", "fa-heart-broken");
            em.classList.add("fas", "fa-heart");
        });
        em.addEventListener("mouseover", () => {
            em.classList.remove("fas", "fa-heart");
            em.classList.add("fas", "fa-heart-broken");
        });
        li.addEventListener('click', () => {
            eventsIcons.removeFavs(gif);
            em.classList = "";
            em.classList.add("far", "fa-heart");
        });
    },
    downloadGifos: async(obj) => {
        const downloadUrl = `https://media.giphy.com/media/${obj.id}/giphy.gif`;
        const fetchedGif = fetch(downloadUrl);
        const blobGif = (await fetchedGif).blob();
        const urlGif = URL.createObjectURL(await blobGif);
        const saveImg = document.createElement("a");
        saveImg.href = urlGif;
        saveImg.download = obj.title;
        saveImg.style = 'display: "none"';
        document.body.appendChild(saveImg);
        saveImg.click();
        document.body.removeChild(saveImg);
    }

};

function createTextCard(user, title) {
    let pUser = document.createElement('p');
    if (user == "") {
        pUser.textContent = "anonymous";
    } else {
        pUser.textContent = user;
    }
    let h2Title = document.createElement('h2');
    h2Title.textContent = title;
    let text = document.createElement('span');
    text.className = "text";
    text.appendChild(pUser);
    text.appendChild(h2Title);
    return text;
}