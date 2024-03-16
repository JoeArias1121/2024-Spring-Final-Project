import info from '../data/users.json'
import { type Workout } from  './workouts';

export interface  User {
    id: number,
    first: string,
    last: string,
    workouts: Workout[]
}

export function getUsers(): User[] {
    return info.users
}
