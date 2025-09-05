import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContextCreate } from './Provider/AuthPro'

export default function Register() {

    const { createRegisterAccount } = useContext(AuthContextCreate)
    const heandlesubmit = (e) => {
        e.preventDefault()
        const shortData = e.target
        const email = shortData.email.value
        const password = shortData.password.value
        const objdata = { email, password }
        console.log(objdata)


        createRegisterAccount(email, password)
            .then(result => {
                console.log(result.user)
            })
            .then(error => {
                console.log(error)
            });

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register First!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={heandlesubmit}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input name='email' type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input name='password' type="password" className="input" placeholder="Password" />
                                    <button className="btn btn-neutral mt-4">Register</button>
                                    <p>You have an account?so please <Link to='/login'><span className='underline font-bold text-blue-400 text-sm'>Login</span></Link> </p>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
