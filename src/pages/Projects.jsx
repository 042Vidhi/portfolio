import React from 'react';
import ProjectCard from '../components/Project_Card';
import ZenCashImg from '../assets/zencash_img2.png'
import ZephyrImg from '../assets/Zephyr_img.png'
import HappyHopImg from '../assets/HappyHop.png'
import PredictWineQualityImg from '../assets/PredictWineQuality.png'
import MealPlanImg from '../assets/MealPlan.png'
import GrayBazaarImg from '../assets/GrayBazaar.png'
import SociTaskImg from '../assets/SociTask.png'
import ANNImg from '../assets/ANN.png'
import SkillSection from '../components/Skills';
  
const skills1 = [
  { name: 'JavaScript', percentage: 75 },
  { name: 'React', percentage: 80 },
  { name: 'Tailwind CSS', percentage: 70 },
  { name: 'React Native expo', percentage: 40 },
  { name: 'Python', percentage: 60 },
  { name: 'CSS', percentage: 50 },
  
];
const skills2 = [
  { name: 'Cpp', percentage: 75 },
  { name: 'SQL', percentage: 65 },
  { name: 'Machine Learning', percentage: 40 },
  { name: 'Django', percentage: 30 },
  { name: 'UI/UX', percentage: 70 },
  { name: 'Graphic Design', percentage: 60 },

];

const Projects = () => {
  return (
    <div className='bg-black'>
    <div className="min-h-screen ">
      <div className="text-5xl md:text-6xl lg:text-7xl text-white font-bold py-4 text-center relative lg:py-10">
        <span className="">
          Projects
        </span>
      </div>
    <div className='text-white py-4 text-xl ml-6 font-semibold lg:ml-16 lg:text-3xl'>FullStack Web Development</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-10">
        <ProjectCard title={'GrayBazaar'} image={GrayBazaarImg} description={'An Ecommerce Website Built with React and Django'} Button2={'GitHub'} Link2={'https://github.com/042Vidhi/Ecommerce-Graybazaar'}/>
        <ProjectCard title={'Culinary Keeper'} image={MealPlanImg} description={'A meal planning web app'} Button2={'GitHub'} Link2={'https://github.com/042Vidhi/Culinary_Keeper'} Button1={'Blog'} Link1={'https://vidhijaiswal.hashnode.dev/culinary-keeper'}/>
        <ProjectCard title={'SociTask'} image={SociTaskImg} description={'A Social Media Wall'} Button2={'GitHub'} Link2={'https://github.com/042Vidhi/socitask_appwrite'}/>
      </div>
       {/* <div className='text-white py-4 text-xl ml-6 font-semibold lg:ml-16 lg:text-3xl'>App Development(React Native)</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-10">
        <ProjectCard />
      </div> */}
    <div className='text-white py-4 text-xl ml-6 font-semibold lg:ml-16 lg:text-3xl'>Data Science & Machine Learning</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-10">
        <ProjectCard title={'Predict Wine Quality'} image={PredictWineQualityImg} description={'An Streamlit app to predict quality of Red Wine.DecisionTreeClassifier is used as model'} Button2={'GitHub'} Link2={'https://github.com/042Vidhi/Wine-Quality-Prediction-Web'}/>
        <ProjectCard title={`Predicting User's Exit`} image={ANNImg} description={`Artifical Neural Network To Predict User's Exit`} Button2={'GitHub'} Link2={'https://github.com/042Vidhi/ANN_Predicting_User_Exit'}/>
        {/* <ProjectCard /> */}
      </div>
   
    <div className='text-white py-4 text-xl ml-6 font-semibold lg:ml-16 lg:text-3xl'>Game Developement(Pygame)</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-10">
        <ProjectCard title={'HappyHop'} image={HappyHopImg} description={'A Fun Banana Cat Runner Game'} Button2={'GitHub'} Link2={'https://github.com/042Vidhi/HappyHop'}/>
      </div>
    <div className='text-white py-4 text-xl ml-6 font-semibold lg:ml-16 lg:text-3xl'>UI/UX Case Study</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-10">
        <ProjectCard title={'Zencash'} image={ZenCashImg} description={'Level up your money tracking game with GenZ Vibes'} Button2={'View'} Link2={'https://docs.google.com/presentation/d/e/2PACX-1vTv7eoJiYw8Mj4JmqmzhlyIEb6pC5Xu77DuNY4ALZgeKH0x3nbhKOYiyvTUkxCAKNQp6AMvfdUEj44q/pub?start=false&loop=false&delayms=3000'}/>
        <ProjectCard title={'Zephyr'} image={ZephyrImg} description={'Space Travel Made Easy'} Button2={'Behance'} Link2={'https://www.behance.net/gallery/168152067/Zephyr-UIUX-case-study'}/>
        {/* <ProjectCard /> */}
        </div>
    </div>
    <div className="bg-black text-5xl md:text-6xl lg:text-7xl text-white font-bold py-8 text-center relative lg:py-10">
        <span className="">
          Skills
        </span>
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:px-10">
        <SkillSection  skills={skills1}/>
        <SkillSection  skills={skills2}/>
      </div>
    </div>
  );
};

export default Projects;
