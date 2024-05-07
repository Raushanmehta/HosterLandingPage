import React from 'react'
import { FaBars } from "react-icons/fa6";

const Header = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex item-center justify-center gap-2'>
                <img src='./assets/Logo.svg' alt='logo' />
                <button className='bg-gradient-to-r from-orange-400 to bg-red-400 text-xs text-white px-2 py-1.5 rounded-full lg:px-4 lg:py-3'>Hoster is hiring</button>

            </div>

            <ul className='hidden lg:flex justify-between items-center font-leto text-gray-400 gap-6'>
                <li><a href="#">Plan</a></li>
                <li><a href="#">Find Domain</a></li>
                <li><a href="#">Why Hoster</a></li>
            </ul>
            <div className='hidden lg:flex justify-between items-center font-leto gap-6'>
                <a className='text-gray-400 ' href="#">Sign In</a>
                <button className='rounded-md px-2 py-2 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
            </div>

            <div className='lg:hidden'>
                <FaBars />
            </div>
        </div>
    )
}

export default Header