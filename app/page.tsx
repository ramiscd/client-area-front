import { AppBar, Box, Button, IconButton, Step, StepLabel, Stepper, Toolbar, Typography } from "@mui/material";
import { AccessAlarm, ThreeDRotation, Menu } from "@mui/icons-material";

const steps = [
  'step 1',
  'step 2',
  'step 3',
]

export default function Home() {
  return (
    <div className="">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2}}>
            <Menu/>      
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Client area
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: '100%'}} className="my-10">
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}
