import type { DataEnvelope } from "./transportTypes";

export const API_ROOT = "http://localhost:3000/api/v1";

export function rest(url: string){
    return fetch(url)
    .then(x => x.json())
}

export function api<T>(action: string): Promise<DataEnvelope<T>>{
    return rest(`${API_ROOT}/${action}`);
}