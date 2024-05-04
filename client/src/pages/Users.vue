<script setup lang="ts">
import Table from '../components/Table.vue'
import { ref } from  'vue';
//import {getUsers} from '../viewModel/newUsers'
//import {logged} from '../viewModel/session'
import { type User, getUsers } from '../model/users'

const users = ref([] as User[])
getUsers()
    .then((data) => {
        users.value = data.data
    })

</script>

<template>
    <div class="column if-full" v-if="users[0].admin == true"> 
        <button class="button has-background-primary has-text-white">+ Add User</button>
        <Table />
    </div>
    <h1 class="title" v-else>You're Not Admin</h1>
</template>

<style scoped>

</style>