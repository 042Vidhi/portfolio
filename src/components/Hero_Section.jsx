import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import meimg from '../assets/me.jpeg'

const Hero = () => {
  // const nameRef = useRef(null);
  // const descRef = useRef(null);
  // const btnRef = useRef(null);
  // const imgRef = useRef(null);

  // useEffect(() => {
  //   gsap.from(nameRef.current, { opacity: 0, y: -50, duration: 1 });
  //   gsap.from(descRef.current, { opacity: 0, y: -50, duration: 1, delay: 0.5 });
  //   gsap.from(btnRef.current, { opacity: 0, y: -50, duration: 1, delay: 1 });
  //   gsap.from(imgRef.current, { opacity: 0, x: 50, duration: 1, delay: 1.5 });
  // }, []);

  return (
    <section className="bg-black relative flex flex-col-reverse gap-2 md:flex-row items-center justify-center p-8 text-white overflow-hidden">
      {/* <div className='bg-radial-card lg:w-[900px] lg:h-[280px] flex rounded-lg justify-between border-[1px] border-slate-300' >

      
      <div className="flex flex-grow flex-col items-center justify-center radial-gradient(circle at left, rgba(29, 78, 216, 0.5), transparent 60%) radial-gradient(circle at bottom, rgba(29, 78, 216, 0.5), transparent 90%) my-2 ml-2 rounded-lg ">
        <div>

        
        <h1 
        // ref={nameRef} 
        className="font-space text-xl md:text-xl font-bold mb-4 ">
          Vidhi Jaiswal
        </h1>
        <div 
        // ref={descRef} 
        className="text-sm  mb-6 lg:w-[500px] text-slate-400">
          A programmer with an ardent passion for Machine Learning and Data Science. To develop my talents & knowledge and learn more about my subject of study, I have worked on a numerous impactful projects, several internships & published research papers with novel insights. I continue to fervently learn about relevant topics while actively working and learning in the field of AI-ML; Data Science and its derivatives.
        </div>
        <a
          // ref={btnRef}
          href="https://drive.google.com/file/d/1fM26MWYwjmJXQJMQEZtpv8AvrrDyeDCm/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-700 from-50% to-black  hover:bg-gray-500 text-white py-1 px-4 rounded-lg transition-colors duration-300"
        >
          View Resume
        </a>
        </div>
      </div>

      <div className="bg-white w-[30%] flex items-center justify-center rounded-lg my-2 mr-2">
        <img
          // ref={imgRef}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1AfC8iu0GA_gWTfh8VZfdQosXhrcw1M8Fw&s"
          alt="Vidhi Jaiswal"
          className=""
        />
      </div>
      </div> */}
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 font-grotesk">
          <div className="flex flex-col md:flex-row justify-between items-start md:space-x-14 w-full mb-10">
            <div className="flex md:w-3/4 flex-col mt-6">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 ">Vidhi Jaiswal</h1>
              <div className="relative leading-7 items-center flex-wrap text-zinc-100  mb-5 font-semibold">Frontend Developer</div>
              <p>Hi there,</p>
              <p className="text-zinc-300">I am a Frontend Developer.I work with ReactJs to develop websites and React Native for cross platform Mobile Development.I like to explore different fields.
              </p>
              <a className="border w-fit text-zinc-700 bg-slate-100 font-semibold hover:bg-gray-50 rounded-md p-1 mt-6 "
                href='https://drive.google.com/file/d/1fM26MWYwjmJXQJMQEZtpv8AvrrDyeDCm/view' target='_blank' rel='noreferrer'>Resume →</a>
            </div>
            <div class="relative flex-shrink-1 p-4 md:p-4 md:order-last order-first">
              <a href="https://www.linkedin.com/in/vidhi-jaiswal-38a053224/" class="block z-[5] overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5 relative bg-white h-20 w-20">
                <img src={meimg} class="transition duration-500  blur-0 scale-100 bg-gray-100 object-contain" alt="personal" />
              </a>
            </div>
            
          </div>
          </div>
    </section>
  );
};

export default Hero;
