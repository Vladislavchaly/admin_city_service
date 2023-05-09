<template>
    <v-navigation-drawer
            v-model="drawer"
            :rail="rail"
            permanent
            @click="rail = false"
    >
        <v-list-item
                prepend-avatar="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABPCAMAAADmzqp4AAAAD1BMVEUBW7v+1QAAVMCcn27/2QAcsAy4AAAAOElEQVRoge3NQQ0AIBADsMHhXzMe+CwkrYEmAAAAAHxld2Q6cjqyOrxer9fr9Xq9Xq/X6/V6vW8ui3oV2q2mGTMAAAAASUVORK5CYII="
                :title=adminName
                nav
        >
            <template v-slot:append>
                <v-btn
                        variant="text"
                        icon="mdi-chevron-left"
                        @click.stop="rail = !rail"
                ></v-btn>
            </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact">
            <router-link v-for="item in items" :key="item.title" :to="item.to">
            <v-list-item :prepend-icon=item.icon :title=item.title></v-list-item>
            </router-link>
        </v-list>
        <template v-slot:append>
            <div class="pa-2">
                <v-btn icon="mdi-logout-variant">
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthService from '@/contracts/interfaces/services/AuthService'
import container from '@/providers/service-provider'
import { useRouter } from 'vue-router'
import { th } from 'vuetify/locale'

export default defineComponent({
  data () {
    return {
      adminName: '',
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city', to: '/' },
        { title: 'My Account', icon: 'mdi-account', to: 'my-account' },
        { title: 'Users', icon: 'mdi-account-group-outline', to: 'users' }
      ],
      rail: true
    }
  },
  mounted () {
    const auth: AuthService = container.get<AuthService>('AuthService')
    auth.getAuthUser().then((r) => {
      this.adminName = r.name
    })
  }
})
</script>
