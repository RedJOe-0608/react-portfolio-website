import React from 'react'
import './Experience.css'
import reactImg from '../../assets/react.png'
import cssImg from '../../assets/css.png'
import htmlImg from '../../assets/html.png'
import githubImg from '../../assets/github.png'
import tailwindImg from '../../assets/tailwind.png'
import jsImg from '../../assets/javascript.png'
const Experience = () => {
    const techs = [
        {
            id: 1,
            name: 'HTML',
            src: htmlImg,
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            name: 'CSS',
            src: cssImg,
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            name: 'JavaScript',
            src: jsImg,
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            name: 'React',
            src: reactImg,
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            name: 'Tailwind CSS',
            src: tailwindImg,
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            name: 'GitHub',
            src: githubImg,
            style: 'shadow-gray-400'
        },
    ]
  return (
    <div className='w-full flex flex-col min-h-screen bg-gradient-to-b from-gray-800 to-black'>
        <div className='px-[3rem] pb-[3rem] h-full text-white'>
            <div >
                <h2 className='font-bold text-4xl'>Experience</h2>
                <div className='w-[12.1rem] mt-1 mb-6 h-1 bg-white' />
                <h4 className='text-gray-400 mb-5'>These are the technologies I work with!</h4>
            </div>
            <div className='py-5 experience-grid'>
                {techs.map(({id,name,src,style}) => (
                    <div key={id} className={"w-full rounded-md shadow-md hover:scale-105 duration-500 flex flex-col items-center justify-center p-4 h-[12rem]" + " " + style}>
                    <img src={src} className='w-[8rem] pb-3' alt="" />
                    <h4 className='text-white'>{name}</h4>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience