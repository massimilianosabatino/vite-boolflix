<script>
    import { store } from '../store';

    export default {
        name: 'Movies Component',
        data(){
            return {
                store,
            }
        },
    }
</script>

<template>
    <ul>
        <li v-for="movie in store.movies">
            {{ movie.title }}
            <ul>
                <li>{{ movie.original_title }}</li>
                <li>{{ movie.original_language }}</li>
                <li>{{ movie.vote_average }}</li>
            </ul>
        </li>
    </ul>
</template>

<style lang="scss" scoped>

</style>