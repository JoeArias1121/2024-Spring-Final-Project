<script setup lang="ts">
import { ref } from 'vue';
import Card from '../components/Card.vue';
const counter = ref(1)

const increment = () => {
    counter.value++
}
</script>

<template>
    <div>
        <h1 class="title is-1">Solo yo weeyyy</h1>
    </div>
</template>

<style lang="scss" scoped>

</style>