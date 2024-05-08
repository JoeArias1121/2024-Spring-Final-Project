import { ref } from 'vue';
import { type Workout } from '../model/workouts'
import { type User, getUsers } from '../model/users'
import { api } from "../viewModel/session"

export const rKey = ref(10)
//export const users = ref(getUsers())
// ----------------------------------------------

export function findUser(id: number) {
    return api<User>(`users/${id}`) ;//this goes into sessions to access the api function that returns to us a promise
    //which wraps a DataEnvelope
}


export const isOpen = ref(false)

export const getKey = (): number => {
    const temp = rKey.value
    rKey.value += 1;
    return temp
}

export const removeUser = (id: number) => {
    //users.value = users.value.filter((user: User) => user.id !== id)
}

export const addWorkout = (id: number, workout: Workout) => {
    //users.value[id-1].workouts.unshift(workout)
}

export const removeWorkout = (id: number,workout: Workout) => {
    //users.value[id-1].workouts = users.value[id-1].workouts.filter((w)=> w != workout)
} 