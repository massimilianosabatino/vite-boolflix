<script>
import axios from 'axios';
import { store } from '../store';
import CardComponent from './CardComponent.vue';

export default {
    name: 'Media Component',
    components: {
        CardComponent,
    },
    data() {
        return {
            store,
            page: 1,
        }
    },
    methods: {
        morePage(){
            this.page++;
            //Get Movies
            axios({
                baseURL: this.store.utility.apiUrl,
                url: this.store.utility.getApiMovies,
                params:{
                    api_key: this.store.utility.apiKey,
                    language: 'it-IT',
                    query: this.store.searchKey,
                    page: this.page,
                }
            }).then(response => {
                const merger = response.data.results;
                this.store.movies.push(...merger);
            })

            //Get Tv Shows
            axios({
                baseURL: this.store.utility.apiUrl,
                url: this.store.utility.getApiTvShows,
                params:{
                    api_key: this.store.utility.apiKey,
                    language: 'it-IT',
                    query: this.store.searchKey,
                    page: this.page,
                }
            }).then(response => {
                const merger = response.data.results;
                this.store.tvShows.push(...merger);
            });
        }
    },
    computed: {
        allMediaDisplay(){
            const movie = this.store.movies.map(x => ({
                ...x,
                // mediaType: 'movie'
            }));

            const tv = this.store.tvShows.map(x => ({
                ...x,
                // mediaType: 'tv'
            }));

            return [...movie, ...tv]
        }
    }
}
</script>

<template>
    <h2>ALL MEDIA</h2>
    <div class="container-category">
        <CardComponent :info="media" v-for="media in allMediaDisplay"/>
    </div>
    <div class="pagination">
        <button type="button" @click="morePage">LOAD MORE</button>
    </div>
</template>

<style lang="scss" scoped>
@use './../assets/sass/sections/main-media'
</style>