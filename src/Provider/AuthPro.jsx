import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/Firebase.config'

export const AuthContextCreate = createContext()

export default function AuthPro({ children }) {
    const [user, setuser] = useState(null)
    const [loadding, setloadding] = useState(true)
    const provaider = new GoogleAuthProvider()

    const googleAccount = () => {
        return signInWithPopup(auth, provaider)
    }

    const createRegisterAccount = (email, password) => {
        setloadding(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const loginuser = (email, password) => {
        setloadding(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logout = () => {
        setloadding(true)
        return signOut(auth)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setuser(currentuser)
            console.log('obzarving current user', currentuser)
            setloadding(false)
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
        logout,
        googleAccount
    }

    return (
        <AuthContextCreate.Provider value={userInfo}>
            {children}
        </AuthContextCreate.Provider>
    )
}
