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
    <MainMoviesComponent />
    <MainTvShowsComponent />
</template>

<style lang="scss" scoped>

</style>