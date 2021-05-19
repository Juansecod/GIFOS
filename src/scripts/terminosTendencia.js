let cantTerms = 5;

/* Crea en el DOM terminos tendencia */
function createTrending(terms) {
    let text = terms.data;
    let i = 0;
    let parrafo = document.createElement('p');
    while (i < cantTerms) {
        let a = document.createElement('a');
        let p = document.createElement('p');
        a.textContent = text[i];
        a.addEventListener('click', () => {
            input_search.value = a.textContent;
            btn_search.click();
        });
        if (i == (cantTerms - 1)) { p.textContent = ". "; } else { p.textContent = ", "; }
        if (i == 0) { firstLetterUppercaseOfElement(a); }
        parrafo.appendChild(a);
        parrafo.appendChild(p);

        i = i + 1;
    }
    sectionSearch.appendChild(parrafo);
}

function firstLetterUppercaseOfElement(string) {
    string.textContent = string.textContent.charAt(0).toUpperCase() + string.textContent.slice(1);
}

let resultTerms = servicesGiphy.getTrendingTerms();
resultTerms.then(terms => createTrending(terms));