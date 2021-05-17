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
        let data = await fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=${configDev.apiKey}&q=${text}`);
        let recomendation = await data.json();
        return recomendation;
    }
};