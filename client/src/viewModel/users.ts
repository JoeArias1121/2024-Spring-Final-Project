import { ref } from  'vue';
import { type Workout, getWorkouts} from '../model/workouts'
import { type User, getUsers } from '../model/users'

export const rKey = ref(10)
export const users = ref(getUsers())
export const findUser = (id: number): User => {
    // @ts-ignore
    return users.value.find((user: User) => user.id === id);
}

export const isOpen = ref(false)

export const getKey = (): number => {
    const temp = rKey.value
    rKey.value += 1;
    return temp
}

export const removeUser = (id: number) => {
    users.value = users.value.filter((user: User) => user.id !== id)
}

export const addWorkout = (id: number, workout: Workout) => {
    users.value[id-1].workouts.unshift(workout)
}

export const removeWorkout = (id: number,workout: Workout) => {
    users.value[id-1].workouts = users.value[id-1].workouts.filter((w)=> w != workout)
} 
