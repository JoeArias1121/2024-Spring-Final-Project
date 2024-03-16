<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { logged } from '../viewModel/session'
import { users } from '../viewModel/users'

const islogged = ref(logged.value.userId-1)
const expandBurger = ref(false)
const changeUser = (id: number) => {
    logged.value.userId = id-1
    logged.value.loggedIn =true
}

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
                    <p class="" v-if="logged.loggedIn">
                        <strong class="has-text-white">{{ users[logged.userId].first }}</strong>
                    </p>
                    <div class="buttons">
                    <a class="button is-primary" v-if="!logged.loggedIn">
                        <strong>Sign up</strong>
                    </a>
                    
                    <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link" v-if="!logged.loggedIn">
                        <strong>Login</strong>
                    </a>
                    <a class="button is-primary" v-else @click="logged.loggedIn=false">
                        <strong>Log Out</strong>
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item" v-for="user in users" @click="changeUser(user.id)">{{user.first}}</a>
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