import React from 'react'

const Login = () => {
    return (
        <div className='flex items-center justify-center w-full min-h-screen'>
            <div className='max-w-md px-8 py-6 bg-white rounded-lg shadow-md'>
                <h1 className='mb-4 text-2xl font-bold'>Admin Panel</h1>
                <form>
                    <div className='mb-3 min-w-72'>
                        <p className='mb-2 text-sm font-medium text-gray-700'>Email Address</p>
                        <input className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none' type="email" placeholder='your@email.com' required />
                    </div>
                    <div className='mb-3 min-w-72'>
                        <p className='mb-2 text-sm font-medium text-gray-700'>Password</p>
                        <input className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none' type="password" placeholder='Enter your password' required />
                    </div>
                    <button className='w-full px-4 py-2 mt-2 text-white bg-black rounded-md' type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login