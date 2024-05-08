<script setup lang="ts">
import { ref, watch } from 'vue';
import Card from '../components/Card.vue';
import {refSession} from '../viewModel/session'
import { type User, updateWorkout } from '../model/users'
import { isOpen } from '../viewModel/newUser';
import Modal from '../components/Modal.vue'
import { type Workout } from '../model/workouts';


const session = ref()
session.value = refSession() //get the current logged in user
console.log("session.user")
console.log(session.value.user)
const user = ref<User>();
const workouts = ref<Workout[]>()

function updateUser() {
    if(session.value.user){
        session.value = refSession()
        user.value = session.value.user
        workouts.value = user.value?.workouts
        console.log("Just updated")
        console.log(user.value)
        console.log(workouts.value)
    }
}
updateUser()
function removeWorkout(workout: Workout){
    if(user.value){
    user.value.workouts = user.value.workouts.filter((w)=> w != workout);
 updateWorkout(user.value)
 .then(()=>{
    updateUser()
 })
}
}
function addWorkout(){
    if(user.value){
    console.log(user.value.workouts)
    updateWorkout(user.value)
    .then(()=>{
        updateUser()
    });
}
}
watch(session, () => {
    updateUser()
}, {deep: true})

</script>

<template>
    <div class="is-flex is-flex-direction-column is-justify-items-center is-align-items-center">
        <h1 class="title is-1">My Activity!</h1>
        <button class="button column is-two-thirds mb-3 has-background-info has-text-white is-flex" @click="isOpen=true">Add Workout</button>
        <Modal v-if="user" @add="addWorkout"/>
        <Card v-if="workouts && user" v-for="workout in workouts" :user="user" :workout="workout" @remove="removeWorkout" :key="workout.key"/>
        <h1 v-else>No Workouts Yet!</h1>
    </div>
</template>

<style scoped>

</style>