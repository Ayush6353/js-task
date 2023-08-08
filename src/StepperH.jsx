import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { useState } from 'react';

const steps = ['Please enter your name', 'Please enter your Std', 'Please enter your Pr%'];

export default function StepperH() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [AllData, setAllData] = useState([]);
  const [name, setName] = useState("");
  const [Std, setStd] = useState("");
  const [PrData, setPrData] = useState("");




  const num = activeStep + 1;
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {

    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps();
  };

  const DataAdd = () => {
    const newData = { name: name, Std: Std, Pr: PrData }
    setAllData([...AllData, newData]);
    console.log(AllData, "Alldata useState")
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    DataAdd();
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    setName("");
    setStd("");
    setPrData("");
  };

  const FormData = () => {
    switch (num) {
      case 1:
        return (
          <Grid sx={{ height: '100%', width: "100%", }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 7,
                padding: 5
              }}
            >
              <Typography variant='h4'> 
                Enter your name
              </Typography>
              <form >
                <TextField
                  helperText="Please enter your name"
                  id="demo-helper-text-aligned"
                  label="Name"
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </form>
            </Box>
          </Grid>
        );
      case 2:
        return (
          <Grid sx={{ height: '100%', width: "100%", }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 7,
                padding: 5
              }}
            >
              <Typography variant='h4'>
                Enter your Std
              </Typography>
              <form >
                <TextField
                  helperText="Please enter your Std"
                  id="demo-helper-text-aligned"
                  label="Std"
                  type='text'
                  value={Std}
                  onChange={(e) => setStd(e.target.value)}
                />
              </form>
            </Box>
          </Grid>
        );
      case 3:
        return (
          <Grid sx={{ height: '100%', width: "100%", }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 7,
                padding: 5
              }}
            >
              <Typography variant='h4'>
                Enter your Pr%
              </Typography>
              <form >
                <TextField
                  helperText="Please enter your Pr"
                  id="demo-helper-text-aligned"
                  label="Pr"
                  type='text'
                  value={PrData}
                  onChange={(e) => setPrData(e.target.value)}
                />
              </form>
            </Box>
          </Grid>
        );

      default:
        break;
    }
  }

  return (
    <div style={{ height: '100%', width: "100%", display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 7 }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Grid sx={{ height: '100%', width: "100%", padding: 25, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650, backgroundColor: ' rgba(218, 218, 217, 0.53)', color: 'white' }} aria-label="simple table">
                      <TableHead>
                        <TableRow>

                          <TableCell align="center">Name</TableCell>
                          <TableCell align="center">Std</TableCell>
                          <TableCell align="center">Pr%</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {AllData.map((AllData) => (
                          <TableRow
                            key={AllData.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >

                            <TableCell align="center">{AllData.name}</TableCell>
                            <TableCell align="center">{AllData.Std}</TableCell>
                            <TableCell align="center">{AllData.Pr}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Grid>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {
                FormData()
              }
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                      Step {num} already completed
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1
                        ? 'Finish'
                        : 'Complete Step'}
                    </Button>
                  ))}
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
    </div>
  );
}