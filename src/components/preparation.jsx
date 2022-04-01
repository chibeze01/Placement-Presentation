import { Typography } from '@mui/material';
import React from 'react'
import AnimatedCard from './animatedCard';
import Campus from '../assets/images/bathuni.jpg';
import Ai from '../assets/images/Ai.png';
import Csed from '../assets/images/CSED.png';
import Ip from '../assets/images/Ip.png';
//- how your programme of study had prepared you for this placement;  

const preparation = () => {
  return (
    <div className='slide-container'>
      <AnimatedCard img={Campus} paragraph='Bath events and societies: like Launchpad 2020 and Bath Entrepreneurs.'/>
      <AnimatedCard img={Ai} paragraph='AI and Machine learning: taught me complex problem solving skills '/>
      <AnimatedCard img={Csed} paragraph='CSED -- Computer science as a Engineering Discipline'/>
      <AnimatedCard img={Ip} paragraph='IP -- Integrated group project: Gave me in in-depth insight into software development.'/>
    </div>
  )
}

export default preparation;