<script>
import axios from 'axios';
import { store } from './../store'

export default {
    name: 'Search',
    data(){
        return {
            store,
        }
    },
    methods: {
        getMovies(){
            //Utility variables
            const api = 'api_key=' + this.store.utility.apiKey;
            const lang = 'language=it-IT';
            
            //User search field
            const searchText = 'query=' + this.store.searchKey;
            const search = encodeURI(searchText);

            //Get Movies
            const urlMovie = this.store.utility.getApiMovies;
            axios.get(`${urlMovie}${api}&${lang}&${search}`)
                .then(response => this.store.movies = response.data.results);

            //Get Tv Shows
            const urlTv = this.store.utility.getApiTvShows;
            axios.get(`${urlTv}${api}&${lang}&${search}`)
                .then(response => this.store.tvShows = response.data.results);
        },
    }
}
</script>

<template>
    <input type="text" @keyup.enter="getMovies" v-model="store.searchKey">
    <button type="button" @click="getMovies">Cerca</button>
</template>

<style lang="scss" scoped>

</style>