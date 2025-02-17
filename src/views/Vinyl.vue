<template>
  <div class="parent">
    <Header></Header>
    <div class="top-bar">
      <button class="button small_rec" @click="addVinylModal = true">+</button>
      <button class="button small_rec">S</button>
    </div>
    <div class="vinyl-grid-wrapper">
      <VinylGrid :vinyls="vinyls" />
    </div>
  </div>
  <!--Modal zone-->
  <ModalComponent v-if="addVinylModal">
    <template #header>
      <p>{{ $t('vinyl.addvinyl_modal.message') }}</p>
    </template>
    <template #body>
      <button class="button fit_width center-margin" @click="">
        {{ $t('vinyl.addvinyl_modal.from_discogs') }}
      </button>
      <button class="button fit_width center-margin" @click="">
        {{ $t('vinyl.addvinyl_modal.manually') }}
      </button>
    </template>
    <template #footer>
      <button @click="addVinylModal = false" class="modal_button full">
        {{ $t('vinyl.addvinyl_modal.close') }}
      </button>
    </template>
  </ModalComponent>
</template>

<script>
import Header from '@/components/Header.vue'
import VinylGrid from '@/components/VinylGrid.vue'
import apiService from '@/services/api.js'
import ModalComponent from '@/components/Modal.vue'

export default {
  name: 'VinylView',
  data() {
    return {
      vinyls: [],
      addVinylModal: false,
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
    ModalComponent,
  },
}
</script>

<style scoped>
@import '../styles/vinyl.css';
</style>
