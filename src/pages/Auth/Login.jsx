import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { login } from '../../services/auth/users'
import { addUser } from '../../store/reducers/userReducer'
import toast from 'react-hot-toast'
import { Facebook, Github, Instagram, Mail } from 'lucide-react';
import axios from 'axios'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSpin, setIsSpin] = useState(true)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.user)
    const token = useSelector((state) => state.user.token)

    const { mutate, isLoading } = useMutation({
        mutationFn: ({ email, password }) => {
            return login({ email, password })
        },
        onSuccess: (data) => {
            console.log(data)
            setIsSpin(true)
            dispatch(addUser(data))
            navigate('/')
        },
        onError: (error) => {
            toast.error(error.message)
            console.log(error)
        }
    })

    useEffect(() => {
        if (user && token && user !== undefined && token !== undefined) {
            navigate('/')
        }
    }, [navigate, user])

    const handleSubmit = (e) => {
        setIsSpin(false)
        e.preventDefault()
        mutate({ email, password })
    }

    const handleOauth = async (provider) => {
        try {
            window.location.href = `http://127.0.0.1:8000/api/auth/${provider}`;

        } catch (error) {
            console.error('Authentication error:', error);
        }
    };


    return (
        <>
            <div className='flex justify-center items-center mx-auto min-h-screen'>
                <div className='px-4 py-16 mx-auto sm:px-6 lg:px-8 shadow-lg hover:shadow-gray-300 border rounded-2xl'>
                    <div className='max-w-lg mx-auto text-center'>
                        <h1 className='text-2xl font-bold sm:text-3xl'>
                            Login Form
                        </h1>
                    </div>
                    <form
                        className='max-w-md mt-8 mb-0 space-y-6'
                    >
                        <div>
                            <label htmlFor='email' className='sr-only'>
                                Email
                            </label>
                            <div className='relative'>
                                <input
                                    type='email'
                                    className='w-full p-4 text-sm border-gray-200 border rounded-lg shadow-sm pe-12'
                                    placeholder='Enter email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                            </div>
                        </div>
                        <div>
                            <label htmlFor='password' className='sr-only'>
                                Password
                            </label>
                            <div className='relative'>
                                <input
                                    type='password'
                                    className='border w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12'
                                    placeholder='Enter password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className=''>
                            {isSpin ? (
                                <button
                                    type='submit'
                                    disabled={isLoading}
                                    className='min-w-full px-5 py-3 text-sm font-medium text-white bg-black hover:bg-gray-700 rounded-lg'
                                >

                                    Sign in
                                </button>
                            ) : (
                                <button type="button" onSubmit={handleSubmit} class="min-w-full px-5 py-3 text-sm font-medium text-white bg-black hover:bg-gray-700 rounded-lg flex items-center justify-center" disabled>
                                    <svg class="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
                                    Processing...
                                </button>
                            )
                            }

                        </div>
                    </form>
                    <div className='flex flex-row justify-center gap-7 mt-5'>

                        <button onClick={() => handleOauth('facebook')} className='border rounded-full p-2 bg-black hover:bg-gray-800 hover:cursor-pointer'>
                            <Facebook className=' text-white' />
                        </button>

                        <button onClick={() => handleOauth('github')} className='border rounded-full p-2 bg-black hover:bg-gray-800 hover:cursor-pointer'>
                            <Github className=' text-white' />
                        </button>

                        <button onClick={() => handleOauth('instragram')} className='border rounded-full p-2 bg-black hover:bg-gray-800 hover:cursor-pointer'>
                            <Instagram className=' text-white' />
                        </button>
                        <button onClick={() => handleOauth('google')} className='border rounded-full p-2 bg-black hover:bg-gray-800 hover:cursor-pointer'>
                            <Mail className=' text-white' />
                        </button>
                    </div>

                </div >
            </div >
        </>
    )
}
