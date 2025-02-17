<template>
  <div class="modal">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="body"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
}
</script>

<style scoped>
.modal {
  background-color: white;
  width: 100%;
  position: absolute;
  bottom: 0;
  border: 1px solid #2a2e32;
  border-left: none;
  border-right: none;
}

header {
  padding: 0px 10px;
  font-size: 22px;
}

main {
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
}

footer {
  width: 100%;
  border-top: 1px solid #2a2e32;
  display: flex;
  margin-top: 20px;
}
</style>

<style>
@import '../styles/modal.css';
</style>
