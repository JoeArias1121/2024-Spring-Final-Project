<script setup lang="ts">
import { ref, watch } from 'vue';
import Card from '../components/FriendsCard.vue';
import { type Workout } from '../model/workouts';
import { type User, getUsers } from '../model/users'

const users = ref([] as User[])
getUsers()
.then((data) =>{
    users.value = data.data
})
const workouts = ref([] as Workout[])

function updateWorkouts(){
    if(users.value){
        users.value.forEach((element) => {
        
        workouts.value = workouts.value.concat(element.workouts)
    });
    }
}
function removeWorkout(){}
watch(users, () => {
    updateWorkouts()
}, {deep: true})

</script>

<template>
    <div class="is-flex is-flex-direction-column is-justify-items-center is-align-items-center">
        <h1 class="title is-1">Friends!</h1>
            <Card  v-for="workout in workouts" 
            :key="workout.key" :user="users[workout.id-1]" :workout="workout"
            @remove="removeWorkout"/>
    </div>
</template>

<style scoped>

</style>