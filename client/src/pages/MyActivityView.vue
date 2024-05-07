<script setup lang="ts">
import { ref, watch } from 'vue';
import Card from '../components/Card.vue';
import {refSession} from '../viewModel/session'
//import {users, isOpen, removeWorkout} from '../viewModel/users'
import { type User, getUsers } from '../model/users'
import { findUser, removeWorkout, isOpen } from '../viewModel/newUser';
import Modal from '../components/Modal.vue'
import { type Workout } from '../model/workouts';

/*const users = ref([] as User[]) 
users.value = getUsers()
const user = ref(users.value[logged.value.userId])*/
//const user = ref(users.value[logged.value.userId])
const session = ref()
session.value = refSession() //get the current logged in user
console.log("session.user")
console.log(session.value.user)
const user = ref<User>();
const workouts = ref<Workout[]>()
/*findUser(1)
.then((data) =>{
    user.value = data.data
    workouts.value = user.value.workouts
})*/
function updateUser() {
    if(session.value.user){
        user.value = session.value.user
        workouts.value = user.value?.workouts
        console.log("Just updated")
        console.log(user.value)
        console.log(workouts.value)
    }
}
updateUser()
//const removeWorkout = () => {}
//const isOpen = ref(false)
//const workouts = user.value.workouts//session.user.workouts
//used to be logged.value for the first parameter
watch(session, () => {
    updateUser()
}, {deep: true})

</script>

<template>
    <div class="is-flex is-flex-direction-column is-justify-items-center is-align-items-center">
        <h1 class="title is-1">My Activity!</h1>
        <button class="button column is-two-thirds mb-3 has-background-info has-text-white is-flex" @click="isOpen=true">Add Workout</button>
        <Modal />
        <Card v-if="workouts && user" v-for="workout in workouts" :user="user" :workout="workout" @remove="removeWorkout" :key="workout.key"/>
        <h1 v-else>No Workouts Yet!</h1>
    </div>
</template>

<style scoped>

</style>