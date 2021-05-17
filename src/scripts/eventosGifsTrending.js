// Se generan los Gifs desde la API en el DOM 
gifsTrending.classList.add("spinner");

let resultGifs = servicesGiphy.getTrendingGifs(12);

resultGifs.then(gifs => {
    for (let index = 0; index < gifs.data.length; index++) {
        let gif = {
            id: gifs.data[index].id,
            title: gifs.data[index].title,
            username: gifs.data[index].username,
            urlImg: gifs.data[index].images.fixed_height.url
        };
        /* console.log(gif); */
        gifsTrending.appendChild(createCardTrending(gif));
    }
    gifsTrending.classList.remove("spinner");
});

// Eventos Botones mostrar otros gifs

if (window.screen.width > 768) {
    let contadorPosiciones = 0;
    btnRight.addEventListener('click', function() {
        contadorPosiciones = contadorPosiciones + 1;
        btnLeft.style.display = "inline-block";
        setTimeout(function() { btnLeft.style.opacity = 1; }, 100);
        if (contadorPosiciones == 3) {
            btnRight.style.opacity = "0";
            setTimeout(function() { btnRight.style.display = "none"; }, 1000);
        }
        Array.prototype.forEach.call(cardsTrending, card => {
            if (card.style.right == "") { card.style.right = "0px"; }
            card.style.right = parseInt(card.style.right) + gifsTrending.offsetWidth + "px";
        });
    });

    btnLeft.addEventListener('click', function() {
        contadorPosiciones = contadorPosiciones - 1;
        btnRight.style.display = "inline-block";
        setTimeout(function() { btnRight.style.opacity = 1; }, 100);
        if (contadorPosiciones == 0) {
            btnLeft.style.opacity = "0";
            setTimeout(function() { btnLeft.style.display = "none"; }, 1000);
        }
        Array.prototype.forEach.call(cardsTrending, card => {
            if (card.style.right == "") { card.style.right = "0px"; }
            card.style.right = parseInt(card.style.right) - gifsTrending.offsetWidth + "px";
        });
    });
}