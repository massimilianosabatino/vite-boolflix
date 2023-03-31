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
    <main>
        <MainMoviesComponent />
        <MainTvShowsComponent />
    </main>
</template>

<style lang="scss" scoped>
main {
    padding-left: 1.5625rem;
}
</style>