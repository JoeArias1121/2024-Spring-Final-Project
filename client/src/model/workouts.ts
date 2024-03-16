import info from "../data/users.json"

const users = info.users

export interface Workout {
    key: number
    id:  number,
    exercise: string, 
    duration: number,
    distance: number,
    pace: number,
    calories: number,
    message: string,
    when: string
}

export function getWorkouts(id: number): Workout[]{
    return users[id-1].workouts
}