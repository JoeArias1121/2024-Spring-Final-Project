import type { DataEnvelope } from "./transportTypes";
import { type User } from '../model/users';

export const API_ROOT = "http://localhost:3000/api/v1";

export function rest(url: string){
    return fetch(url)
    .then(x => x.json())
}
export function patchRest(url: string, data: User){
    return fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then( x => x.json)
}

export function api<T>(action: string): Promise<DataEnvelope<T>>{
    return rest(`${API_ROOT}/${action}`);
}

export function updateWorkouts<T>(user: User){
    return patchRest(`${API_ROOT}/users/${user.id}`, user);
}