import info from "../data/users.json"

const users = info.users

export interface Workout {
    exercise: string, 
    duration: number,
    distance: number,
    pace: number,
    calories: number,
    when: string
}

export function getWorkouts(id: number): Workout[]{
    return users[id-1].workouts
}