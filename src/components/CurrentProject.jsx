import { Typography, Paper } from '@mui/material';
import { Box, flexbox } from '@mui/system';
import AnimatedCard from './animatedCard';
import React from 'react'
import Vas from '../assets/images/VAS-logo.jpg';
import Avco from '../assets/images/Avco-logo.png';

const CurrentProject = () => {
  return (
    <Paper elevation={3}>
        <Box className='grid-container' alignItems={'center'}>
            <AnimatedCard img={Avco} paragraph={''}></AnimatedCard>
            <Typography>Avco Systems provides software solutions, we have been around for over 30 years and have wokred with over 700 companies. We are trusted by many FTSE 100 companies and also Blue chip companies like Experian, and more. </Typography>
            <img src={Vas} alt='VAS-logo' width='420' height='240'/>
            <Typography> Vehicle & Asset Solutions Ltd (VAS) is a trusted provider of assets audit services within the automotive sector.
            In 2019 Vas audited 1.5 million assets with a combined value of £60 billion.</Typography>
        </Box>
        <Typography variant="body2" textAlign={'unset'}>
            VAS has recently been acquired by Auxiga Group, a major supplier of audit related services in France and Benelux. <br/>
            My Role is to further enhance the digital solution offered by the SMART platform, changes are required to help support internationalization over Europe and integrate some of Auxiga’s auditing services into the SMART platform.
        </Typography>
    </Paper>
  )
}

export default CurrentProject;