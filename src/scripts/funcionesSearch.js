let sizeHeight = (container, cont) => {
    switch (cont) {
        case 1:
            container.style.height = "47px";
            break;
        case 2:
            container.style.height = "76px";
            break;
        case 3:
            container.style.height = "105px";
            break;
        case 4:
            container.style.height = "134px";
            break;
        case 5:
            container.style.height = "163px";
            break;
        default:
            container.style.height = "0px";
            break;
    }
};
const eventsSearch = {
    appendContentAutocomplete: (container, text, cont = 5) => {
        sizeHeight(container, cont);
        let icono = document.createElement("em");
        icono.classList.add("fas", "fa-search");
        let textContent = document.createElement("text");
        textContent.textContent = text;
        let div = document.createElement("div");
        div.appendChild(icono);
        div.appendChild(textContent);
        div.addEventListener('click', () => {
            input_search.value = text;
            inputSearchHeader.value = text;
            if (container == autollenarBody) {
                btn_search.click();
            } else {
                btnSearchHeader.click();
            }
        });
        container.appendChild(div);
    },
    addClassActive: (container) => container.classList.add("active-input"),
    removeClassActive: (container) => container.classList.remove("active-input"),
    insertContentAutocomplete: (container, value) => {
        let autollenarContent = servicesGiphy.getAutocompleteSearch(value);
        autollenarContent.then(response => {
            if (response.data.length != 0) {
                response.data.forEach(info => eventsSearch.appendContentAutocomplete(container, info.name, response.data.length));
            } else { container.style.height = "0px"; }
        });
    },
    keyupFunctionEvent: (container, value) => {
        while (container.childNodes.length != 0) {
            const content = container.childNodes;
            content.forEach(data => data.remove());
        }
        if (value == "") {
            let defaultContent = servicesGiphy.getTrendingTerms();
            defaultContent.then(response => {
                let i = 1;
                for (i; i < 6; i++) {
                    let text = response.data[i + 5];
                    eventsSearch.appendContentAutocomplete(container, text);
                }
            });
        } else {
            eventsSearch.insertContentAutocomplete(container, value);
        }
    },
    resetInputValue: () => {
        input_search.value = "";
        inputSearchHeader.value = "";
    },
    resultSearch: (input) => {
        if (input.value != "") {
            let resultsSearch = servicesGiphy.getSearchResults(input.value);
            resultsSearch
                .then(resolve => {
                    if (resolve.data.length != 0) {
                        titleSearchResults.textContent = input.value;
                        containerResultsSearch.classList.add("view-gifs");
                        btnViewMoreResult.style.display = "inline-block";
                        resolve.data.forEach((info, index) => {
                            let gif = {
                                id: info.id,
                                title: info.title,
                                username: info.username,
                                urlImg: info.images.fixed_height.url
                            };
                            if (index < 12) {
                                let div = createCardResults(gif);
                                containerResultsSearch.appendChild(div);
                                cont = cont + 1;
                            }
                            return cont;
                        });
                    } else {
                        titleSearchResults.textContent = "Lorem Ipsum";
                        containerResultsSearch.classList.remove("view-gifs");
                        btnViewMoreResult.style.display = "none";
                        containerResultsSearch.innerHTML = `<img src="./assets/img/icon-busqueda-sin-resultado.svg " alt="Not Found! ">
                        <h3>Intenta con otra búsqueda.</h3>`;
                    }
                })
                .catch(err => console.error(err));
        } else {
            console.log("null");
        }
    }
};