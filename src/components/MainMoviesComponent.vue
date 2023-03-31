<script>
import { store } from '../store';
import CardComponent from './CardComponent.vue';

export default {
    name: 'Movies Component',
    components: {
        CardComponent,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <h2>Movies</h2>
    <div class="container-category">
        <CardComponent :info="movie" v-for="movie in store.movies"/>
    </div>
</template>

<style lang="scss" scoped>

</style>