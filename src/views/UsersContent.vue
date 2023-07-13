<template>
  <v-table>
    <thead>
    <tr>
      <th class="text-left">
        id
      </th>
      <th class="text-left">
        Name
      </th>
      <th class="text-left">
        email
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="item in users"
      :key="item.id"
    >
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.email }}</td>
    </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import container from '@/providers/service-provider'
import UserService from '@/services/api/Users'

export default defineComponent({
  data () {
    return {
      userService: container.get<UserService>('UserService'),
      users: []
    }
  },
  mounted () {
    this.userService.getAll().then((r) => {
      this.users = r as any
    })
  }
})
</script>
