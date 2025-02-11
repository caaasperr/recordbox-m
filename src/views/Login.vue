<template>
  <div>
    <Header></Header>
    <div class="login-container">
      <p class="login-tile">{{ $t('login.title') }}</p>
      <input id="username" v-model="credential.username" type="text" placeholder="Username" />
      <input id="password" v-model="credential.password" type="password" placeholder="Password" />
      <div class="login-button" @click="login">{{ $t('login.button') }}</div>
      <p>
        {{ $t('login.nothaveaccount')
        }}<router-link to="signup">{{ $t('login.createone') }}</router-link>
      </p>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import apiService from '@/services/api.js'

export default {
  name: 'LoginView',
  data() {
    return {
      credential: {
        Username: '',
        Password: '',
      },
      error: '',
    }
  },
  components: {
    Header,
  },
  methods: {
    async login() {
      const rst = await apiService.login(this.credential)
      if (rst === true) {
        this.$router.push('/')
      } else {
        this.error = 'Login failed'
      }
    },
  },
}
</script>
