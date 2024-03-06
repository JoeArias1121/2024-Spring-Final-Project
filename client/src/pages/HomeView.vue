<script setup lang="ts">
import { ref } from 'vue';
const counter = ref(0)

const increment = () => {
    counter.value++
}
</script>

<template>
    <div class="container has-background-info">
        <h1 class="title is-1">This is Home  Page!</h1>
        <button class="button" @click="increment">{{ counter }}</button>
    </div>
</template>

<style lang="scss" scoped>

</style>