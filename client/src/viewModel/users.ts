import { ref } from  'vue';
import { type Workout, getWorkouts} from '../model/workouts'
import { type User, getUsers } from '../model/users'

export const users = ref(getUsers())

