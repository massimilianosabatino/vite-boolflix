<script>
    import { store } from '../store';
    import FlagInsert from './FlagInsert.vue';

    export default {
        name: 'Tv Show Component',
        components: {
            FlagInsert,
        },
        data(){
            return {
                store,
            }
        },
    }
</script>

<template>
    <ul>
        <li v-for="show in store.tvShows">
            {{ show.name }}
            <ul>
                <li>{{ show.original_name }}</li>
                <li class="lang-container"><FlagInsert :lang="show.original_language"/></li>
                <li>{{ show.vote_average }}</li>
            </ul>
        </li>
    </ul>
</template>

<style lang="scss" scoped>


</style>