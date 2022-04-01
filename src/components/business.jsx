import React from 'react'
import AnimatedCard from './animatedCard';
import Client from '../assets/images/client.png';
import Author from '../assets/images/co-author.webp';
import deadline from '../assets/images/deadline.webp';
const business = () => {
  return (
    <div className='slide-container'>
        <AnimatedCard img={Client} paragraph={'working with clients '}/>
        <AnimatedCard img={Author} paragraph={'Co-authoring a BRS '}/>
        <AnimatedCard img={deadline} paragraph={'working towards deadlines'}/>

    </div>
  )
}

export default business;