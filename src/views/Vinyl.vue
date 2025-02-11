<template>
  <div>
    <Header></Header>
    <div class="flex-center">
      <h1>Welcome to the Vinyl page!</h1>
      <VinylGrid :vinyls="vinyls" />
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import VinylGrid from '@/components/VinylGrid.vue'
import apiService from '@/services/api.js'

export default {
  name: 'VinylView',
  data() {
    return {
      vinyls: [],
    }
  },
  mounted() {
    apiService.getVinyls()
  },
  components: {
    Header,
    VinylGrid,
  },
}
</script>
