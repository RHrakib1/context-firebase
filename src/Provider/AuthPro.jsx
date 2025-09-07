import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/Firebase.config'

export const AuthContextCreate = createContext()

export default function AuthPro({ children }) {
    const [user, setuser] = useState(null)
    const [loadding, setloadding] = useState(true)

    const createRegisterAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginuser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setuser(currentuser)
            console.log('obzarving current user', currentuser)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const userInfo = {
        createRegisterAccount,
        loginuser,
        user,
        loadding,
        logout
    }

    return (
        <AuthContextCreate.Provider value={userInfo}>
            {children}
        </AuthContextCreate.Provider>
    )
}
