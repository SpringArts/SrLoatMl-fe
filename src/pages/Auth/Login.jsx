import { Link } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { login } from '../../services/auth/users'
import { addUser } from '../../store/reducers/userReducer'
import toast from 'react-hot-toast'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
            dispatch(addUser(data))
            navigate("/")
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
        e.preventDefault()
        mutate({ email, password })
    }

    return (
        <>
            <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
                <div className='max-w-lg mx-auto text-center'>
                    <h1 className='text-2xl font-bold sm:text-3xl'>
                        Get started today!
                    </h1>
                    <p className='mt-4 text-gray-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et libero nulla eaque error neque ipsa culpa autem, at
                        itaque nostrum!
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className='max-w-md mx-auto mt-8 mb-0 space-y-4'
                >
                    <div>
                        <label htmlFor='email' className='sr-only'>
                            Email
                        </label>
                        <div className='relative'>
                            <input
                                type='email'
                                className='w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12'
                                placeholder='Enter email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className='absolute inset-y-0 grid px-4 end-0 place-content-center'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-4 h-4 text-gray-400'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='password' className='sr-only'>
                            Password
                        </label>
                        <div className='relative'>
                            <input
                                type='password'
                                className='w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12'
                                placeholder='Enter password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className='absolute inset-y-0 grid px-4 end-0 place-content-center'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-4 h-4 text-gray-400'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                                    />
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm text-gray-500'>
                            No account?
                            <Link to='/register' className='underline'>
                                Sign up
                            </Link>
                        </p>
                        <button
                            type='submit'
                            disabled={isLoading}
                            className='inline-block px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg'
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
