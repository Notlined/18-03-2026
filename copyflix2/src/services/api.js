import axios from 'axios';

const cfg = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '3397ebd7286392e73314a9073a477fac',
    imageBaseUrl: 'https://image.tmdb.org/t/p/w500',
};

const api = axios.create({
    baseUrl: cfg.baseUrl,
    params: { api_key: cfg.apiKey },
});

export { api, cfg };