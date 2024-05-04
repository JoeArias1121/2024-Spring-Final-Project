import type { DataEnvelope } from "../model/transportTypes";
import type { User } from "@/model/users";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import * as myFetch from "../model/myFetch";

const session  = reactive({
    user: null as User | null
});
export function useLogin() {
    const router = useRouter();
    return {
        login(user: User) {
            session.user = user;
            router.push("/");
        },
        logout() {
            session.user = null;
           router.push("/");
        }
    };
}

export const refSession = () => session;

export function api<T>(action: string): Promise< DataEnvelope<T> >{
    return myFetch.api<T>(action);
}


