<template>
    <v-navigation-drawer
            v-model="drawer"
            :rail="rail"
            permanent
            @click="rail = false"
    >
        <v-list-item
                prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
                title="John Leider"
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
    </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthService from '@/contracts/interfaces/AuthService'
import container from '@/providers/service-provider'
import { useRouter } from 'vue-router'

export default defineComponent({
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city', to: '/' },
        { title: 'My Account', icon: 'mdi-account', to: 'my-account' },
        { title: 'Users', icon: 'mdi-account-group-outline', to: 'users' }
      ],
      rail: true
    }
  }
})
</script>
