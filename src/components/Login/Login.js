import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { InfoContext } from '../AuthProvider/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';
const Login = () => {
    const [error, setError] = useState('')
    const gProvider = new GoogleAuthProvider()
    const { signInWithEmail, forgetPass, googleSignIn } = useContext(InfoContext)

    const handleLogin = (event) => {

        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.pass.value
        console.log(email, password)

        signInWithEmail(email, password)
            .then(result => {

                const user = result.user;
                console.log(user)



            })
            .catch(error => {


                console.log(error)
                setError(error.message)

            })



    }



    const forget = (event) => {





    }


    const google = () => {

        googleSignIn(gProvider)
            .then(result => {

                const user = result.user;
                console.log(user)



            })
            .catch(error => {


                console.log(error)



            })


    }



    return (
        <div>


            {/* <div className="w-32 h-32 border-4 border-dashed rounded-full animate-spin mx-auto mt-32 mb-32 border-red-600"></div> : */}
            <div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">


                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  text-purple-800 font-semibold">Email</span>
                                    </label>
                                    <input onBlur={forget} type="text" placeholder="email" name='email' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-orange-200" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  text-purple-800 font-semibold">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='pass' className="input input-bordered shadow-inner shadow-zinc-600 hover:bg-orange-200" />

                                </div>
                                <div className='text-red-600'><p><small>{error}</small></p></div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <h1 className='text-purple-800 font-bold'>More login options</h1>
                            <div className="form-control mt-6 mx-auto mb-5 ">

                                <div>
                                    <button onClick={google} className="btn btn-circle btn-outline "><FaGoogle></FaGoogle></button>
                                </div>

                            </div>

                            <p><small>Are you new here? <Link to='/signup'><button className="btn btn-link btn-xs"><small>Register</small></button></Link> </small></p>

                            {/* <p> <button onClick={sentResetMail} className="btn btn-link btn-xs"><small>Forget password? Don't Worry Click Here </small></button></p> */}


                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Login;