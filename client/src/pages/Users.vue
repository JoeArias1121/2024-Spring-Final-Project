<script setup lang="ts">
import Table from '../components/Table.vue'
import { ref, watch } from  'vue';
import { type User, getUsers } from '../model/users'
import {refSession} from '../viewModel/session'

const session = ref()
session.value = refSession()

const users = ref([] as User[])
getUsers()
.then((data) => {
    users.value = data.data
})
const user = ref<User>()

function updateUser() {
    if(session.value.user){
        session.value = refSession()
        user.value = session.value.user
    }
}
updateUser();
watch(session, () => {
    updateUser()
}, {deep: true})

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