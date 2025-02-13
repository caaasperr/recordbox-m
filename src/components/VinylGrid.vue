<template>
  <div>
    <div class="pure-g">
      <div class="pure-u-1-5">
        <img v-for="vinyl in vinyls" :key="vinyl.ID" :src="vinyl.ImageUrl" :alt="vinyl.Name" />
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
