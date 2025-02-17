<template>
  <Header></Header>
  <div class="flex-center">
    <img
      :src="profile.ProfileImage"
      onerror="https://m.recordbox.org/assets/logo.png"
      alt="Profile Image"
    />
    <h1>{{ profile.Username }}</h1>
    <p>
      <strong>{{ $t('profile.created_at') }}</strong> {{ profile.CreatedAt.split('T')[0] }}
    </p>
    <button class="button dangerous fit_width" @click="">
      {{ $t('profile.logout') }}
    </button>
    <button class="button dangerous fit_width" @click="isRemovingAccount = true">
      {{ $t('profile.delete_account') }}
    </button>
  </div>
  <!--Modal zone-->
  <ModalComponent v-if="isRemovingAccount" @close="isRemovingAccount = false">
    <template #header>
      <p>{{ $t('profile.modal.title') }}</p>
    </template>
    <template #body>
      <p>{{ $t('profile.modal.suredelete') }}</p>
      <p>{{ $t('profile.modal.enterpassword') }}</p>
      <input type="password" placeholder="Password" class="modalInput" />
    </template>
    <template #footer>
      <button @click="isRemovingAccount = false" class="modal_button bold">
        {{ $t('profile.modal.close') }}
      </button>
      <button @click="deleteAccount()" class="modal_button right dangerous">
        {{ $t('profile.modal.remove') }}
      </button>
    </template>
  </ModalComponent>
</template>

<script>
import Header from '@/components/Header.vue'
import apiService from '@/services/api.js'
import ModalComponent from '@/components/Modal.vue'

export default {
  name: 'ProfileView',
  components: {
    Header,
    ModalComponent,
  },
  data() {
    return {
      profile: {
        Username: '',
        CreatedAt: '',
        ProfileImage: '',
      },
      isRemovingAccount: false,
    }
  },
  methods: {
    updateViewportHeight() {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    },
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateViewportHeight)
  },
  mounted() {
    this.updateViewportHeight()
    window.addEventListener('resize', this.updateViewportHeight)
  },
  created() {
    apiService.getProfile().then((profile) => {
      this.profile = profile
    })
  },
}
</script>
