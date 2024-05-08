<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, watch } from 'vue';
import { refSession } from '../viewModel/session'
//import { users } from '../viewModel/users'
import { findUser, removeWorkout, isOpen } from '../viewModel/newUser';
import { type User, getUsers } from '../model/users'
import { useLogin } from '../viewModel/session';

//const user = ref(refSession().user)
const session = ref(refSession());
const user = ref(session.value.user)
console.log("In navbar")
console.log(user.value)
/*findUser(1)
.then((data) =>{
    user.value = data.data
}).catch(console.error);*/

const users =  ref([] as User[]);

getUsers()
.then( (data)=> {
    users.value= data.data;
    console.log('Users')
    console.log(users.value)
})
.catch( console.error );

function logOut(){
    useLogin().logout()
}
function logIn(u: User){
    useLogin().login(u)
}

const expandBurger = ref(false)
watch(session, () => {
    user.value = refSession().user
}, {deep: true})

</script>

<template>
    <div class="">
        <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                
                <RouterLink to="/" class="navbar-item">
                    <img src="../assets/vue.svg" alt="Vue">
                </RouterLink>

                <a role="button" @click="expandBurger=!expandBurger" :class="expandBurger ? 'is-active': ''" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" :class="expandBurger ? 'is-active': ''" class="navbar-menu">
                <div class="navbar-start">
                <RouterLink to="/My-Activity" class="navbar-item">
                    My Activity
                </RouterLink>

                <RouterLink to="/Friends-Activity" class="navbar-item">
                    Friends Activity
                </RouterLink>

                <RouterLink to="/Statistics" class="navbar-item">
                    Statistics
                </RouterLink>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                    Admin
                    </a>

                    <div class="navbar-dropdown is-right">
                        <RouterLink to="/Users" class="navbar-item">
                            Users
                        </RouterLink>
                    </div>
                </div>
                </div>

                <div class="navbar-end">
                <div class="navbar-item">
                    <p class="" v-if="user">
                        <strong class="has-text-white">{{ user.first }}</strong>
                    </p>
                    <div class="buttons">
                    <a class="button is-primary" v-if="!user">
                        <strong>Sign up</strong>
                    </a>
                    
                    <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link" v-if="!user">
                        <strong>Login</strong>
                    </a>
                    <a class="button is-primary" v-else @click="logOut()">
                        <strong>Log Out</strong>
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item" v-for="u in users" @click="logIn(u)">{{u.first}}</a>
                    </div>
                    </div>
                    
                    </div>
                </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
 .customWhite {
    color: white;
 }
</style>