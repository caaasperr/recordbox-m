<template>
  <div>
    <ul>
      <li v-for="vinyl in vinyls" :key="vinyl.id">{{ vinyl.name }}</li>
    </ul>
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
