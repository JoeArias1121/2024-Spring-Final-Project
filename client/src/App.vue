<script setup lang="ts">
import { RouterView } from 'vue-router'
import {ref, watch} from 'vue'
import navBar from  "./components/navBar.vue"
import {refSession} from './viewModel/session'


const session =  ref()
session.value = refSession()
const user = ref()
user.value = session.value.user
watch(session, () => {
    user.value = refSession().user
}, {deep: true})
</script>

<template>
    <navBar />
    <div class="container" v-if="user">
        <RouterView />
    </div>
    <div class="container" v-else>
        <h1 class="title">You haven't logged in yet!</h1>
    </div>
    
</template>

<style scoped>

</style>