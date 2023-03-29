<script>
import { store } from '../store';
export default {
    props: {
        lang: String,
    },
    data(){
            return {
                store,
                src: '',
                alt: '',
            }
        },
    methods: {
            showFlag(lang){
                    console.log(lang)
                    this.src = `/src/assets/img/flag/${lang}.svg`;
                    this.alt = `"Flag of ${lang}"`;
            }
        }
}
</script>
<template>
    <img :src="src" :alt="alt" :myTrigger="showFlag(lang)" v-if="this.store.flagList.includes(lang)">
    <span v-else>{{ lang }}</span>
</template>