import { AppBar, Box, Button, IconButton, Paper, Step, StepLabel, Stepper, Toolbar, Typography } from "@mui/material";
import { Menu, CalendarMonth, Edit, LiveHelp } from "@mui/icons-material";
import Image from 'next/image'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);


const steps = [
  'Ficha de visto pendente 01/02/2025',
  'Analisando documentos 07/02/2025',
  'Aguardando entrevista',
  'Visto aprovado',
  'Passaporte recebido',
]

export default function Home() {
  return (
    <div className="bg-slate-100 h-screen">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Menu />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Client area
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="m-6">

        <Typography className="!font-bold !text-orange-500 !mb-6" variant="h5">Status da applicação: Analizando documentos</Typography>
        <div className="flex">
          <CalendarMonth sx={{ color: "black" }} />
          <Typography className="text-gray-600 !mb-4 !ml-2">
            Sua entrevista está prevista para o dia 5 de março
          </Typography>
        </div>
        <div className="flex">
          <CalendarMonth sx={{ color: "black" }} />
          <Typography className="text-gray-600 !ml-2">
            O recebimento do seu passaporte está previsto para o dia 5 de março
          </Typography>
        </div>



        <Box sx={{ width: '100%' }} className="my-10">
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Paper elevation={3} className="flex justify-between p-8 items-center">
          <div className="flex">
            <Image
              src="/round-usa.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
            <div className="self-center ">
              <Typography className="!font-bold">Eua - Turismo</Typography>
              <Typography className="!font-bold">João da Silva</Typography>
            </div>
          </div>

          <div className="">
            <div className="flex ">
              <Typography className="!font-bold !mr-2">Status 🟢 </Typography>
              <Typography >Analisando documentos</Typography>
            </div>
            <div className="flex mt-2">
              <Typography className="pt-2 pr-2 text-gray-600">Preenchimento da ficha</Typography>
              <Button variant="contained" startIcon={<Edit />}>Editar</Button>
            </div>
            <div className="flex mt-2">
              <Typography className="pt-2 pr-2 text-gray-600">Pagamento da taxa</Typography>
              <Button variant="contained" startIcon={<Edit />}>Pago</Button>
            </div>
            <div className="flex mt-2">
              <Typography className="pt-2 pr-2 text-gray-600">Upload de documento</Typography>
              <Button variant="contained" startIcon={<Edit />}>Editar</Button>
            </div>
          </div>
        </Paper>

      </div>

      <LiveHelp className="absolute bottom-4 right-4" />
    </div>
  );
}
