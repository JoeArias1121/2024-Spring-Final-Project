<script setup lang="ts">
import { ref, watch } from 'vue';
import Card from '../components/FriendsCard.vue';
import { type User, getUsers } from '../model/users'
import { type Workout } from '../model/workouts';
import {logged} from '../viewModel/session'
import {users, findUser, isOpen, removeWorkout} from '../viewModel/users'
import Modal from '../components/Modal.vue'

const getWorkouts =() => {
    let temp:Workout[] = []

    users.value.forEach(element => {
        
        temp = temp.concat(element.workouts)
    });
    return  temp
}

const user = ref(users.value[logged.value.userId])
const workouts = ref(getWorkouts())


const updateWorkouts = () => {
    workouts.value = getWorkouts()
}
/*watch(logged.value, (newlogged) => {
    user.value = users.value[newlogged.userId]
    workouts.value = user.value.workouts
})*/

watch(users, () => {
    workouts.value = getWorkouts()
}, {deep: true})
</script>

<template>
    <div class="is-flex is-flex-direction-column is-justify-items-center is-align-items-center">
        <h1 class="title is-1">Friends!</h1>
        <button class="button column is-two-thirds mb-3 has-background-info has-text-white is-flex" @click="isOpen=true">Add Workout</button>
            <Modal />
            <Card  v-for="workout in workouts" 
            :key="workout.key" :user="users[workout.id-1]" :workout="workout"
            @remove="removeWorkout"/>
    </div>
</template>

<style scoped>

</style>