<template>
    <v-form v-model="valid" @submit.prevent="submitForm">
        <v-container>
            <v-row>
                <v-col
                        cols="12"
                        md="12"
                >
                    <v-text-field
                            v-model=email
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
                            v-model=name
                            type="name"
                            label="name"
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
import container from '@/providers/service-provider'
import { useRouter } from 'vue-router'
import UserService from '@/services/api/Users'
import User from '@/contracts/interfaces/User'
import AuthService from '@/contracts/interfaces/services/AuthService'
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

          return 'E-mail is required.'
        },
        (value: string): string | boolean => {
          if (/.+@.+\..+/.test(value)) {
            return true
          }
          return 'E-mail must be valid.'
        }
      ],
      name: '',
      userService: container.get<UserService>('UserService'),
      auth: container.get<AuthService>('AuthService'),
      router: useRouter(),
      id: 0
    }
  },
  mounted () {
    this.auth.getAuthUser().then((r) => {
      this.name = r.name
      this.email = r.email
      this.id = r.id
    })
  },
  methods: {
    submitForm () {
      this.userService.update({
        email: this.email,
        name: this.name
      } as User).then((r: any) => {
        if (r) {
          this.userService.getById(this.id)
        }
      })
    }
  }
})
</script>
