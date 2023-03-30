<script>
import CountryFlag from 'vue-country-flag-next'
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
    },

}
</script>

<template>
    <!-- name in show not title -->
            <h1>{{ changeNameToTitle.title }}</h1>
            <ul>
                <li>{{ changeNameToTitle.original_title }}</li>
                <li><country-flag :country='convertLangIso' size='small' /></li>
                <li>{{ changeVoteScale }}</li>
                <li><font-awesome-icon icon="fa-star" v-for="n in 5" :icon="n <= changeVoteScale(info.vote_average) ? 'red' : 'fa-solid'"/></li>
            </ul>

</template>

<style lang="scss" scoped>

</style>