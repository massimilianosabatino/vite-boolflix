<script>
  import HeaderAppComponent from './components/HeaderAppComponent.vue';
  import MainAppComponent from './components/MainAppComponent.vue';
  import FooterAppComponent from './components/FooterAppComponent.vue';

  export default { 
    components: {
      HeaderAppComponent,
      MainAppComponent,
      FooterAppComponent
    } 
   }
</script>

<template>
  <HeaderAppComponent />
  <MainAppComponent />
  <FooterAppComponent />
</template>

<style lang="scss" scoped>

</style>
