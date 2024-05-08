import type { DataEnvelope } from "../model/transportTypes";
import type { User } from "@/model/users";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import * as myFetch from "../model/myFetch";

const session  = ref({
    user: null as User | null
});
export function useLogin() {
    const router = useRouter();
    return {
        login(user: User) {
            session.value.user = user;
            console.log("in session file")
            console.log(session.value.user)
            //1router.push("/");
        },
        logout() {
            session.value.user = null;
            console.log('logged out ')
            console.log(session.value.user)
            console.log("end")
           //router.push("/");
        }
    };
}

export const refSession = () => session.value;

export function api<T>(action: string): Promise< DataEnvelope<T> >{
    return myFetch.api<T>(action);
}

export function updateWorkouts<T>(user: User){
    return myFetch.updateWorkouts<T>(user);
}

