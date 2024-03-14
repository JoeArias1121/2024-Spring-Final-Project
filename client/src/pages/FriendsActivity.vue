<script setup lang="ts">
import { ref } from 'vue';
import Card from '../components/Card.vue';
import { type User, getUsers } from '../model/users'
import { type Workout } from '../model/workouts';

const users = ref([] as User[]) 
users.value = getUsers()
const user = ref(users.value[0])
const workouts = ref(user.value.workouts)
</script>

<template>
    <div class="is-flex is-flex-direction-column is-justify-items-center is-align-items-center">
        <h1 class="title is-1">Friends!</h1>
        <button class="button column is-two-thirds mb-3 has-background-info has-text-white is-flex" @click="">Add Workout</button>
        <Card v-for="user in users" :user="user" :workout="user.workouts[0]"/>
    </div>
</template>

<style scoped>

</style>