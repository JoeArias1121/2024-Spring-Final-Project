<script setup lang="ts">
import info from '../data/users.json'
import type { User } from '../model/users'
import { type Workout } from '../model/workouts';

const props = defineProps<{
    workout: Workout
}>()

/*const users = info.users
const userId = 1
// if the id matches the current user then return information for the current user---- this function is to be used by filter to let it know which iteration is the right user
const checkUser = (user:any) => {
    return userId===user.id
}
// i get index [0] because filter returns an array and there will only be one user in the array
const user = users.filter(checkUser)[0]
*/


</script>

<template>


    <div class="box pb-1 is-flex-direction-column">
        <p class="title is-1 is-flex is-justify-content-center">{{ workout.when }}</p>
        <div class="is-flex is-justify-content-space-evenly">
            <p class="title is-1 has-text-primary-dark">Distance: {{ workout.distance }} mi</p>
            <p class="title is-1 has-text-primary-dark">Duration: {{ workout.duration }} min</p>
        </div>
        <div class="is-flex is-justify-content-space-evenly">
            <p class="title is-1 has-text-primary-dark">Pace: {{ workout.pace }} mph</p>
            <p class="title is-1 has-text-primary-dark">Calories: {{ workout.calories }} </p>
        </div>
    </div>




    <!--<div class="is-flex is-flex-direction-column">
        <div class="is-flex is-justify-content-center" >
            <p>{{ workout.exercise }}</p>
        </div>
        <div class="is-flex is-justify-content-space-between">
            <h1>Miles Baby</h1>
            <h1>Taking forever</h1>
        </div>
        <div class="is-flex is-justify-content-space-between">
            <h1>Get Faster</h1>
            <h1>Not enough for the CheeseBurger</h1>
        </div>
        <h1 class="title">{{ workout.when }}</h1>
    </div>-->
</template>

<style scoped>

</style>