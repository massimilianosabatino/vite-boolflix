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
                    this.src = `/src/assets/img/flag/${lang}.svg`;
                    this.alt = `"Flag of ${lang}"`;
            }
        }
}
</script>
<template>
    <!-- Replaces the language string with a flag if it is present in the flagList array - Custom attribute :bindFunction invokes the function in methods -->
    <img :src="src" :alt="alt" :bindFunction="showFlag(lang)" v-if="this.store.flagList.includes(lang)">
    <span v-else>{{ lang }}</span>
</template>