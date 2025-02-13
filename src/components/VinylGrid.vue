<template>
  <div>
    <div class="pure-g">
      <div class="pure-u-1-3 pure-u-md-1-4 pure-u-lg-1-5 pure-u-xl-1-8" v-for="vinyl in vinyls">
        <img class="pure-img" :key="vinyl.ID" :src="vinyl.ImageURL" :alt="vinyl.Name" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vinyls: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.pure-img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}
</style>
