import { getUsers } from '../model/users';
<script setup lang="ts">
import { ref } from 'vue';
import { type User, getUsers } from '../model/users'

const users =  ref([] as User[]);
getUsers()
.then( (data)=> {
    users.value= data.data;
    console.log('Users')
    console.log(users.value)
})
.catch( console.error );

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
      <td>{{  }} </td>
      <td>{{ user.first }}</td>
      <td>{{user.last }}</td>
      <td>{{  user.email}}</td>
      <td>{{ user.handle }}</td>
      <td>{{ user.admin }}</td>
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