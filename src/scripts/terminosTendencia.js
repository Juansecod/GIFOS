let api_key = 's2kC6KgZTvPtg4aWleAoQK73EjfNCSFi';
let cant_max = 5;

let fetchTrendingTerms = fetch(`https://api.giphy.com/v1/trending/searches?api_key=${api_key}`).then(response => response.json());
fetchTrendingTerms.then(response => createTrending(response));

/* Crea en el DOM terminos tendencia */
function createTrending(terms) {
    let text = terms.data;
    let i = 0;
    let parrafo = document.createElement('p');
    while (i < cant_max) {
        let a = document.createElement('a');
        let p = document.createElement('p');
        a.textContent = text[i];
        a.addEventListener('click', () => input_search.value = a.textContent);
        if (i == (cant_max - 1)) { p.textContent = ". "; } else { p.textContent = ", "; }
        if (i == 0) { firstLetterUppercaseOfElement(a); }
        parrafo.appendChild(a);
        parrafo.appendChild(p);

        i = i + 1;
    }
    search.appendChild(parrafo);
}

function firstLetterUppercaseOfElement(string) {
    string.textContent = string.textContent.charAt(0).toUpperCase() + string.textContent.slice(1);
}