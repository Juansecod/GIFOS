let cant_max_gifs = 12;
async function getTrendingGifs() {
    let data = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=${cant_max_gifs}`);
    let gifs = await data.json();
    return gifs;
}

let resultGifs = getTrendingGifs();
resultGifs.then(gifs => {
    for (let index = 0; index < gifs.data.length; index++) {
        let gif = gifs.data[index];
        gifsTrending.appendChild(createCardTrending(gif, index));
    }
});

function createCardTrending(gif, index) {
    let icons = createIcons();
    icons.id = "icons" + index;
    icons.style.display = "none";

    let text = createTextCard(gif.username, gif.title);
    text.id = "text" + index;
    text.style.display = 'none';

    let urlImg = gif.images.fixed_height.url;
    let img = document.createElement('div');
    img.style.backgroundImage = `url(${urlImg})`;
    img.appendChild(icons);
    img.appendChild(text);
    img.id = "img" + index;

    let cardTrending = document.createElement('li');
    cardTrending.className = "card-trending";
    cardTrending.appendChild(img);

    cardTrending.addEventListener('mouseout', () => {
        icons.style.display = 'none';
        text.style.display = 'none';
        img.style.backgroundImage = `url(${urlImg})`;
    });
    cardTrending.addEventListener('mouseover', () => {
        icons.style.display = '';
        text.style.display = '';
        if (body.classList == "dark") {
            img.style.backgroundImage = `linear-gradient(rgba(55, 56, 60, 0.7), rgba(55, 56, 60, 0.7)), url(${urlImg})`;
        } else {
            img.style.backgroundImage = `linear-gradient(rgba(87, 46, 229, 0.7), rgba(87, 46, 229, 0.7)), url(${urlImg})`;
        }
    });
    return cardTrending;
}

function createIcons() {
    let ulIcons = document.createElement('ul');
    ulIcons.className = "icons";

    for (let i = 0; i < 3; i++) {
        let li = document.createElement('li');
        let em = document.createElement('em');
        switch (i) {
            case 0:
                em.className = "far fa-heart";
                em.id = "favorite";
                break;
            case 1:
                em.className = "fas fa-download";
                em.id = "download";
                break;
            case 2:
                em.className = "fas fa-expand-alt";
                em.id = "full-screen";
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