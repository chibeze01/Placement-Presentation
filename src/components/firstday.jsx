import React from 'react'
import AnimatedCard from './animatedCard'
import HomeOffice from '../assets/images/homeOffice.webp'
import Programming from '../assets/images/programmer.webp'
import Lonely from '../assets/images/lonely.webp'
// - a summary of current work undertaken, outlining the function of the organisation and the team that you are in;


const placementReason = () => {
  return (
    <div className="slide-container">
      <AnimatedCard img={Programming} paragraph={
      'Why i chose Software engineering'
      }/>
      <AnimatedCard img={HomeOffice} paragraph='What Working form home was like and toughts'/>
      <AnimatedCard img={Lonely} paragraph='Work life balance'/>  
    </div>
  )
}

export default placementReason;