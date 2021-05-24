/* Search Body */
btnCloseBody.addEventListener("click", (e) => {
    e.preventDefault();
    eventsSearch.resetInputValue();
    sectionResults.style.display = "none";
    cont = 0;
});
btn_search.addEventListener("click", () => {
    cont = 0;
    inputSearchHeader.value = input_search.value;
    containerResultsSearch.innerHTML = "";
    sectionResults.style.display = "";
    eventsSearch.resultSearch(input_search);
    sectionResults.classList.add("results-active");
});

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
if (screen.width > 950) {
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
} else {
    input_search.addEventListener("keyup", (e) => {
        if (e.key == "Escape") {
            btnCloseBody.click();
            input_search.blur();
        } else if (e.key == "Enter") {
            btn_search.click();
            input_search.blur();
        } else {
            eventsSearch.keyupFunctionEvent(autollenarBody, input_search.value);
        }
    });
}

btnViewMoreResult.addEventListener('click', () => {
    eventsSearch.resultSearch(input_search);
})

/* Search Header */
btnCloseHeader.addEventListener("click", (e) => {
    e.preventDefault();
    eventsSearch.resetInputValue();
    sectionResults.style.display = "none";
    cont = "0";
});

btnSearchHeader.addEventListener("click", () => {
    input_search.value = inputSearchHeader.value;
    btn_search.click();
});

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