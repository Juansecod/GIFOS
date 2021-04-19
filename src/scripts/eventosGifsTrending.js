/* Eventos para mostrar los iconos */
for (let index = 0; index < cardsTrending.length; index++) {
    let icons = document.getElementById('icons' + index);
    let text = document.getElementById('text' + index);
    icons.style.display = 'none';
    text.style.display = 'none';
    cardsTrending[index].addEventListener('mouseout', () => {
        icons.style.display = 'none';
        text.style.display = 'none';
    });
    cardsTrending[index].addEventListener('mouseover', () => {
        icons.style.display = '';
        text.style.display = '';
    });
}
let cant_max_gifs = 10;
async function getTrendingGifs() {
    let data = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=${cant_max_gifs}`);
    let gifs = await data.json();
    return gifs;
}
let resultGifs = getTrendingGifs();
resultGifs.then(gifs => gifs.data.forEach(gif => console.info(gif)));