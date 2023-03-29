<script>
    import MainMoviesComponent from './MainMoviesComponent.vue';
    import MainTvShowsComponent from './MainTvShowsComponent.vue';
    export default {
        name: 'Main',
        components: {
            MainMoviesComponent,
            MainTvShowsComponent,
        },
    }
</script>

<template>
    <h2>Movies</h2>
    <MainMoviesComponent />
    <h2>Tv Shows</h2>
    <MainTvShowsComponent />
</template>

<style lang="scss" scoped>

</style>