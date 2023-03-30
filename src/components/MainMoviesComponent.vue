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
}
</script>

<template>
    <h2>Movies</h2>
    <ul>
        <li v-for="movie in store.movies">
            <CardComponent :info="movie" />
        </li>
    </ul>
</template>

<style lang="scss" scoped>
</style>