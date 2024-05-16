<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { searchUser } from "@/viewModel/newUser";
import { type User } from '../model/users'

const data = ref<User[]>()

const name = ref("");
const selected = ref();
const email = ref("")

function search(q: String){
searchUser(q)
.then((d) =>{
    data.value = d.data
    console.log("data")
    console.log(data.value)
})
.catch( e => console.log(e))
}

watch(selected, () => {
    email.value = selected.value.email
}, {deep: true})

</script>

<template>
    <div>
        <o-field label="Find a friend's email">
            <o-autocomplete
                v-model="name"
                placeholder="Type"
                @input="search"
                :data="data"
                field="first"
                @select="(option: String) => (selected = option)" />
        </o-field>
        <h1 class="title">Their email is: {{ email }}</h1>
    </div>
</template>

<style scoped>

</style>