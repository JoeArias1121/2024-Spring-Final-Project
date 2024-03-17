<script setup lang="ts">
import Table from '../components/Table.vue'
import {users} from '../viewModel/users'
import {logged} from '../viewModel/session'
</script>

<template>
    <div class="column if-full" v-if="users[logged.userId].admin == true"> 
        <button class="button has-background-primary has-text-white">+ Add User</button>
        <Table />
    </div>
    <h1 class="title" v-else>You're Not Admin</h1>
</template>

<style scoped>

</style>