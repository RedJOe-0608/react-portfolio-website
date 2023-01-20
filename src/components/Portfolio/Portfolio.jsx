import React from 'react'
import './Portfolio.css'
const Portfolio = () => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 flex flex-col text-white'>
        <div className='px-[3rem] pb-[3rem] h-full'>
             <div >
                <h2 className='font-bold text-4xl'>Portfolio</h2>
                <div className='w-[9.1rem] mt-1 mb-6 h-1 bg-white' />
                <h4 className='text-gray-400 mb-5'>Check out some of my work right here!</h4>
            </div>
        <div className='portfolio-grid px-10 py-5'>
            <div className='w-full border-solid border-red-500 border-2 flex items-center justify-center h-[12rem]'>Hi</div>
            <div className='w-full border-solid border-red-500 border-2 flex items-center justify-center h-[12rem]'>Hi</div>
            <div className='w-full border-solid border-red-500 border-2 flex items-center justify-center h-[12rem]'>Hi</div>
            <div className='w-full border-solid border-red-500 border-2 flex items-center justify-center h-[12rem]'>Hi</div>
            <div className='w-full border-solid border-red-500 border-2 flex items-center justify-center h-[12rem]'>Hi</div>
            <div className='w-full border-solid border-red-500 border-2 flex items-center justify-center h-[12rem]'>Hi</div>
          
        </div>
        <div></div>
        </div>
       
    </div>
  )
}

export default Portfolio