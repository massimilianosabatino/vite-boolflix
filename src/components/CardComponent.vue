<script>
import axios from 'axios';
import CountryFlag from 'vue-country-flag-next';
import { store } from '../store';
import CardModalComponent from './CardModalComponent.vue';
export default {
    name: 'Card',
    props: {
        info: Object,
    },
    components: {
        CountryFlag,
        CardModalComponent,
    },
    computed: {
        convertLangIso() {
            switch (this.info.original_language) {
                case 'en':
                    return 'gb';
                case 'ja':
                    return 'jp';
                case 'zh':
                    return 'cn';
                case 'hi':
                    return 'in';

                default:
                    return this.info.original_language;
            }
        },
        changeVoteScale() {
            const vote = Math.round(this.info.vote_average * 0.5);
            return vote
        },
        setPoster(){
            if(this.info.poster_path === null){
                return 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
            }else{
                return this.store.utility.imgBaseUrl + this.store.utility.imgSize + this.info.poster_path;
            }
        },
        filterGenres(){
            // if(this.store.filterKey !== ''){
            //    return this.info.genre_ids.includes(this.store.filterKey)
            // }else {
            //     return true
            // }
            if(this.store.filterMedia === ''){
                switch (this.store.filterKey ) {
                    case (''):
                        return true;
                    case 'movie':
                        return this.info.mediaType.includes('movie');
                    case 'tv':
                        return this.info.mediaType.includes('tv');
                    default :
                        return this.info.genre_ids.includes(this.store.filterKey);
                }
            }else if(this.store.filterMedia !== ''){
                switch (this.store.filterKey ) {
                    case (''):
                        return this.info.mediaType.includes(this.store.filterMedia);

                    default :
                        const byGenre = this.info.genre_ids.includes(this.store.filterKey);
                        const byMedia = this.info.mediaType.includes(this.store.filterMedia);
                        if(byGenre && byMedia){
                            return true
                        }else {
                            return false
                        }

                }
            }
        },
    },
    methods: {
        getCredits(){
            const movie_id = this.info.id;
            if(this.info.mediaType === 'movie'){
                axios({
                    baseURL: this.store.utility.apiUrl,
                    url: `/movie/${movie_id}/credits`,
                    params:{
                        api_key: this.store.utility.apiKey,
                        language: 'it-IT',
                    }
                    }).then(response => this.people = response.data.cast);
                    return this.people
            }else{
                axios({
                    baseURL: this.store.utility.apiUrl,
                    url: `/tv/${movie_id}/credits`,
                    params:{
                        api_key: this.store.utility.apiKey,
                        language: 'it-IT',
                    }
                    }).then(response => this.people = response.data.cast);
                    return this.people
            }
        },
        
    },
    data(){
        return {
            store,
            showModal: false,
            people: [],
        }
    }
}
</script>

<template >
        <div class="single-element" v-show="filterGenres">
            <div class="card" @click="getCredits">
                <div class="card__side card__side--front-1">
                    <img :src="setPoster" alt="">
                </div>
                <div class="card__side card__side--back card__side--back-1" @click="showModal = true">
                    <h3>{{ info.original_title || info.original_name }}</h3>
                    <div class="language"><country-flag :country='convertLangIso' size='small' /></div>
                    <div class="rating">
                        <font-awesome-icon icon="fa-star fa-solid" v-for="n in changeVoteScale"/>
                        <font-awesome-icon icon="fa-star fa-regular" v-for="n in 5 - changeVoteScale"/>
                    </div>
                    <div class="overview">
                        <h4>Overview:</h4>
                        {{ info.overview }}
                    </div>
                </div>
            </div>
             <h2>{{ info.title || info.name }}</h2>
        </div>

    <!-- Modal for full screen info -->
    <!-- <Teleport to="body"> -->
    <CardModalComponent :show="showModal" :info="info" :poster="setPoster" :cast="people" @close="showModal = false">
        <!-- <template #header>
        <h3>custom header</h3>
        </template> -->
    </CardModalComponent>
    <!-- </Teleport> -->
</template>

<style lang="scss" scoped>
@use './../assets/sass/components/card-component';
</style>