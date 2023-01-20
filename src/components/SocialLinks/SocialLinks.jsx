import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import './SocialLinks.css'
const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>LinkedIn <FaLinkedin size={30} /></>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>GitHub <FaGithub size={30} /></>
            ),
            href: 'https://github.com',
        },
        {
            id: 3,
            child: (
                <>Mail <HiOutlineMail size={30} /></>
            ),
            href: 'mailto:foo@gmail.com',
            style: 'rounded-br-md'
        },
      
    ]
  return (
    <div className='hidden socialLinks flex-col top-[35%] left-0 fixed'>
        <ul>

        {links.map(({id,child,href,style}) => (
            <li key={id} className={`flex justify-between items-center w-40 h-14 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-800 px-4 ${style ? style : ''}`}><a rel="noreferrer" target='_blank' className='flex justify-between items-center w-full  text-white' href={href}>{child}</a></li>
        ))}

            
        </ul>
    </div>
  )
}

export default SocialLinks