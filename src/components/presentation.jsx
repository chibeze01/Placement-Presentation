import React,  { useEffect } from 'react';
import PropTypes from 'proptypes';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { StepConnector, stepConnectorClasses, styled } from '@mui/material';
import { Check } from '@mui/icons-material';
import Learnt from './learnt';
import Firstday from './firstday';
import Whatnew from './whatnew';
import Projects from './projects';
import Preparation from './preparation';
import Usefullness from './Usefullness';
import Business from './business';
import CurrentProject from './CurrentProject';
const MAXSLIDE = 7;

const QontoConnector = styled(StepConnector)(({ }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    padding: 2,
    borderRadius: '30%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

// Presentation layout
const steps = [
  {
    label: 'Why placement:',
    component: <Firstday/>,
  },
  {
    label: 'Summary of current project:',
    component: <CurrentProject/>,
  },
  {
    label: 'Projects I have worked on so far:',
    component: <Projects/>,
  },
  {
    label: 'Buisness Skils I have learnt:',
    component: <Business/>
  },
  {
    label: 'What I have learnt so far:',
    component: <Learnt/>,
  },
  {
    label: 'Was I prepared?',
    component: <Preparation/>,
  },
  {
    label: 'Was This experience usefull?',
    component: <Usefullness/>
  },
];

export default function Prensentation() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (activeStep !== MAXSLIDE) {
        handleNext();
      }
    } else if (e.key === 'Backspace' && activeStep !== 0){
      handleBack();
    }
    else if (e.key === 'r' && activeStep === steps.length){
      handleReset();
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div>
    <Typography variant= 'h2' sx={{marginTop: '2%'}}>Placement Presentation</Typography>
    <div className='containter'>
      <Stepper activeStep={activeStep} connector={<QontoConnector />} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel StepIconComponent={QontoStepIcon}>
              {step.label}
            </StepLabel>
            <StepContent>
              <div>{step.component}</div>
              <Box sx={{ mb: 2 }}>
                <div style = {{display:'flex', justifyContent:'right' }}>
                  <Button
                    variant="text"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1, color: '#784af4'}}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>We have come the end of the presentation any questions?</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
    </div>
  );
}


// template: see powerpoint sildes Placement presentation

