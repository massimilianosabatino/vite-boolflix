<script>
    import { store } from '../store';
    import FlagInsert from './FlagInsert.vue';
    import CountryFlag from 'vue-country-flag-next'



    export default {
        name: 'Movies Component',
        components: {
            FlagInsert,
            CountryFlag,
        },
        data(){
            return {
                store,
            }
        },
       methods: {
            convertLangIso(movie){
                switch (movie) {
                    case 'en':
                        return 'gb'
                    case 'ja':
                        return 'jp'
                    case 'zh':
                        return 'cn'
                
                    default:
                        return movie
                }
            },
        },
    }
</script>

<template>
    <ul>
        <li v-for="movie in store.movies">
            {{ movie.title }}
            <ul>
                <li>{{ movie.original_title }}</li>
                <li><country-flag :country='convertLangIso(movie.original_language)' size='small'/></li>
                <!-- <li class="lang-container"><FlagInsert :lang="movie.original_language"/></li> -->
                <li>{{ movie.vote_average }}</li>
            </ul>
        </li>
    </ul>
</template>

<style lang="scss" scoped>


</style>