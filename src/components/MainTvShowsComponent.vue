<script>
    import { store } from '../store';
    import CardComponent from './CardComponent.vue';

    export default {
        name: 'Tv Show Component',
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
    <h2>Tv Shows</h2>
    <div class="container-category">
        <CardComponent :info="show" v-for="show in store.tvShows"/>
    </div>
</template>

<style lang="scss" scoped>

</style>