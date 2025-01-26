<template>
  <header>
    <div class="left_button">
      <img v-if="type === 0" src="https://m.recordbox.org/img/menu.svg" alt="Menu" />
      <img v-else-if="type === 1" src="https://m.recordbox.org/img/back.svg" alt="Back" />
    </div>
    <a v-if="title == 'RecordBox'" href="https://m.recordbox.org" class="title_logo">{{ title }}</a>
    <p v-else class="title">{{ title }}</p>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'RecordBox',
    },
    type: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style scoped>
.left_button {
  position: absolute;
  left: 5px;
  margin: 0 auto;
}

.title {
  font-size: 1.5em;
  text-decoration: none;
  color: #2a2e32;
  font-family: Bebas Neue;
}

.title_logo {
  font-size: 2em;
  text-decoration: none;
  color: #2a2e32;
  font-family: Bebas Neue;
}

header {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #2a2e32;
  padding: 3px;
  position: relative;
}
</style>
