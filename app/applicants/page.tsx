import { Menu, Visibility } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Paper, Toolbar, Typography } from "@mui/material";
import Image from 'next/image'
// import applicants, { index } from '../api/applicants/index'
import { GetServerSideProps } from "next";
import { json } from "stream/consumers";

type Applicant = {
  id: number
  user: {
    id: number
    full_name: string
    email: string
  }
  form: {
    id: number
    country: string
    question: string
    document_passport: boolean
    document_rg: boolean
    payment: boolean
    form_type: string
  }
}


export default async function Applicants() {
  const res = await fetch('http://localhost:3000/applications', {
    cache: 'no-store',
  })
  const applicants: Applicant[] = await res.json()

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
        {applicants.map((applicant) => (
          <Paper elevation={3} className="flex justify-between p-8 items-center m-2">
            <div className="flex mr-20">
              <Image
                src="/round-usa.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
              <div className="self-center ">
                <Typography className="!font-bold">{applicant.form.country} - {applicant.form.form_type}</Typography>
                <Typography className="!font-bold">{applicant.user.full_name}</Typography>
              </div>
            </div>
            <div className="">
              <div className="flex mt-2">
                <Button variant="contained" startIcon={<Visibility />}>acompanhar aplicação</Button>
              </div>
            </div>
          </Paper>
        ))
        }
      </Box>
    </div>
  )
}