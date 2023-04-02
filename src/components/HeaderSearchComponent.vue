<script>
import axios from 'axios';
import { store } from './../store'


export default {
    name: 'Search',
    inheritAttrs: false, //Disabling Attribute Inheritance - for warn in console because have class on component
    data(){
        return {
            store,
        }
    },
    methods: {
        getMedia(){
            this.store.utility.page = 1;
            this.callApi();
        },
        callApi(){
            //Get Movies
            axios({
                baseURL: this.store.utility.apiUrl,
                url: this.store.utility.getApiMovies,
                params:{
                    api_key: this.store.utility.apiKey,
                    language: 'it-IT',
                    query: this.store.searchKey,
                    page: this.store.utility.page,
                }
            }).then(response => {
                if(this.store.utility.page === 1){
                    this.store.movies = response.data.results
                }else{
                    const merger = response.data.results;
                    store.movies.push(...merger);
                }
            });

            //Get Tv Shows
            axios({
                baseURL: this.store.utility.apiUrl,
                url: this.store.utility.getApiTvShows,
                params:{
                    api_key: this.store.utility.apiKey,
                    language: 'it-IT',
                    query: this.store.searchKey,
                    page: this.store.utility.page,
                }
            }).then(response => {
                if(this.store.utility.page === 1){
                    this.store.tvShows = response.data.results
                }else{
                    const merger = response.data.results;
                    store.tvShows.push(...merger);
                }
            });
        },
    },
    watch: {
        'store.utility.page'(num) {
            if(num > 1) {
                this.callApi();
            }
        }
    }
}
</script>

<template @morePage="addPage">
    <input type="text" @keyup.enter="getMedia" v-model="store.searchKey">
    <button type="button" @click="getMedia">Cerca</button>
    <select name="genres" id="genres-select" v-model="store.filterKey">
        <option value="" default>Filter by genres</option>
        <template v-for="genre in store.genres">
            <option :value="genre.id">{{ genre.name }}</option>
        </template>
    </select> 
</template>

<style lang="scss" scoped>
@use './../assets/sass/components/search';
</style>