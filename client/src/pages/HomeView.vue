<script setup lang="ts">
import { ref, watch } from 'vue';
import MyStatsCard from '../components/MyStatsCard.vue';
import { findUser } from '../viewModel/newUser';
import {refSession} from '../viewModel/session'
import { type User } from '@/model/users'
import { type Workout } from '../model/workouts';
//import {logged} from '../viewModel/session'
//import {users} from '../viewModel/users'
/*const workouts = ref()
const user = ref()
findUser(1)
.then((data) =>{
    user.value = data.data
    workouts.value = user.value.workouts
    console.log(user.value);
    console.log(workouts.value)
}).catch(console.error);*/

/*
watch(user, (newlogged) => {
    //user.value = users.value[]//[user.id]
    console.log("change")
    console.log(workouts.value)
    workouts.value = user.value.workouts
}, {deep: true})*/
const session = ref()
session.value = refSession() //get the current logged in user
const user = ref<User>();
const workouts = ref<Workout[]>()

function updateUser() {
    if(session.value.user){
        user.value = session.value.user
        workouts.value = user.value?.workouts
    }
}
updateUser()
watch(session, () => {
    updateUser()
}, {deep: true})

</script>

<template>
    <MyStatsCard v-if="user" v-for="workout in workouts"  :workout="workout"/><!--:key="user.id" this was in there but gives dup keys in case if there ever are issues with deleting-->
    <h1 v-else>Let's Start Working Out!</h1>
</template>

<style lang="scss" scoped>

</style>