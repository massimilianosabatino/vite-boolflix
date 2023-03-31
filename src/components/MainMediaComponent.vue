<script>
import { store } from '../store';
import CardComponent from './CardComponent.vue';

export default {
    name: 'Movies Component',
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
        <CardComponent :info="media" v-for="media in allMediaDisplay"/>
    </div>
</template>

<style lang="scss" scoped>
h2 {
    margin-bottom: .9375rem;
}
</style>