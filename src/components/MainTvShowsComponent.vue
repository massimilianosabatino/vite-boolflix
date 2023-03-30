<script>
    import { store } from '../store';
    import FlagInsert from './FlagInsert.vue';
    import CountryFlag from 'vue-country-flag-next'

    export default {
        name: 'Tv Show Component',
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
            convertLangIso(show){
                switch (show) {
                    case 'en':
                        return 'gb'
                    case 'ja':
                        return 'jp'
                    case 'zh':
                        return 'cn'

                    default:
                    return show
                }
            },
        },
    }
</script>

<template>
    <ul>
        <li v-for="show in store.tvShows">
            {{ show.name }}
            <ul>
                <li>{{ show.original_name }}</li>
                <li><country-flag :country='convertLangIso(show.original_language)' size='small'/></li>
                <!-- <li class="lang-container"><FlagInsert :lang="show.original_language"/></li> -->
                <li>{{ show.vote_average }}</li>
            </ul>
        </li>
    </ul>
</template>

<style lang="scss" scoped>


</style>