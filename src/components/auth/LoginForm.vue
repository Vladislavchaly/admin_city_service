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
import { Auth } from '@/services/api/Auth'

export default defineComponent({
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitForm () {
      const auth = new Auth()
      auth.login({
        email: this.email,
        password: this.password
      }).then((r: any) => {
        console.log(r)
      })
    }
  }
})
</script>
