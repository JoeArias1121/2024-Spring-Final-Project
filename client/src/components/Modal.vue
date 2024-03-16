<script setup lang="ts">
import { ref, watch } from 'vue';
import { type User } from '../model/users';
import { type Workout } from '../model/workouts';
import {isOpen} from '../viewModel/users'
/*
const props = defineProps<{
}>()*/
const workout = ref({} as Workout)

watch(workout, () => {

}, {deep: true})

</script>

<template>
    <div class="modal" :class=" isOpen ? 'is-active' : '' " > 
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" @click="isOpen=false" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
          <label class="label">Exercise</label>
          <div class="control">
            <div class="select">
              <select>
                <option>Running</option>
                <option>Biking</option>
                <option>Swimming</option>
              </select>
            </div>
          </div>

          <div class="field">
            <label class="label">Duration in minutes</label>
            <div class="control">
              <input class="input" v-model="workout.duration" type="number" placeholder="0">
            </div>
          </div>

          <div class="field">
            <label class="label">Distance in miles</label>
            <div class="control">
              <input class="input" v-model="workout.distance" type="number" placeholder="0">
            </div>
          </div>

          <div class="field">
            <label class="label">Pace in mph</label>
            <div class="control">
              <input class="input" v-model="workout.pace" type="number" placeholder="0">
            </div>
          </div>

          <div class="field">
            <label class="label">Calories burnt</label>
            <div class="control">
              <input class="input" v-model="workout.calories" type="number" placeholder="0">
            </div>
          </div>

          <div class="field">
            <label class="label">When</label>
            <div class="control">
              <input class="input" v-model="workout.when" type="text" placeholder="Today">
            </div>
          </div>
          

        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="isOpen=false">Save changes</button>
          <button class="button" @click="isOpen=false">Cancel</button>
        </footer>
      </div>
    </div>
</template>

<style scoped>

</style>