<template>
  <header>
    <div class="left_button">
      <img
        @click="isOpeningMenu = true"
        v-if="type === 0 && isOpeningMenu === false"
        src="../assets/menu.svg"
        alt="Menu"
      />
      <img
        @click="isOpeningMenu = false"
        v-if="type === 0 && isOpeningMenu === true"
        src="../assets/menu_close.svg"
        alt="Close"
      />
      <img v-else-if="type === 1" src="../assets/back.svg" alt="Back" />
    </div>
    <a v-if="title == 'RecordBox'" href="https://m.recordbox.org" class="title_logo">{{ title }}</a>
    <a v-else class="title">{{ title }}</a>
  </header>
  <div v-if="isOpeningMenu" class="menu_list flex-center">
    <div class="menu_item">
      <router-link @click="isOpeningMenu = false" to="/vinyl">Vinyl</router-link>
    </div>
    <div class="menu_item">
      <router-link @click="isOpeningMenu = false" to="/shelves">Shelves</router-link>
    </div>
    <div class="menu_item end">
      <router-link @click="isOpeningMenu = false" to="/profile">Profile</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpeningMenu: false,
    }
  },
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
.menu_item {
  padding: 10px;
  width: 80%;
  text-align: center;
  /*border-bottom: 1px solid #2a2e32;*/
}

/*.menu_item.end {
  border-bottom: none;
}*/

.menu_item a {
  display: block;
  text-decoration: none;
  color: #2a2e32;
  width: 100%;
  height: 100%;
}

.menu_list {
  position: fixed;
  top: calc(2em + 11.5px);
  width: 100%;
  /*padding-top: 10px;
  padding-bottom: 10px;*/
  background-color: white;
  border-bottom: 1px solid #2a2e32;
}

.left_button {
  position: absolute;
  left: 5px;
  margin: 0 auto;
}

.title {
  font-size: 2em;
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
