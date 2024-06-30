import React from 'react'
import Hero from '../components/Hero_Section'
import Work from '../components/Work'


const Home = () => {
  return (
    <div className='bg-black font-grotesk'>
       <Hero/>
       <div className='py-10'></div>
       <div className='my-4 lg:flex lg:justify-center'>
       <span className='text-blue-100 text-sm bg-radial-card mx-10 px-2  bg-slate-900 rounded-md lg:text-lg lg:py-2 lg:px-4'>Work</span>
       </div>
       <div className='text-white text-xl  px-4 pb-8 lg:text-center lg:text-5xl lg:my-6 mx-4'>What I have been upto</div>
        <Work/>

    </div>
  )
}

export default Home