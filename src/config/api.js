const API_DOMAIN = "https://newsapi.org/v2/top-headlines?country=";
const API_SEARCH_DOMAIN = "https://newsapi.org/v2/everything?q=";
const API_KEY = process.env.REACT_APP_API_KEY;

export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&category=${category}&apiKey=${API_KEY}`;
export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&apiKey=${API_KEY}`;
