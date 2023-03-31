<script>
import CountryFlag from 'vue-country-flag-next'
import { store } from '../store'
export default {
    name: 'Card',
    props: {
        info: Object,
    },
    components: {
        CountryFlag,
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
            console.log(this.info)
            return this.store.utility.imgBaseUrl + this.store.utility.imgSize + this.info.poster_path;
        }
    },
    data(){
        return {
            store,
        }
    }
}
</script>

<template>
        <div class="single-element">
            <div class="card">
                <div class="card__side card__side--front-1">
                    <img :src="setPoster" alt="">
                </div>
                <div class="card__side card__side--back card__side--back-1">
                    <h3>{{ info.original_title || info.original_name }}</h3>
                    <div class="language"><country-flag :country='convertLangIso' size='small' /></div>
                    <div class="vote">
                        <font-awesome-icon icon="fa-star fa-solid" v-for="n in changeVoteScale"/>
                        <font-awesome-icon icon="fa-star fa-regular" v-for="n in 5 - changeVoteScale"/>
                    </div>
                    <div class="overview">
                        Overview:
                        {{ info.overview }}
                    </div>
                </div>
            </div>
             <h2>{{ info.title || info.name }}</h2>
        </div>
</template>

<style lang="scss" scoped>
@use './../assets/sass/components/card-component';
</style>