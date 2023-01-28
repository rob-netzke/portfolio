import React from 'react'
import ProjectItem from './ProjectItem'
import Stocks from '../assets/images/stock.jpeg'
import News from '../assets/images/news.jpeg'
import Resume from '../assets/images/resume.jpeg'
import Atom from '../assets/images/atom.jpeg'


export default function Projects() {
  return (
    <div id='projects'>
        <div className='max-w-[1300px] m-auto md:pl-[15%] md:pr-[5%] p-4 py-16 items-center justify-center'>
            <h1 className='text-4xl font-bold text-center'>Projects</h1>
            <p className='text-center py-8'>
                
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={Stocks} title={'Developer Launch Page'} url={"https://mydevlaunch.com"}/>
                <ProjectItem img={News} title={'Lightning News'} url={"https://lightning-news.herokuapp.com/"}/>
                <ProjectItem img={Atom} title={'Predicting Nuclear Binding Energies'} url={"https://github.com/rob-netzke/binding-energies/blob/main/Binding_Energy_Report_1.pdf"}/>
                <ProjectItem img={Resume} title={'Resume/CV'} url={"https://github.com/rob-netzke/resume/blob/main/Robert%20Netzke's%20Resume%20(23).pdf"}/>
            </div>
        </div>
    </div>
  )
}
