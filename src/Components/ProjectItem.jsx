import React from 'react'

export default function ProjectItem({img, title, url}) {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-200 rounded-xl group hover:bg-gradient-to-r duration-200 from-gray-200 to-gray-500'>
        <img src={img} alt={title} className="rounded-xl group-hover:opacity-10 "/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pb-2'>
            <a href={url}>
            <h3 className='text-2xl font-bold text-white tracking-wider text-center cursor-pointer hover:text-gray-300 hover:scale-110 duration-200'>
                {title}
            </h3>
            </a>     
        </div>
    </div>
  )
}
