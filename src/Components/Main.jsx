import React from 'react'
import Wave from '../assets/images/jeep.jpeg'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
export default function Main() {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover' src={Wave}/>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/10'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
              <h1 className='sm:text-5xl text-3xl font-bold'>Welcome to my portfolio</h1>  
              <h2 className='flex sm:text-3xl text-2xl pt-4'>I'm a
                <TypeAnimation className='text-black' sequence={[' Software Engineer', 2000, 'UI/UX Enthusiast', 2000, 'Machine Learning Engineer', 2000, 'Options Trader', 2000, 'Padres Fan', 1500, ' Bitcoiner', 1400]}
                               wrapper='div' cursor={true} repeat={Infinity} style={{fontSize: '1em', paddingLeft: '7px'}}/>
              </h2>
              <div className='flex justify-between pt-6 max-w-[75px] w-full'>
                <a href="https://github.com/rob-netzke" className='hover:scale-110'><FaGithub className='cursor-pointer' size={25}/></a>
                <a href="https://www.linkedin.com/in/robert-netzke/" className='hover:scale-110'><FaLinkedin className='cursor-pointer' size={25}/></a>
              </div>
            </div>
        </div>
    </div>
  )
}
