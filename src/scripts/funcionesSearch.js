const eventsSearch = {
    appendContent: (container, text) => {
        let icono = document.createElement("em");
        icono.classList.add("fas", "fa-search");
        let textContent = document.createElement("text");
        textContent.textContent = text;
        let div = document.createElement("div");
        div.appendChild(icono);
        div.appendChild(textContent);
        container.appendChild(div);
    }
};