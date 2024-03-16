import { ref } from  'vue';
import { type Workout, getWorkouts} from '../model/workouts'
import { type User, getUsers } from '../model/users'

export const users = ref(getUsers())
export const findUser = (id: number): User => {
    // @ts-ignore
    return users.value.find((user: User) => user.id === id);
}

export const isOpen = ref(false)


export const removeWorkout = (id: number,workout: Workout) => {
    users.value[id-1].workouts = users.value[id-1].workouts.filter((w)=> w != workout)
} 
