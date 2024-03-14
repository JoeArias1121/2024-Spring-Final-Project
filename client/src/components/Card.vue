<script setup lang="ts">
import { ref } from 'vue';
import { type User } from '../model/users';
import { type Workout } from '../model/workouts';

const props = defineProps<{
    user: User,
    workout: Workout
}>()

</script>

<template>
    <div class="card is-flex mb-3 is-flex-direction-row is-justify-content-center column is-two-thirds">
        
        <div class="card-content column is-three-fifths">
            <div class="media">
            <div class="media-left">
                <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="media-content">
                <p class="title is-4">{{ user.first }} {{ user.last }}</p>
                <p class="subtitle is-6">@johnsmith{{  }}</p>
            </div>
            </div>

            <div class="content">
            {{  workout.exercise }}
            <p>@bulmaio</p>
            <br> 
            {{ workout.when }}
            </div>
        </div>


        <div class="card-image is-flex is-justify-content-center column is-one-third">
            <figure class="image">
            <img class="cardImage" src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
        </div>
        <button class="button">x</button>
    </div>
</template>

<style scoped>
.cardImage {
    max-height: 13rem;
    max-width: 13rem;
}
</style>