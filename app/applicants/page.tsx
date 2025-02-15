import { Edit, Menu, Visibility } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Paper, Toolbar, Typography } from "@mui/material";
import { Container } from "postcss";
import Image from 'next/image'


export default function Applicants() {
  return (
    <div>
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


      <Box className="flex flex-col items-center m-10">
        <Typography variant="h4">Applicantes</Typography>
        <Typography>acompanhe o status das aplicações deste usuário</Typography>

        <Paper elevation={3} className="flex justify-between p-8 items-center m-2">
          <div className="flex mr-20">
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
            <div className="flex mt-2">
              <Button variant="contained" startIcon={<Visibility />}>acompanhar aplicação</Button>
            </div>
          </div>
        </Paper>

        <Paper elevation={3} className="flex justify-between p-8 items-center m-2">
          <div className="flex mr-20">
            <Image
              src="/round-usa.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
            <div className="self-center ">
              <Typography className="!font-bold">Eua - Turismo</Typography>
              <Typography className="!font-bold">Maria da Silva</Typography>
            </div>
          </div>
          <div className="">
            <div className="flex mt-2">
              <Button variant="contained" startIcon={<Visibility />}>acompanhar aplicação</Button>
            </div>
          </div>
        </Paper>

      </Box>
    </div>
  )
}