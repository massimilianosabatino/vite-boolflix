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
        //Change key name in Tv Show object to match 
        changeNameToTitle(){
                if(this.info.hasOwnProperty('name')){
                    return {
                        ...this.info,
                        title: this.info.name,
                        original_title: this.info.original_name,
                    }
                }else {
                    return this.info
                }
        },
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
            imYea: false,
        }
    }
}
</script>

<template>
    <!-- name in show not title -->
        <!-- <div v-if="imYea"><h1>CIAO</h1></div> -->
        <div @mouseenter="imYea = true" @mouseleave="imYea = false">
            <h1>{{ changeNameToTitle.title }}</h1>
            <img :src="setPoster" alt="">
            <ul>
                <li>{{ changeNameToTitle.original_title }}</li>
                <li><country-flag :country='convertLangIso' size='small' /></li>
                <li>{{ changeVoteScale }}</li>
                <li>
                    <font-awesome-icon icon="fa-star fa-solid" v-for="n in changeVoteScale"/>
                    <font-awesome-icon icon="fa-star fa-regular" v-for="n in 5 - changeVoteScale"/>
                </li>
            </ul>
        </div>

</template>

<style lang="scss" scoped>

</style>