<script setup lang="ts">
import { ref } from 'vue';
import Table from '../components/Table.vue'
</script>

<template>
    <div class="column if-full">
        <button class="button has-background-primary has-text-white">+ Add User</button>
        <Table />
    </div>
</template>

<style scoped>

</style>