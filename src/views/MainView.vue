<template>
    <v-card>
        <v-layout>
            <SideBar></SideBar>
            <v-app-bar title="City Service"></v-app-bar>
            <v-main>
                <router-view/>
            </v-main>
        </v-layout>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from '@/components/sidebar/SideBar.vue'

export default defineComponent({
  components: { SideBar }
})
</script>
