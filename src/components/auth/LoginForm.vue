<template>
    <v-form v-model="valid" @submit.prevent="submitForm">
        <v-container>
            <v-row>
                <v-col
                        cols="12"
                        md="12"
                >
                    <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                        cols="12"
                        md="12"
                >
                    <v-text-field
                            v-model="password"
                            type="password"
                            label="Password"
                            required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
            <v-btn type="submit" block class="mt-2">Submit</v-btn>
            </v-row>
        </v-container>
    </v-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthService from '@/contracts/interfaces/AuthService'
import container from '@/providers/service-provider'
import { useRouter } from 'vue-router'
// TODO: add password rules
export default defineComponent({
  data () {
    return {
      valid: false,
      email: '',
      emailRules: [
        (value: any): string | boolean => {
          if (value) {
            return true
          }

          return 'E-mail is requred.'
        },
        (value: string): string | boolean => {
          if (/.+@.+\..+/.test(value)) {
            return true
          }

          return 'E-mail must be valid.'
        }
      ],
      password: '',
      authService: null,
      router: useRouter()
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
          this.router.push({ name: 'main' })
        }
      }).catch(() => {
        alert('You entered an incorrect login or password')
      })
    }
  }
})
</script>
