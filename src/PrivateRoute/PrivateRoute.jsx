import React, { useContext } from 'react'
import { AuthContextCreate } from '../Provider/AuthPro'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {
    const { user } = useContext(AuthContextCreate)
    if (user) {
        return children
    }
    return (
        <Navigate to='/login'></Navigate>
    )
}
