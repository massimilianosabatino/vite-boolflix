<script>
import axios from 'axios';
import { store } from './../store'
import { ITERATE_KEY } from '@vue/reactivity';

export default {
    name: 'Search',
    inheritAttrs: false, //Disabling Attribute Inheritance - for warn in console because have class on component
    data(){
        return {
            store,
        }
    },
    methods: {
        getMovies(){
            //Get Movies
            axios({
                baseURL: this.store.utility.apiUrl,
                url: this.store.utility.getApiMovies,
                params:{
                    api_key: this.store.utility.apiKey,
                    language: 'it-IT',
                    query: this.store.searchKey,
                }
            }).then(response => this.store.movies = response.data.results);

            //Get Tv Shows
            axios({
                baseURL: this.store.utility.apiUrl,
                url: this.store.utility.getApiTvShows,
                params:{
                    api_key: this.store.utility.apiKey,
                    language: 'it-IT',
                    query: this.store.searchKey,
                }
            }).then(response => this.store.tvShows = response.data.results);
        }
    }
}
</script>

<template>
    <input type="text" @keyup.enter="getMovies" v-model="store.searchKey">
    <button type="button" @click="getMovies">Cerca</button>
</template>

<style lang="scss" scoped>
@use './../assets/sass/components/search';
</style>