<script>
    import { store } from '../store';

    export default {
        name: 'Movies Component',
        data(){
            return {
                store,
                flagList: ['it', 'en', 'de', 'es', 'fr', 'gb', 'us'],
            }
        },
        methods: {
            showFlag(lang){
                if(this.flagList.includes(lang)){
                    //const url = `"./../assets/img/flag/${lang}.svg"`;
                    //const altText = `"Flag of ${lang}""`;
                    const flag = `<img src="./src/assets/img/flag/${lang}.svg" alt="flag of ${lang}">`
                    return flag
                } else {
                    const text = lang;
                    return text
                }
            }
        }
    }
</script>

<template>
    <ul>
        <li v-for="movie in store.movies">
            {{ movie.title }}
            <ul>
                <li>{{ movie.original_title }}</li>
                <li v-html="showFlag(movie.original_language)" class="lang-container"></li>
                <li>{{ movie.vote_average }}</li>
                
            </ul>
        </li>
    </ul>
</template>

<style lang="scss" scoped>


</style>