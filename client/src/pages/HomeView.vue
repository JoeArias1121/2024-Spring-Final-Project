<script setup lang="ts">
import { ref, watch } from 'vue';
import MyStatsCard from '../components/MyStatsCard.vue';
import { findUser } from '../viewModel/newUser';
//import {logged} from '../viewModel/session'
//import {users} from '../viewModel/users'
const workouts = ref()
const user = ref()
findUser(1)
.then((data) =>{
    user.value = data.data
    workouts.value = user.value.workouts
    console.log(user.value);
    console.log(workouts.value)
}).catch(console.error);

/*
watch(user, (newlogged) => {
    //user.value = users.value[]//[user.id]
    console.log("change")
    console.log(workouts.value)
    workouts.value = user.value.workouts
}, {deep: true})*/

</script>

<template>
    <h1>hey</h1>
    <MyStatsCard v-for="workout in workouts" :key="user.id" :workout="workout"/>
</template>

<style lang="scss" scoped>

</style>