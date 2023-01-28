import React from 'react'
import Skyline from '../assets/images/skyline.jpeg'
import { FaReact, FaPython } from 'react-icons/fa'
import { SiTailwindcss, SiTensorflow, SiPytorch, SiPandas, SiNumpy, SiScikitlearn, SiVisualstudio, SiElectron, SiNodedotjs, SiBootstrap, SiVite, SiExpo, SiTypescript, SiOpencv, SiAwsamplify, SiAmazonaws, SiAmazons3, SiHtml5} from 'react-icons/si'

export default function Skills() {
  return (
    <div id='skills' className='w-full h-screen flex relative z-[0] justify-center items-center lg:justify-between'>
        <img className='w-full h-screen object-cover' src={Skyline}/>
        <div className='max-w-[700px] absolute bg-slate-900  shadow-xl shadow-gray-400 rounded-2xl flex flex-col justify-center items-center py-2 px-6 lg:ml-[25%] z-[1]'>
            <h1 className='text-white flex sm:text-2xl text-xl justify-center items-center'>React <FaReact className="animate-spin-slow m-5" size={40}/></h1>
            <h1 className='text-white flex sm:text-2xl text-xl justify-center items-center'>Tailwind <SiTailwindcss className="animate-bounce-slow m-5" size={40}/></h1>
            <h1 className='text-white flex sm:text-2xl text-xl justify-center items-center'>Python <FaPython className="hover:animate-ping m-5" size={40}/></h1>
            <h1 className='text-white flex sm:text-2xl text-xl justify-center items-center'>Tensorflow <SiTensorflow className="animate-pulse m-5" size={40}/></h1>
            <h1 className='text-white flex sm:text-2xl text-xl justify-center items-center'>PyTorch <SiPytorch className="animate-pulse m-5" size={40}/></h1>
        </div>
        <div className='absolute flex items-center justify-center m-[60%] hidden lg:block z-[2]'>
            <SiPandas className="text-white m-10" size={40}/>
            <SiNumpy className="text-white m-10" size={40}/>
            <SiTypescript className="text-white m-10" size={40}/>
            <SiNodedotjs className="text-white  m-10" size={40}/>
            <SiScikitlearn className="text-white  m-10" size={40}/>
        </div>
        <div className='absolute flex items-center justify-between m-[70%] hidden lg:block z-[2]'>
            <SiElectron className="text-white m-10" size={40}/>
            <SiBootstrap className="text-white m-10" size={40}/>
            <SiVite className="text-white m-10" size={40}/>
            <SiExpo className="text-white m-10" size={40}/>
            <SiVisualstudio className="text-white m-10" size={40}/>
        </div>
        <div className='absolute flex items-center justify-between m-[80%] hidden lg:block z-[2]'>
            <SiOpencv className="text-white m-10" size={40}/>
            <SiAwsamplify className="text-white m-10" size={40}/>
            <SiAmazons3 className="text-white m-10" size={40}/>
            <SiHtml5 className="text-white m-10" size={40}/>
            <SiAmazonaws className="text-white m-10" size={40}/>
        </div>
    </div>
  )
}
