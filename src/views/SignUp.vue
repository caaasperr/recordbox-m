<template>
  <Header></Header>
</template>
<script>
import Header from '@/components/Header.vue'

export default {
  name: 'SignUpView',
  data() {
    return {
      SignUpForm: {
        Username: '',
        Password: '',
      },
      PasswordConfirm: '',
      ErrMessage: '',
    }
  },
  components: {
    Header,
  },
}
</script>
