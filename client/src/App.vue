<script setup lang="ts">
import { RouterView } from 'vue-router'
import navBar from  "./components/navBar.vue"
</script>

<template>
    <div>
        <navBar />
        <RouterView />
    </div>
</template>

<style scoped>

</style>