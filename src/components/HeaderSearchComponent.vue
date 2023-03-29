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
            const api = 'api_key=' + this.store.utility.apiKey;
            const lang = 'language=it-IT';
            const searchText = 'query=' + this.store.searchKey;
            const search = encodeURI(searchText);
            const url = this.store.utility.getApiMovies;
            console.log(`${url}${api}&${lang}&${search}`)
            axios.get(`${url}${api}&${lang}&${search}`)
                .then(response => this.store.movies = response.data.results);
                console.log(this.store.movies)
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