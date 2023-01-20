import React from 'react'
import heroImage from '../../assets/heroImage.jpg'
import './About.css'
const About = () => {
  return (
    <section name='about' className='w-full about-section text-white bg-gradient-to-b from-gray-800 to-black'>
        <div className='px-[3rem] pb-[3rem] h-full flex flex-col justify-center'>
             <div className='w-[14rem] mx-auto relative about-img-container'>
                <img src={heroImage} className='about-img relative w-[100%] mx-auto rounded-2xl' alt="my profile" />
            </div>
            <div >
                <h2 className='font-bold text-4xl'>About</h2>
                <div className='w-[6.6rem] mt-1 mb-6 h-1 bg-white' />
            </div>
            <div className='text-gray-400 max-w-2/3'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, aliquam sit. Minima deleniti rem harum corporis quam sed ipsam nisi impedit inventore quos excepturi quibusdam animi praesentium non mollitia, quis neque veniam numquam adipisci voluptatibus ab repellat vitae? Officia molestiae perspiciatis et! Aliquam rerum, architecto necessitatibus deleniti ea temporibus at.</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ullam corporis. Reiciendis atque blanditiis expedita explicabo qui, incidunt quae nam enim, alias iste reprehenderit harum itaque recusandae cupiditate quod deserunt quisquam fugit ut repudiandae ipsam veritatis. Ipsa sed maxime amet tempora officiis numquam odit? Dolore quibusdam eos voluptas odit explicabo.</p>
            </div>
          </div>
    </section>
  )
}

export default About