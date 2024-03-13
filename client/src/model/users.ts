import info from '../data/users.json'

export interface  User {
    id: number,
    first: string,
    last: string,
    workouts: Object[]
}

export function getUsers(): User[] {
    return info.users
}