import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContextCreate } from './Provider/AuthPro'
import { signOut } from 'firebase/auth'

export default function Navbar() {
    const { user, logout } = useContext(AuthContextCreate)
    const hendlesignout = () => {
        logout()
            .then(() => console.log('successfully sign out'))
            .catch((error) => {
                console.log(error)
            })

    }

    const navLink = <>
        <Link to='/'><li><a>Home</a></li></Link>
        <Link to='/register'><li><a>Register Now</a></li></Link>
        <Link to='/login'><li><a>Login</a></li></Link>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a onClick={hendlesignout} className="btn">SignOut</a>
                    <a className="btn">Fire</a>
                </div>
            </div>
        </div>
    )
}
