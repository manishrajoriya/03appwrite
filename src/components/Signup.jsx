import React from 'react'
import { useForm } from 'react-hook-form';
import authService from '../appwrite/auth';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import Logo from './Logo'

function Signup() {
   const {register, handleSubmit} = useForm()
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [error, setError] = React.useState("")

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(Login(userData));
                navigate("/all-posts")
            }
        } catch (error) {
            setError(error.message)
        }
    }


    
  return (
    <div className="flex items-center justify-center">
    <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="flex justify-center mb-2">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-2xl font-bold leading-tight text-center">Sign up to create account</h2>
                <p className="mt-2 text-base text-center text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium transition-all duration-200 text-primary hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="mt-8 text-center text-red-600">{error}</p>}

     <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                        />
                        <input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                        <input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,})}
                        />
                        <button type="submit" className="w-full">
                            Create Account
                        </button>
                    </div>
                </form>
                </div>
                </div>
  )
}


export default Signup