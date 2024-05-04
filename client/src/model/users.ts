import { api } from "../viewModel/session"
import { type Workout } from  './workouts';

export interface  User {
    id: number,
    first: string,
    last: string,
    email: string,
    handle: string,
    admin: boolean,
    workouts: Workout[]
}
//async
export function getUsers() {
    //const data = await api<User[]>("users");
    return api<User[]>("users");
}
