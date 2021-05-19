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
        textContent.addEventListener('click', () => {
            input_search.value = textContent.textContent;
            inputSearchHeader.value = textContent.textContent;
            btn_search.click();
        });
        let div = document.createElement("div");
        div.appendChild(icono);
        div.appendChild(textContent);
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
    }
};

/* Search Body */

btnCloseBody.addEventListener("click", (e) => {
    e.preventDefault();
    eventsSearch.resetInputValue();
});
btn_search.addEventListener("click", () => console.log(input_search.value));

input_search.addEventListener("focus", () => {
    if (input_search.value == "") {
        let defaultContent = servicesGiphy.getTrendingTerms();
        defaultContent.then(response => {
            let i = 1;
            for (i; i < 6; i++) {
                let text = response.data[i + 5];
                eventsSearch.appendContentAutocomplete(autollenarBody, text);
            }
        });
    } else {
        eventsSearch.insertContentAutocomplete(autollenarBody, input_search.value);
    }
    sizeHeight(autollenarBody, autollenarBody.childElementCount);
    eventsSearch.addClassActive(containerInput);
});

input_search.addEventListener("blur", () => {
    setTimeout(() => {
        autollenarBody.style.height = "0px";
        eventsSearch.removeClassActive(containerInput);
        while (autollenarBody.childNodes.length != 0) {
            const content = autollenarBody.childNodes;
            content.forEach(data => data.remove());
        }
    }, 100);
});

input_search.addEventListener("keyup", (e) => {

    if (e.key.length == 1 || e.key == "Backspace") {
        eventsSearch.keyupFunctionEvent(autollenarBody, input_search.value);
    } else if (e.key == "Escape") {
        btnCloseBody.click();
        input_search.blur();
    } else if (e.key == "Enter") {
        btn_search.click();
        input_search.blur();
    }

});

/* Search Header */
btnCloseHeader.addEventListener("click", (e) => {
    eventsSearch.resetInputValue();
});

btnSearchHeader.addEventListener("click", () => console.log(inputSearchHeader.value));
btnCloseHeader.addEventListener("click", () => eventsSearch.resetInputValue());

inputSearchHeader.addEventListener("focus", () => {
    if (inputSearchHeader.value == "") {
        let defaultContent = servicesGiphy.getTrendingTerms();
        defaultContent
            .then(response => {
                let i = 1;
                for (i; i < 6; i++) {
                    let text = response.data[i + 5];
                    eventsSearch.appendContentAutocomplete(autollenarHeader, text);
                }
            });
    } else {
        eventsSearch.insertContentAutocomplete(autollenarHeader, inputSearchHeader.value);
    }
    sizeHeight(autollenarHeader, autollenarHeader.childElementCount);
    eventsSearch.addClassActive(searchHeader);
});

inputSearchHeader.addEventListener("blur", () => {
    setTimeout(() => {
        autollenarHeader.style.height = "0px";
        eventsSearch.removeClassActive(searchHeader);
        while (autollenarHeader.childNodes.length != 0) {
            const content = autollenarHeader.childNodes;
            content.forEach(data => data.remove());
        }
    }, 100);
});

inputSearchHeader.addEventListener("keyup", async(e) => {
    if (e.key.length == 1 || e.key == "Backspace") {
        eventsSearch.keyupFunctionEvent(autollenarHeader, inputSearchHeader.value);
    } else if (e.key == "Escape") {
        btnCloseHeader.click();
        inputSearchHeader.blur();
    } else if (e.key == "Enter") {
        btnSearchHeader.click();
        inputSearchHeader.blur();
    }
});