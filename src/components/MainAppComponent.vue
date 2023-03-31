<script>
    import MainMoviesComponent from './MainMoviesComponent.vue';
    import MainTvShowsComponent from './MainTvShowsComponent.vue';
    import MainMediaComponent from './MainMediaComponent.vue';
    export default {
        name: 'Main',
        components: {
            MainMoviesComponent,
            MainTvShowsComponent,
            MainMediaComponent,
        },
    }
</script>

<template>
    <main>
        <MainMediaComponent />
    </main>
</template>

<style lang="scss" scoped>
main {
    padding-left: 1.5625rem;
}
</style>