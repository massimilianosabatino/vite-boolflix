<script>
    import axios from 'axios';
    import { store } from '../store';
    import MainMoviesComponent from './MainMoviesComponent.vue';
    import MainTvShowsComponent from './MainTvShowsComponent.vue';
    import MainMediaComponent from './MainMediaComponent.vue';
    export default {
        name: 'Main',
        data(){
            return {
                store,
            }
        },
        components: {
            MainMoviesComponent,
            MainTvShowsComponent,
            MainMediaComponent,
        },
        created(){
            //Get genres from API
            axios({
                baseURL: this.store.utility.apiUrl,
                url: this.store.utility.getGenresMovie,
                params:{
                    api_key: this.store.utility.apiKey,
                    language: 'it-IT',
                    query: this.store.searchKey,
                }
            }).then(response => {
                this.store.genresMovie = response.data.genres;
                // this.store.tempG.push(...this.store.genresMovie);
            }).then(response => this.store.tempG.push(...this.store.genresMovie));
            axios({
                baseURL: this.store.utility.apiUrl,
                url: this.store.utility.getGenresTv,
                params:{
                    api_key: this.store.utility.apiKey,
                    language: 'it-IT',
                    query: this.store.searchKey,
                }
            }).then(response => {
                this.store.genresTv = response.data.genres;
                // this.store.tempG.push(...this.store.genresTv);
            }).then(response => this.store.tempG.push(...this.store.genresTv));
        },
    }
</script>

<template>
    <main>
        <MainMediaComponent />
    </main>
</template>

<style lang="scss" scoped>
main {
    padding-left: 1.5625rem;
}
</style>