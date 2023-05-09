<template>
    <v-container class="bg-surface-variant">
        <v-row no-gutters>
            <v-col
                v-for="card in cards"
                :key="card"
                cols="12"
                sm="4"
            >
                <v-sheet class="ma-2 pa-2">
                    {{card.title}}
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    cards: [
      { title: 'Pre-fab homes' },
      { title: 'Favorite road trips' },
      { title: 'Best airlines' }
    ]
  })
})
</script>
