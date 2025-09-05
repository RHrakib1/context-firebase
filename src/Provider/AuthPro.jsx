import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { createContext, useState } from 'react'
import auth from '../Firebase/Firebase.config'

export const AuthContextCreate = createContext()

export default function AuthPro({ children }) {
    const [user, setuser] = useState(null)
    const [loadding, setloadding] = useState(true)

    const createRegisterAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginuser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    const userInfo = {
        createRegisterAccount,
        loginuser,
        user,
        loadding
    }

    return (
        <AuthContextCreate.Provider value={userInfo}>
            {children}
        </AuthContextCreate.Provider>
    )
}
