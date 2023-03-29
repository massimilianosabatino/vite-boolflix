import { reactive } from "vue";

export const store = reactive({
    movies: [],
    tvShows: [],
    searchKey: '',
    flagList: ['it', 'en', 'de', 'es', 'fr', 'gb', 'us'],
    utility: {
        apiKey: '463212cfd2d8e0a3e060dfe843d0e801',
        getApiMovies: 'https://api.themoviedb.org/3/search/movie?',
        getApiTvShows: 'https://api.themoviedb.org/3/search/tv?',
    }
});