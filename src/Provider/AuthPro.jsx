import React, { createContext, useState } from 'react'

const AuthContextCreate = createContext()

export default function AuthPro({ children }) {
    const [user, setuser] = useState(null)
    const [loadding, setloadding] = useState(true)


    const userInfo = {
        user,
        loadding
    }

    return (
        <AuthContextCreate.AuthPro value={userInfo}>
            {children}
        </AuthContextCreate.AuthPro>
    )
}
