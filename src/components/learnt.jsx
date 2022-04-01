import { Typography } from '@mui/material';
import React from 'react'
import AnimatedCard from './animatedCard';
import Git from '../assets/images/git.png';
import Javascript from '../assets/images/Javascript.jpg';
import Xml from '../assets/images/xml-logo.jpg';
import Jquery from '../assets/images/jquery.png';
import react from '../assets/images/reactJS.png';
import Vb from '../assets/images/VB.jpg';
import Independent from '../assets/images/independentlearning.webp';
// - what you feel you are learning from the placement, including the skills and knowledge you feel you have gained;  

const learnt = () => {
  return (
    <div className='slide-container'>
        <AnimatedCard img={Javascript} paragraph={'JavaScript'}/>
        <AnimatedCard img={Xml} paragraph={'XML'}/>
        <AnimatedCard img={Jquery} paragraph={'jQuery'}/>
        <AnimatedCard img={react} paragraph={'React.js'}/>
        <AnimatedCard img={Vb} paragraph={'VB.Net and .NET framework'}/>
        <AnimatedCard img={Git} paragraph={'Git. Before my Placement the depth of my git knowledge was above the water, i was not aware that there was a-lot more going on below the water'}/>
        <AnimatedCard img={Independent} paragraph={'Independent learning and google searching skills.'}/>

    </div>
  )
}

export default learnt;