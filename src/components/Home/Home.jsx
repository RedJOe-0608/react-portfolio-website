import React from 'react'
import heroImage from '../../assets/heroImage.jpg'
import { FiArrowRight } from "react-icons/fi";
import './Home.css'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import reactImg from '../../assets/react.png'
import cssImg from '../../assets/css.png'
import htmlImg from '../../assets/html.png'
const Home = () => {
  return (
    <main name='home' className='w-full  pt-[5rem]  bg-gradient-to-b from-black via-black to-gray-800 '>
        <img src={reactImg} className='w-[5rem] opacity-20 top-16 right-2 absolute ' alt="" />
        <img src={cssImg} className='w-[5rem] opacity-20 absolute bottom-5 right-[40%]' alt="" />
        <div className='max-w-[1120px] z-[-10] px-4 h-[calc(100vh-5rem)] flex flex-col justify-center mx-auto items-center md:flex-row'>
            
            
           
            <div className='flex text-div flex-col justify-center h-full px-3'>
                <h2 className='font-bold text-[3rem] relative z-0 sm:text-[3.5rem] lg:text-7xl  text-white '>I am a Full-Stack Developer.
                 <img src={htmlImg} className='w-[5rem] opacity-20 absolute top-[-1.5rem] left-[-0.5rem]' alt="" />
                   
                </h2>
                
                <div className='flex flex-col my-[1.35rem]  text-gray-500'>
                <p className='max-w-[30rem] lg:max-w-[37rem] relative text-[1rem]'>
                    <span className='absolute left-[-1.25rem]'>//</span>Looking for somebody who can build cool responsive websites? From awesome landing pages, to Full-Stack applications, what thou shalt seek, will be delivered!
              
                </p>
                

                </div>
                <div>
                    <button type='button' className='group text-white w-fit px-4 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>Portfolio <span className='group-hover:rotate-90 duration-300 pl-2'><FiArrowRight size={17} /> </span> </button>
                </div>
                <div className='flex items-center justify-start main-links my-5'>
                  <span className='pr-[1.4rem] cursor-pointer text-white hover:text-[#3da9fc] duration-200'><FaGithub size={25} /></span>   
                  <span className='pr-[1.4rem] cursor-pointer text-white hover:text-[#3da9fc] duration-200'><FaLinkedin size={25}/></span>   
                  <span className='pr-[1.4rem] cursor-pointer text-white hover:text-[#3da9fc] duration-200'><HiOutlineMail size={25}/></span>   
                    
                    
                </div>
            </div>
            <div className='w-[20rem] relative hero-img'>
                <img src={heroImage} className='hidden img relative w-[100%] mx-auto rounded-2xl' alt="my profile" />
            </div>
        </div>
    </main>
  )
}

export default Home