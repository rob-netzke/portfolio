import React from 'react'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'

export default function Sidenav() {
    const [nav, setNav] = useState(false)
    
    function handleNav() {
        setNav(!nav)
    }
    
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[100] md:hidden'/>
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-[20]'>
                        <a href="#main" onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full m-2 p-4 shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20}/>
                            <span className='pl-4'>Home</span>
                        </a>
                        <a href="#skills" onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full m-2 p-4 shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <GrProjects size={20}/>
                            <span className='pl-4'>Skills</span>
                        </a>
                        <a href="#projects" onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full m-2 p-4 shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineProject size={22}/>
                            <span className='pl-4'>Projects</span>
                        </a>
                        <a href="#contact" onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full m-2 p-4 shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail size={20}/>
                            <span className='pl-4'>Contact</span>
                        </a>
                    </div>
                ) : (
                    ""
                )
            }
            <div className="md:block hidden fixed top-[25%] z-10 pl-4">
                <div className='flex flex-col'>
                    <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineHome size={20}/>
                    </a>
                    <a href="#skills" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <GrProjects size={20}/>
                    </a>
                    <a href="#projects" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineProject size={22}/>
                    </a>
                    <a href="#contact" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineMail size={20}/>
                    </a>
                </div>
            </div>
        </div>
    )
}
