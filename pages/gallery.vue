<template>
  <div class="page-wrapper">
    <Gallery />
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Gallery from '~/components/Gallery.vue'
  // import Options from '~/components/Options.vue'

  export default {
    methods: {
      ...mapActions([
        'loadData'
      ])
    },
    components: {
      Gallery
      // Options
    },
    created () {
      console.log('Load data in index')
      this.loadData()
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .page-wrapper {
    margin: 10vh $spacing / 2;
    min-height: 100vh;
    flex-direction: column;
  }
</style>
