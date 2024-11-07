'use client'

import { createContext, useContext, useState } from "react";
import { IUser } from "../interfaces/user.interdace";
import { api } from "../services/api";
import { useRouter } from "next/navigation";
import { deleteCookies, setCookies } from "@/app/actions";

interface AuthContextProps {
    user?: IUser;
    loadUser(): Promise<void>;
    signin({ email, password }): Promise<boolean | void>;
    signout(): Promise<boolean | void>;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children, user: initialUser }: { user?: IUser, children }) {
    const router = useRouter();
    const [user, setUser] = useState<IUser>(initialUser);

    const signin = async (body: { email: string, password: string }) => {
        try {
            const { user, access_token } = await api.post('auth/signin', body).then(res => res.data);

            await setCookies('pertos_vehicles.access_token', access_token);
            await setCookies('pertos_vehicles.user', JSON.stringify(user));

            if (access_token) api.defaults.headers['Authorization'] = `Bearer ${access_token}`;
            
            setUser(user);
            router.push('/');
        } catch (error) {
            alert(error.message);
        }
    }

    const signout = async () => {
        await deleteCookies('pertos.user');
        await deleteCookies('pertos.access_token');
        setUser(null);

        router.refresh();
    }

    const loadUser = async () => {

    }

    return (
        <AuthContext.Provider value={{
            user,
            loadUser,
            signin,
            signout,
        }}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);