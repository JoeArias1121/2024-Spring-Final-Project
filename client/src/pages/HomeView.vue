<script setup lang="ts">
import { ref } from 'vue';
import MyStatsCard from '../components/MyStatsCard.vue';
const counter = ref(1)

const increment = () => {
    counter.value++
}
</script>

<template>
    <div>
        <h1 class="title is-1">Solo yo weeyyy</h1>
    </div>
    <MyStatsCard />
</template>

<style lang="scss" scoped>

</style>