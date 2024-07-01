import React from 'react'
import BluphluxImg from '../assets/Bluphlux.png'
import CompetencyImg from '../assets/Competency.png'
import LockShareImg from '../assets/LockShare.png'
 import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const Work = () => {
  return (
    <div className='lg:mx-56 font-grotesk mx-4'>
    <div className='md:flex md:justify-center'>
        <div className="max-w-sm md:max-w-lg px-4 pt-4  rounded-2xl bg-black text-white shadow-lg mx-4 transition-all duration-300 border-2 border-gray-700 hover:bg-radial-card ">
      <div className="flex flex-col justify-between h-full ">
        <div>
          <h2 className="text-xl font-semibold mb-2 md:text-3xl">Bluphlux</h2>
          <p className="text-sm mb-4 flex justify-between md:text-lg">
            Frontend Developer Intern
            <a className="hover:bg-blue-900  text-gray-400  px-4 rounded-lg transition-colors duration-300" href='https://bluphlux.com/' target='_blank' rel='noreferrer'>
            <ArrowRightAltIcon />
          </a>
          </p>
        </div>
        <div className='h-20 lg:h-40 overflow-hidden mt-4 flex justify-center items-start'>
        <img src={BluphluxImg} alt="pic" className='w-2/3 rounded-sm'>
        </img>
        </div>
      </div>
      
    </div>
    <pre className='text-sm py-4 font-grotesk text-gray-300 px-4 text-wrap md:w-1/2 md:text-md '>
        <p className='font-bold text-xl'>Frontend Developer (Intern)</p>
        <p className='text-sm bg-slate-700 w-fit rounded-sm px-2 my-2'>Sep 2023 - Jun 2024</p>

        Developed interfaces for an HRMS platform using ReactJS and TypeScript,
        ensuring a seamless user experience.
        <br/>
        • Integrated 10+ RESTful APIs into the frontend, enhancing data accessibility
        and enabling real-time updates forimproved system functionality.
        <br/>
        • Conducted comprehensive API testing with Postman, executing 60+ test cases
        to ensure reliability, scalability, and optimal performance, contributing to the
        delivery of a robust HRMS solution.
    </pre>
    </div>
    <div className='space-box-20 md:py-20 py-10'></div>

    <div className='md:flex md:justify-center'>
     <div className="max-w-sm md:max-w-lg px-4 pt-4  rounded-2xl bg-black text-white shadow-lg mx-4 transition-all duration-300 border-2 border-gray-700 hover:bg-radial-card ">
      <div className="flex flex-col justify-between h-full ">
        <div>
          <h2 className="text-xl font-semibold mb-2 md:text-3xl">IIT Delhi</h2>
          <p className="text-sm mb-4 flex justify-between md:text-lg">
            Web Developer Intern
            <button className="hover:bg-blue-900  text-gray-400  px-4 rounded-lg transition-colors duration-300">
            <ArrowRightAltIcon />
          </button>
          </p>
        </div>
        <div className='h-20 lg:h-40 overflow-hidden mt-4 flex justify-center items-start'>
        <img src={CompetencyImg} alt="pic" className='w-2/3 rounded-sm'>
        </img>
        </div>
      </div>
    </div>
    <pre className='text-sm py-4 font-grotesk text-gray-300 px-4 text-wrap md:w-1/2 md:text-md '>
    <p className='font-bold text-xl'>Frontend Developer (Intern)</p>
    <p className='text-sm bg-slate-700 w-fit rounded-sm px-2 my-2'>Feb 2024 - May 2024</p>

        Worked for Divine Labs,IIT Delhi under Professor Greeshma Sharma to developed interfaces for 6+ psychological tests in collaboration with
        psychologists,resulting in precise score-based interpretations.
    </pre>
    </div>
    <div className='space-box-20 md:py-20 py-10'></div>
    <div className='md:flex md:justify-center'>

    <div className="max-w-sm md:max-w-lg px-4 pt-4 rounded-2xl bg-black text-white shadow-lg mx-4 transition-all duration-300 border-2 border-gray-700 hover:bg-radial-card ">
      <div className="flex flex-col justify-between h-full ">
        <div>
          <h2 className="text-xl font-semibold mb-2 md:text-3xl">Freelance</h2>
          <p className="text-sm mb-4 flex justify-between md:text-lg">
            UI/UX
          </p>
        </div>
        <div className='h-20 lg:h-40 overflow-hidden mt-4 flex justify-center items-start'>
        <img src={LockShareImg} alt="pic" className='w-2/3 rounded-sm'>
        </img>
        </div>
      </div>
      
    </div>
    <pre className='text-sm py-4 font-grotesk text-gray-300 px-4 text-wrap md:w-1/2 md:text-md '>
    <p className='font-bold text-xl'>UI/UX Designer(Freelance)</p>
    <p className='text-sm bg-slate-700 w-fit rounded-sm px-2 my-2'>April 2024 - May 2024 </p>

        Designed wireframes on figma for a freelance project - LockShare
        <br/>
        • Designed 10+ web app screens (including Dashboard) 
        <br/>
        • Designed Landing Page for the Product
    </pre>
    </div>
    <div className='space-box-20 md:py-20 py-10'></div>

    </div>
  )
}

export default Work