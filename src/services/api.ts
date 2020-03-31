import axios from 'axios';

const api = axios.create({baseURL: 'https://api.scryfall.com/'});

export default api;
