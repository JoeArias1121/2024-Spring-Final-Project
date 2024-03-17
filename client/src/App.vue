<script setup lang="ts">
import { RouterView } from 'vue-router'
import navBar from  "./components/navBar.vue"
import {logged} from './viewModel/session'
</script>

<template>
    <navBar />
    <div class="container" v-if="logged.loggedIn">
        <RouterView />
    </div>
    <div class="container" v-else>
        <h1 class="title">You haven't logged in yet!</h1>
    </div>
    
</template>

<style scoped>

</style>