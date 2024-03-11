<script setup lang="ts">
import info from '../data/users.json'

const users = info.users
const userId = 1
// if the id matches the current user then return information for the current user---- this function is to be used by filter to let it know which iteration is the right user
const checkUser = (user:any) => {
    return userId===user.id
}
// i get index [0] because filter returns an array and there will only be one user in the array
const user = users.filter(checkUser)[0]

const workouts = user.workouts


</script>

<template>
    <div class="is-flex is-flex-direction-column">
        <div class="is-flex is-justify-content-center" >
            <p>{{ workouts }}</p>
        </div>
        <div class="is-flex is-justify-content-space-between">
            <h1>Miles Baby</h1>
            <h1>Taking forever</h1>
        </div>
        <div class="is-flex is-justify-content-space-between">
            <h1>Get Faster</h1>
            <h1>Not enough for the CheeseBurger</h1>
        </div>
        <p>{{ user }}</p>
    </div>
</template>

<style scoped>

</style>