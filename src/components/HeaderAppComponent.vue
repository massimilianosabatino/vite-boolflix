<script>
    import HeaderSearchComponent from './HeaderSearchComponent.vue';
    export default {
        name: 'Header',
        components: {
            HeaderSearchComponent,
        }
    }
</script>

<template>
    <header>
        <div class="logo">
            <img src="/logo.svg" alt="">
        </div>
        <HeaderSearchComponent class="search"/>
    </header>
</template>

<style lang="scss" scoped>
@use './../assets/sass/sections/header';
</style>