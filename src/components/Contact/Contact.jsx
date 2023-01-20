import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white p-4'>
        <div className='flex flex-col mx-auto px-[3rem] pb-[3rem] h-full justify-center w-full'>
             <div >
                <h2 className='font-bold text-4xl'>Contact</h2>
                <div className='w-[8.7rem] mt-1 mb-6 h-1 bg-white' />
                <h4 className='text-gray-400 mb-5'>Submit the form below to get in touch with me!</h4>
            </div>
            <div className='flex justify-center items-center'>
                <form className='flex flex-col form w-full' action="https://getform.io/f/c80c0af3-489b-4f19-94d8-fb7b5a982c81" method='POST'>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md focus:outline-none' />
                    <input type="email" name='email' placeholder='Enter your email' className='p-2 my-4 bg-transparent border-2 rounded-md focus:outline-none' />
                    <textarea placeholder='Enter your message...' name="" rows="10" className=' text-white p-2 bg-transparent border-2 rounded-md focus:outline-none' ></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact