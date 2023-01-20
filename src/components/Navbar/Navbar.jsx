import React from 'react'
import { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Portfolio'
        },
        {
            id: 4,
            link: 'Experience'
        },
        {
            id: 5,
            link: 'Contact'
        },
    ]
  return (
    <div className="flex justify-between items-center z-30 w-full h-[5rem] fixed px-4 text-white bg-black">
        <div>
            <h1 className='text-[2.5rem] logo font-signature ml-2'>Jyothi Swaroop</h1>
        </div>
        <ul className=' hidden navLinks'>
            {links.map(({id, link}) => (
                   <li key={id} className='cursor-pointer px-2 capitalize font-medium text-gray-500 hover:scale-105 duration-200'>{link}</li>
            ))}
        </ul>
        <div onClick={() => setToggleNav(!toggleNav)} className='cursor-pointer text-gray-500 z-10 pr-4 navBtn'>
            {toggleNav ? <FaTimes size={30} /> :  <FaBars size={30} /> }
        </div>
        <ul className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500  ${toggleNav ? 'open' : 'close'} `}>
            {links.map(({id, link}) => (
                <li key={id} className='px-4 capitalize cursor-pointer py-6 text-4xl hover:scale-105 duration-200'>{link}</li>
            ))}

        </ul>
    </div>
  )
}

export default Navbar