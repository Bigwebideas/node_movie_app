const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b9f9aee56af1ab3f9390b747ab330f52';

const GET_POPULAR_MOVIES = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
const GET_POPULAR_TV_SHOWS = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`
const GET_POSTER_PATH = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/`;

module.exports = {
    API_URL,
    API_KEY,
    GET_POPULAR_MOVIES,
    GET_POSTER_PATH,
    GET_POPULAR_TV_SHOWS
}