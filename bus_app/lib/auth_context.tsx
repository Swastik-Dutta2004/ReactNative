import React, { createContext } from "react";
import { ID, Models } from "react-native-appwrite";
import { account } from "./appwrite";

type AuthContextType = {
    user: Models.User<Models.Preferences> | null
    signUp: (email: string, Password: string) => Promise<void>
    signIn: (email: string, Password: string) => Promise<void>
}

const AuthContext = createContext(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const signUp = async(email: string, Password: string) => {
        try{
            await account.create(ID.unique(), email, Password)
        }catch(error){

        }
    }
    const signIn = async(email: string, Password: string) => {
        try{
            await account.create(ID.unique(), email, Password)
        }catch(error){

        }
    }
    return (
        <AuthContext.Provider value={{user, signUp, signIn}}>
            {children}
        </AuthContext.Provider>)
}

export function useAuth() {

}