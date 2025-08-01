import { reactive } from "vue";

export const store = reactive({
    movies: [],
    tvShows: [],
    genresMovie: [],
    genresTv: [],
    tempG: [],
    genres: [],
    searchKey: '',
    filterKey: '',
    filterMedia: '',
    flagList: ['it', 'en', 'de', 'es', 'fr', 'gb', 'us'],
    utility: {
        apiUrl: 'https://api.themoviedb.org/3',
        apiKey: 'API_KEY_FOR_THEMOVIEDB',
        getApiMovies: '/search/movie',
        getApiTvShows: '/search/tv',
        getGenresMovie: '/genre/movie/list',
        getGenresTv: '/genre/tv/list',
        imgSize: 'w342',
        imgBaseUrl: 'http://image.tmdb.org/t/p/',
        page: 1,
    }
});
