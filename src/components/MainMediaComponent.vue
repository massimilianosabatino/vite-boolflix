<script>
// import axios from 'axios';
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
        }
    },
    computed: {
        allMediaDisplay(){
            const movie = this.store.movies.map(x => ({
                ...x,
                mediaType: 'movie'
            }));

            const tv = this.store.tvShows.map(x => ({
                ...x,
                mediaType: 'tv'
            }));

            return [...movie, ...tv]
        }
    }
}
</script>

<template>
    <h2>ALL MEDIA</h2>
    <div class="container-category">
        <CardComponent :info="media" v-for="media in allMediaDisplay" />
    </div>
    <div class="pagination" v-show="allMediaDisplay.length !== 0">
        <button type="button" @click="store.utility.page++">LOAD MORE</button>
    </div>
</template>

<style lang="scss" scoped>
@use './../assets/sass/sections/main-media';
</style>