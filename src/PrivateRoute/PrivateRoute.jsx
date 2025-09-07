import React, { useContext } from 'react'
import { AuthContextCreate } from '../Provider/AuthPro'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {
    const { user, loadding } = useContext(AuthContextCreate)
    if (loadding) {
        return <progress className="progress w-56"></progress>
    }
    else if (user) {
        return children
    }
    return (
        <Navigate to='/login'></Navigate>
    )
}
