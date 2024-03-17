<script setup lang="ts">
import { ref, watch } from 'vue';
import { type User } from '../model/users';
import { type Workout } from '../model/workouts';
import { users, removeWorkout } from '../viewModel/users'

const props = defineProps<{
    user: User,
    workout: Workout
}>()

const emit = defineEmits<{
    remove: [id: number, workout: Workout]
}>()
 const user = ref(props.user)
 const workout = ref(props.workout)


/*watch(user, (newUser) => {
 user.value = newUser
},{deep: true})*/

</script>

<template>
    <div class="card is-flex mb-3 is-flex-direction-row is-justify-content-center column is-two-thirds">
        
        <div class="card-content column is-three-fifths">
            <div class="media">
            <div class="media-left">
                <figure class="image is-48x48">
                <img src="" alt="Placeholder image">
                </figure>
            </div>
            <div class="media-content">
                <p class="title is-4"> {{ props.user.first }} {{ props.user.last }}</p>
                <p class="subtitle is-6">{{ user.handle }}</p>
            </div>
            </div>

            <div class="content">
            <p>{{props.workout.message}}</p>
            <br> 
            {{ workout.when }}
            </div>
        </div>


        <div class="card-image is-flex is-justify-content-center column is-one-third">
            <figure class="image">
            <img class="cardImage" src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
        </div>
    </div>
</template>

<style scoped>
.cardImage {
    max-height: 13rem;
    max-width: 13rem;
}
</style>