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
    <ul>
        <li v-for="show in store.tvShows">
            <CardComponent :info="show" />
        </li>
    </ul>
</template>

<style lang="scss" scoped>

</style>