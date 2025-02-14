import React from 'react'
import { assets } from '../assets/admin_assets/assets'

const Navbar = () => {
    return (
        <div className='flex items-center py-2 px-[4%] justify-between'>
            <img src={assets.logo} alt="" className='w-[max(10%,80px)]'/>
            <button className='px-5 py-2 text-xs text-white bg-gray-600 rounded-full sm:px-7 sm:py-2 sm:text-sm'>Logout</button>
        </div>
    )
}

export default Navbar