import React from 'react'
import AnimatedCard from './animatedCard';
import VercoProject from '../assets/images/vercoProject.jpg';
import Bplogo from '../assets/images/bp-logo.jpg';
import Oxfordhealth from '../assets/images/oxfordhealth-logo.jpg';
import Acp from '../assets/images/Anycommsplus.png';
import Vas from '../assets/images/VAS-logo.jpg';

// talk about : oxford health, verco, anycomms plus, Bp distributor
const projects = () => {
  return (
    <div className='slide-container'>
        <AnimatedCard img={Oxfordhealth} paragraph={'NHS OxfordHealth, CareNotes: Carenotes enables community mental health services to realise greater efficiencies by streamlining their patient management processes and care outcomes.'}/>
        <AnimatedCard img={Bplogo} paragraph={'Bp distributor: Used to track and manage transactions between different Bp endpoints'}/>
        <AnimatedCard img={Acp} paragraph={'AVCO internal, Anycomms+: Secure, straightforward, Web based file transfer solution for schools and local authorities'}/>
        <AnimatedCard img={VercoProject} paragraph={'Verco net zero platform: Verco helps companies reduce their environmental impact and save money through data driven analysis, grounded advice and real-world solutions'}/>
        <AnimatedCard img={Vas} paragraph={'Vehicle & Asset Solutions Ltd (VAS): A Assets audit service provider in teh automotive sector, goal is to protect Funders and Dealers.'}/>
    </div>
  )
}

export default projects;