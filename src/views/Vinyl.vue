<template>
  <div class="parent">
    <Header></Header>
    <div class="top-bar"></div>
    <div class="vinyl-grid-wrapper">
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
    this.updateViewportHeight()
    window.addEventListener('resize', this.updateViewportHeight)
    apiService.getVinyls().then((vinyls) => {
      this.vinyls = vinyls.data
    })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateViewportHeight)
  },
  methods: {
    updateViewportHeight() {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    },
  },
  components: {
    Header,
    VinylGrid,
  },
}
</script>

<style scoped>
@import '../styles/vinyl.css';
</style>
