<template>
  <div>
    <h1>Login Form</h1>
    <form @submit.prevent="submitForm">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email">
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthService from '@/contracts/interfaces/AuthService'
import container from '@/providers/service-provider'

export default defineComponent({
  data () {
    return {
      email: '',
      password: '',
      authService: null
    }
  },
  methods: {
    submitForm () {
      const auth: AuthService = container.get<AuthService>('AuthService')
      auth.login({
        email: this.email,
        password: this.password
      }).then((r: any) => {
        if (r.token) {
          localStorage.setItem('token', r.token)
        }
      }).catch(() => {
        alert('You entered an incorrect login or password')
      })
    }
  }
})
</script>
