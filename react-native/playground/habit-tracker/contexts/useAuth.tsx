import { account } from "@/libs/appwrite";
import { createContext } from "react";
import { ID } from "react-native-appwrite";

type AuthContextType = {
    // user: Models.User<Models.Preferences> | null;
    signUp: (email: string, password: string) => Promise<string | null>;
    signIn: (email: string, password: string) => Promise<string | null>;
    // signOut: () => Promise<void>;
    // isAuthenticated: boolean;
    // isLoading: boolean;
    // error: string | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: {children: React.ReactNode}) {    
    const signUp = async (email: string, password: string) => {
        try {
            await account.create(ID.unique(), email, password);
            await signIn(email, password);        
            return null;
        } catch (error) {
            if(error instanceof Error) {
                return error.message;
            }
            return "An unknown error occurred while signing up";
        }
    }

    const signIn = async (email: string, password: string) => {
        try {
            await account.createEmailPasswordSession(email, password);
            return null;
        } catch (error) {
            if(error instanceof Error) {
                return error.message;
            }
            return "An unknown error occurred while signing in";
        }
    }

    return <AuthContext.Provider value={{        
        signUp,
        signIn        
    }}>{children}</AuthContext.Provider>
}