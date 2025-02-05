import { AppBar, Box, Button, IconButton, Step, StepLabel, Stepper, Toolbar, Typography } from "@mui/material";
import { AccessAlarm, ThreeDRotation, Menu } from "@mui/icons-material";

const steps = [
  'Ficha de visto pendente',
  'Analisando documentos',
  'Aguardando entrevista',
  'Visto aprovado',
  'Passaporte recebido',
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

      <Typography>Status da applicação: Analizando documentos</Typography>
      <div>
        <Typography>
          Sua entrevista está prevista para o dia 5 de março
        </Typography>
      </div>
      <div>
        <Typography>
          O recebimento do seu passaporte está previsto para o dia 5 de março
        </Typography>
      </div> 



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
