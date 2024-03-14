import { getUsers } from '../model/users';
<script setup lang="ts">
import { ref } from 'vue';
import { type User, getUsers } from '../model/users'
import {users} from '../viewModel/users'
const user = users.value[0];

</script>

<template>
    <table class="table is-bordered is-fullwidth ">
  <thead>
    <tr>
      <th>Pic</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Emails</th>
      <th>Handle</th>
      <th>Is Admin</th>
      <th>Edit/Del</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users">
      <td>{{  }} pic</td>
      <td>{{ user.first }}</td>
      <td>{{user.last }}</td>
      <td>{{  }}email</td>
      <td>{{  }}handle</td>
      <td>{{  }}isAdmin</td>
      <td>
        <button class="button">Ed</button>
        <button class="button">Del</button>
    </td>
    </tr>
  </tbody>
</table>
</template>

<style scoped>

</style>