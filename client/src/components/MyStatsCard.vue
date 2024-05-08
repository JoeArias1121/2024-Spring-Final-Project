<script setup lang="ts">
import { type Workout } from '../model/workouts';

const props = defineProps<{
    workout: Workout
}>()




</script>

<template>


    <div class="box my-5 is-flex-direction-column">
        <p class="title is-1 is-flex is-justify-content-center">{{ props.workout.when }}</p>
        <div class="is-flex is-justify-content-space-evenly">
            <p class="title is-1 has-text-primary-dark">Distance: {{ props.workout.distance }} mi</p>
            <p class="title is-1 has-text-primary-dark">Duration: {{ props.workout.duration }} min</p>
        </div>
        <div class="is-flex is-justify-content-space-evenly">
            <p class="title is-1 has-text-primary-dark">Pace: {{ props.workout.pace }} mph</p>
            <p class="title is-1 has-text-primary-dark">Calories: {{ props.workout.calories }} </p>
        </div>
    </div>


</template>

<style scoped>

</style>