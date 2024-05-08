<script setup lang="ts">
import Table from '../components/Table.vue'
import { ref } from  'vue';
import { findUser } from '../viewModel/newUser'
//import {logged} from '../viewModel/session'
import { type User, getUsers } from '../model/users'

const users = ref([] as User[])
getUsers()
.then((data) => {
    users.value = data.data
})
const user = ref<User>()
findUser(1)
.then((data) =>{
    user.value = data.data
})

</script>

<template>
    <div v-if="user">
        <div class="column if-full" v-if="user.admin == true"> 
            <button class="button has-background-primary has-text-white">+ Add User</button>
            <Table />
        </div>
        <h1 class="title" v-else>You're Not Admin</h1>
    </div>
</template>

<style scoped>

</style>