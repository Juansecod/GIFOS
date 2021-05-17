const eventsSearch = {
    appendContentAutocomplete: (container, text) => {
        container.style.height = "auto";
        let icono = document.createElement("em");
        icono.classList.add("fas", "fa-search");
        let textContent = document.createElement("text");
        textContent.textContent = text;
        let div = document.createElement("div");
        div.appendChild(icono);
        div.appendChild(textContent);
        container.appendChild(div);
    },
    addClassActive: (container) => container.classList.add("active-input"),
    removeClassActive: (container) => container.classList.remove("active-input")
};

/* let content = servicesGiphy.getAutocompleteSearch("fu");
content
    .then( data => data.data.forEach( result => eventsSearch.appendContentAutocomplete(autollenarBody, result.name))); */

/* Search Body */
input_search.addEventListener("focus", () => {
    if (input_search.value == "" && autollenarBody.childNodes.length == 0) {
        let defaultContent = servicesGiphy.getTrendingTerms();
        defaultContent.then(response => {
            let i = 1;
            for (i; i < 6; i++) {
                let text = response.data[i];
                eventsSearch.appendContentAutocomplete(autollenarBody, text);
            }
        });
    }
    eventsSearch.addClassActive(containerInput);
});

input_search.addEventListener("blur", () => {
    eventsSearch.removeClassActive(containerInput);
});

/* Search Header */
inputSearchHeader.addEventListener("focus", () => {
    if (input_search.value == "" && autollenarHeader.childNodes.length == 0) {
        let defaultContent = servicesGiphy.getTrendingTerms();
        defaultContent
            .then(response => {
                let i = 1;
                for (i; i < 6; i++) {
                    let text = response.data[i];
                    eventsSearch.appendContentAutocomplete(autollenarHeader, text);
                }
            });
    }
    eventsSearch.addClassActive(searchHeader);
});

inputSearchHeader.addEventListener("blur", () => {
    eventsSearch.removeClassActive(searchHeader);
});