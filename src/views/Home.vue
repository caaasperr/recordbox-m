<template>
  <Header></Header>
  <div class="home">
    <h1>Welcome to the Home page!</h1>
    <p>Replace this content with your own.</p>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
  },
}
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 20px;
}
</style>
