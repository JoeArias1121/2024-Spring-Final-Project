<script setup lang="ts">
import { ref } from 'vue';
import Card from '../components/Card.vue';
const counter = ref(1)

const increment = () => {
    counter.value++
}
</script>

<template>
    <div class="has-background-info is-flex is-flex-direction-column is-justify-items-center is-align-items-center">
        <h1 class="title is-1">This is Home  Page!</h1>
        <button class="button" @click="increment">{{ counter }}</button>
        <Card v-for=" in counter"/>
    </div>
</template>

<style lang="scss" scoped>

</style>