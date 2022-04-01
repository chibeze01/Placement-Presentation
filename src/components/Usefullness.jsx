import { Typography } from '@mui/material';
import AnimatedCard from './animatedCard';
import React from 'react'
import AppDev from '../assets/images/app-dev.webp';
import Dissertation from '../assets/images/dessertation.webp';
import Started from '../assets/images/gettingstarted.jpg';

/*- your comments on the quantity (workload), quality (interesting – good development opportunities) 
and suitability of the placement work (relating to personal development/ambitions) and any suggested improvements.
*/  

const Usefullness = () => {
  return (
    <Typography className='slide-container'>
      <AnimatedCard img={Started} paragraph={'My plans to start a software development company similar to Avco Systems.'}/>
      <AnimatedCard img={AppDev} paragraph={'I am already committed to a app project under development. I have headed the design and management of this project. Using the skills I learnt form my placement, like {time estimation, business project structure, Strict business requirements, and a strategic review process }'}/>
      <AnimatedCard img={Dissertation} paragraph={'The skills I have and will acquired  during my placement will help me through my dissertation.'}/>
    </Typography>
  )
}

export default Usefullness;