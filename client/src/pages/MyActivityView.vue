<script setup lang="ts">
import { ref } from 'vue';
import Card from '../components/Card.vue';
import { type User, getUsers } from '../model/users'
import { type Workout } from '../model/workouts';

const users = ref([] as User[]) 
users.value = getUsers()
const user = ref(users.value[0])
const workouts = ref(user.value.workouts)
const counter = ref(1)

const increment = () => {
    counter.value++
}
</script>

<template>
    <div class="is-flex is-flex-direction-column is-justify-items-center is-align-items-center">
        <h1 class="title is-1">My Activity!</h1>
        <button class="button column is-two-thirds mb-3 has-background-info has-text-white is-flex" @click="">Add Workout</button>
        <Card v-for="workout in workouts" :user="user" :workout="workout"/>
    </div>
</template>

<style scoped>

</style>