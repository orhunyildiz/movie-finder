// api key: 3f14d0e50817377c6d546bdc3ad30b21
// base url: https://api.themoviedb.org/3

// fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

import { apiKey, baseUrl } from "../config";

export default class Search {
    constructor(keyword) {
        this.keyword = keyword;
    }

    async getResults() {
        const response = await fetch(`${baseUrl}/search/movie?api_key=${apiKey}&page=1&query=${this.keyword}`);
        this.data = await response.json();
    }
}