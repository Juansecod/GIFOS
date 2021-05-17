const configDev = {
    documentacion: 'https://developers.giphy.com/docs/api',
    url: 'https://api.giphy.com/v1/',
    apiKey: 's2kC6KgZTvPtg4aWleAoQK73EjfNCSFi'
};

const servicesGiphy = {
    getTrendingGifs: async(cantMax) => {
        let data = await fetch(`${configDev.url}gifs/trending?api_key=${configDev.apiKey}&limit=${cantMax}`);
        let gifs = await data.json();
        return gifs;
    },
    getTrendingTerms: async() => {
        let data = await fetch(`${configDev.url}trending/searches?api_key=${configDev.apiKey}`);
        let terms = await data.json();
        return terms;
    }
};