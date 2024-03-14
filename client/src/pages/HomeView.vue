<script setup lang="ts">
import { ref, watch } from 'vue';
import MyStatsCard from '../components/MyStatsCard.vue';
import { type User, getUsers } from '../model/users'
import { type Workout } from '../model/workouts';
import {logged} from '../viewModel/session'
import {users} from '../viewModel/users'

const user = ref(users.value[logged.value.userId])
const workouts = ref(user.value.workouts)

watch(logged.value, (newlogged) => {
    user.value = users.value[newlogged.userId]
    workouts.value = user.value.workouts
})

</script>

<template>
    <MyStatsCard v-for="workout in workouts" :key="user.id" :workout="workout"/>
</template>

<style lang="scss" scoped>

</style>