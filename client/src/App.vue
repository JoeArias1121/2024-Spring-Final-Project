<script setup lang="ts">
import { RouterView } from 'vue-router'
import {ref, watch} from 'vue'
import navBar from  "./components/navBar.vue"
import {refSession} from './viewModel/session'

const user = ref( refSession().user)
//where v-if was there used to be user there to see if logged in
</script>

<template>
    <navBar />
    <div class="container" v-if="true">
        <RouterView />
    </div>
    <div class="container" v-else>
        <h1 class="title">You haven't logged in yet!</h1>
    </div>
    
</template>

<style scoped>

</style>