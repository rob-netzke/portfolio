import React from 'react'

export default function Contact() {
  return (
    <div id="contact" className='max-w-[1400px] m-auto items-center justify-center md:pl-[15%] md:pr-[5%] p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center'>Contact</h1>
        <form action="https://getform.io/f/be91a1e8-4a21-4dca-b887-72086ac94934" method="POST" encType="multipart/form-data">
            <div className=' w-full py-2'>
                <div className='flex flex-col'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Name</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name='name'/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Email</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email"></input>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-col '>
                        <label className='uppercase text-sm py-2'>Subject</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="subject"></input>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className="border-2 rounded-lg p-3 border-gray-300" rows="10" name="message"></textarea>
                </div>
            </div>
            <button className='bg-black text-white hover:text-gray-400 mt-4 w-full p-4 rounded-lg'>
                Send
            </button>
        </form>
    </div>
  )
}
