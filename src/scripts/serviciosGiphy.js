const configDev = {
    documentacion: 'https://developers.giphy.com/docs/api',
    url: 'https://api.giphy.com/v1/',
    apiKey: 's2kC6KgZTvPtg4aWleAoQK73EjfNCSFi'
};

const servicesGiphy = {
    getTrendingGifs: async(cantMax = 5) => {
        let data = await fetch(`${configDev.url}gifs/trending?api_key=${configDev.apiKey}&limit=${cantMax}`);
        let gifs = await data.json();
        return gifs;
    },
    getTrendingTerms: async() => {
        let data = await fetch(`${configDev.url}trending/searches?api_key=${configDev.apiKey}`);
        let terms = await data.json();
        return terms;
    },
    getAutocompleteSearch: async(text) => {
        let data = await fetch(`${configDev.url}gifs/search/tags?api_key=${configDev.apiKey}&q=${text}`);
        let recomendation = await data.json();
        return recomendation;
    },
    getSearchResults: async(text, cantGifs = 12) => {
        let data = await fetch(`${configDev.url}gifs/search?api_key=${configDev.apiKey}&q=${text}&limit=${cantGifs}&offset=${cont}`);
        let result = await data.json();
        return result;
    },
    guardarGIFO: async(blob) => {
        let formData = new FormData();
        const usuario = "juansecod";
        formData.append('api_key', configDev.apiKey);
        formData.append('username', usuario);
        formData.append('file', blob, 'myGif.gif');
        formData.append('tags', 'mygifo');

        const queryCargarGifo = `https://upload.giphy.com/v1/gifs`;
        await fetch(encodeURI(queryCargarGifo), {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(async(response) => {
                let MisGifos = JSON.parse(localStorage.getItem('MisGifos'));
                const id = response.data.id;
                let dataGif = await servicesGiphy.getGifById(id);
                dataGif = dataGif.data;
                dataGif = {
                    id: dataGif.id,
                    title: "Mi Gif " + (MisGifos.length + 1),
                    urlImg: dataGif.images.fixed_height.url,
                    username: dataGif.username

                };
                MisGifos.push(dataGif);
                localStorage.setItem('MisGifos', JSON.stringify(MisGifos));
                this.video.srcObject.getTracks()[0].stop();
                const nodesImgGif = imgGif.children;
                for (i = 0; i < nodesImgGif.length; i++) {
                    nodesImgGif[i].style.display = "";
                }
                document.querySelector(".icons").style.display = "";
                document.querySelector(".fa-check").style.display = "";
                const iconsChilds = document.querySelector(".icons").childNodes;
                listIcons = [];
                iconsChilds.forEach((li) => {
                    if (li.nodeName != "#text") {
                        listIcons.push(li);
                    }
                });
                listIcons.forEach((li) => {
                    switch (li.childNodes[0].classList.value) {
                        case "fas fa-download":
                            li.addEventListener("click", () => {
                                eventsIcons.downloadGifos(response.data);
                            });
                            break;
                        case "fas fa-link":
                            li.addEventListener("click", () => {
                                Object.assign(document.createElement('a'), {
                                    target: '_blank',
                                    href: `https://giphy.com/gifs/${id}`,
                                }).click();
                            });
                            break;
                    }
                });
                imgGif.classList.remove("spinner");
            });
    },
    getGifById: async(id) => {
        let data = await fetch(`${configDev.url}gifs/${id}?api_key=${configDev.apiKey}`)
        let result = await data.json();
        return result;
    }
};