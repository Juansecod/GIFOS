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
/* var arrayTerms = []; */
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
        container.appendChild(div);
        /* arrayTerms.push(text); */
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
                    let text = response.data[i];
                    eventsSearch.appendContentAutocomplete(container, text);
                }
            });
        } else {
            eventsSearch.insertContentAutocomplete(container, value);
        }
    },
    /*  resetInputValue: () => input_search.value = "" */
};

function resetInputsValue() {
    input_search.value = "";
    inputSearchHeader.value = "";
}
/* Search Body */

btnCloseBody.addEventListener("click", () => resetInputsValue());
btn_search.addEventListener("click", () => console.log(input_search.value));

input_search.addEventListener("focus", () => {
    if (input_search.value == "") {
        let defaultContent = servicesGiphy.getTrendingTerms();
        defaultContent.then(response => {
            let i = 1;
            for (i; i < 6; i++) {
                let text = response.data[i];
                eventsSearch.appendContentAutocomplete(autollenarBody, text);
            }
        });
    } else {
        eventsSearch.insertContentAutocomplete(autollenarBody, input_search.value);
    }
    eventsSearch.addClassActive(containerInput);
    btn_search.click();
});

input_search.addEventListener("blur", () => {
    while (autollenarBody.childNodes.length != 0) {
        const content = autollenarBody.childNodes;
        content.forEach(data => data.remove());
    }
    autollenarBody.style.height = "0px";
    eventsSearch.removeClassActive(containerInput);
});



input_search.addEventListener("keyup", (e) => {
    if (window.screen.width > 950) {
        if (e.key.length == 1 || e.key == "Backspace") {
            eventsSearch.keyupFunctionEvent(autollenarBody, input_search.value);
        } else if (e.key == "Escape") {
            btnCloseBody.click();
            input_search.blur();
        } else if (e.key == "Enter") {
            btn_search.click();
            input_search.blur();
        }
    } else {
        eventsSearch.keyupFunctionEvent(autollenarBody, input_search.value);
    }
});

/* Search Header */
btnCloseHeader.addEventListener("click", () => resetInputsValue());
btnSearchHeader.addEventListener("click", () => console.log(inputSearchHeader.value));

inputSearchHeader.addEventListener("focus", () => {
    if (inputSearchHeader.value == "") {
        let defaultContent = servicesGiphy.getTrendingTerms();
        defaultContent
            .then(response => {
                let i = 1;
                for (i; i < 6; i++) {
                    let text = response.data[i];
                    eventsSearch.appendContentAutocomplete(autollenarHeader, text);
                }
            });
    } else {
        eventsSearch.insertContentAutocomplete(autollenarHeader, inputSearchHeader.value);
    }
    eventsSearch.addClassActive(searchHeader);
});

inputSearchHeader.addEventListener("blur", () => {
    while (autollenarHeader.childNodes.length != 0) {
        const content = autollenarHeader.childNodes;
        content.forEach(data => data.remove());
    }
    autollenarHeader.style.height = "0px";
    eventsSearch.removeClassActive(searchHeader);
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