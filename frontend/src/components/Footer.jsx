import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='w-32 mb-5' alt="" />
                <p className='w-full text-gray-600 md:w-2/3'>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit nibh feugiat lectus bibendum pulvinar placerat, nisi vestibulum facilisi congue dapibus. Suscipit mattis volutpat enim feugiat auctor luctus a quis eros hendrerit cubilia
                </p>
            </div>
        
            <div>
                <p className='mb-5 text-xl font-medium'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+94-11-978-4848</li>
                    <li>contact@thevfashion.com</li>
                </ul>
            </div>
        </div>
        
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ thevfashion.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer