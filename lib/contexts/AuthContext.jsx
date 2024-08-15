"use client"

import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const { push } = useRouter();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                push('/admin');
            } else {
                setUser(null);
            }
            setIsLoading(false)
        });
        return () => unsub();
    }, [])

    const handleSignInWithGoogle = async () => {
        setIsLoading(true)
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
            
        } catch (error) {
            setError(error?.message)
        }
        setIsLoading(false)
    }

    const handleLogout = async () => {
        setIsLoading(true)
        try {
            await signOut(auth);
        } catch (error) {
            setError(error?.message)
        }
        setIsLoading(false)
    }

    return <AuthContext.Provider
        value={{
            user,
            isLoading,
            error,
            handleSignInWithGoogle,
            handleLogout,
        }}
    >
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);