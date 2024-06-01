import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      
      <motion.div 
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
          <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' options={{max:45, scale:1, speed:450}}>
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-white text-20px font-bold text-center'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p
     className='mp-4 text-secondary text-[17px] max-w-3xl leaning-[30px]'
      variants={fadeIn("","", 0.1, 1)}>
        Full Stack Software Engineer Specializing in React, Node.js, Python and Django. 
        Graduated from UCCS with a Bachelor of Innovation majoring in Game Design and Development (GDD) and a minor in Computer Science (CS).
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard
        key={service.title} 
        index={index} 
        {...service}>

        </ServiceCard>
      ) )}
    </div>
    </>
  )
}

export default SectionWrapper(About, 'about')