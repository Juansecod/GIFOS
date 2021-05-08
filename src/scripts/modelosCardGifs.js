function createCardTrending(gif) {
    let icons = createIcons(gif);
    icons.style.display = "none";

    let text = createTextCard(gif.username, gif.title);
    text.style.display = 'none';

    /* let urlImg = gif.images.fixed_height.url; */
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
            case 0:
                em.className = "far fa-heart";
                /* em.id = "favorite"; */
                /* li.addEventListener('click', function() { console.log(gif); }); */
                break;
            case 1:
                em.className = "fas fa-download";
                /* em.id = "download"; */
                break;
            case 2:
                em.className = "fas fa-expand-alt";
                /* em.id = "full-screen"; */
                break;
        }
        li.appendChild(em);
        ulIcons.appendChild(li);
    }

    return ulIcons;
}

function createTextCard(user, title) {
    let pUser = document.createElement('p');
    (user == "") ? pUser.textContent = "anonymous": pUser.textContent = user;
    let h2Title = document.createElement('h2');
    h2Title.textContent = title;
    let text = document.createElement('span');
    text.className = "text";
    text.appendChild(pUser);
    text.appendChild(h2Title);
    return text;
}

/* function addFavorites(gif) {
    if (localStorage.getItem('favorites') == null) {
        localStorage.setItem('favorites', [gif]);
        console.log(localStorage.getItem('favorites'));
    } else {
        let localStorageFavs = localStorage.getItem('favorites');
        console.log(localStorageFavs);
    }
}
let gifTest = {
    id: 1,
    title: "Test",
    username: "Test",
    urlImg: "test.jpg"
};
addFavorites(gifTest); */