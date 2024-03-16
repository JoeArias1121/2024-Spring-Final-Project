<script setup lang="ts">
import { ref, watch } from 'vue';
import Card from '../components/Card.vue';
import { type User, getUsers } from '../model/users'
import { type Workout } from '../model/workouts';
import {logged} from '../viewModel/session'
import {users, isOpen, removeWorkout} from '../viewModel/users'
import Modal from '../components/Modal.vue'

/*const users = ref([] as User[]) 
users.value = getUsers()
const user = ref(users.value[logged.value.userId])*/
const user = ref(users.value[logged.value.userId])
const workouts = ref(user.value.workouts)

watch(logged.value, (newlogged) => {
    user.value = users.value[newlogged.userId]
    workouts.value = user.value.workouts
})
watch(users, () => {
    workouts.value = users.value[logged.value.userId].workouts
}, {deep: true})

</script>

<template>
    <div class="is-flex is-flex-direction-column is-justify-items-center is-align-items-center">
        <h1 class="title is-1">My Activity!</h1>
        <button class="button column is-two-thirds mb-3 has-background-info has-text-white is-flex" @click="isOpen=true">Add Workout {{ logged.userId }}</button>
        <Modal />
        <Card v-for="workout in workouts" :user="user" :workout="workout" @remove="removeWorkout" :key="workout.key"/>
    </div>
</template>

<style scoped>

</style>