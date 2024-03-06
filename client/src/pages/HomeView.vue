<script setup lang="ts">
import { ref } from 'vue';
const counter = ref(0)

const increment = () => {
    counter.value++
}
</script>

<template>
    <div class="container has-background-black">
        <button class="button" @click="increment">{{ counter }}</button>
    </div>
</template>

<style lang="scss" scoped>

</style>