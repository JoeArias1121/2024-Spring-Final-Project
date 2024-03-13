<script setup lang="ts">
import { ref } from 'vue';
import MyStatsCard from '../components/MyStatsCard.vue';
import { type User, getUsers } from '../model/users'
import { type Workout } from '../model/workouts';

const users = ref([] as User[]) 
users.value = getUsers()
const userId = ref(1)
const workouts = ref(users.value[userId.value-1].workouts)

</script>

<template>
    <MyStatsCard v-for="workout in workouts" :key="userId" :workout="workout"/>
</template>

<style lang="scss" scoped>

</style>