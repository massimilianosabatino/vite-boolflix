import { reactive } from "vue";

export const store = reactive({
    movies: [],
    tvShows: [],
    searchKey: '',
    flagList: ['it', 'en', 'de', 'es', 'fr', 'gb', 'us'],
    utility: {
        apiUrl: 'https://api.themoviedb.org/3',
        apiKey: '463212cfd2d8e0a3e060dfe843d0e801',
        getApiMovies: '/search/movie',
        getApiTvShows: '/search/tv',
        imgSize: 'w342',
        imgBaseUrl: 'http://image.tmdb.org/t/p/',
    }
});