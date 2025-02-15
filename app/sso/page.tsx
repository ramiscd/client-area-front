import { Button, Paper, TextField, Typography } from "@mui/material";


//app/sso/sign-in.tsx
export default function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen flex-col bg-blue-200">
      <Paper elevation={20} className="w-fit flex flex-col items-center p-10 gap-6">
        <Typography variant="h4">Login</Typography>
        <Typography>Bem vindo, por favor insira suas credenciais</Typography>
        <TextField label="email"></TextField>
        <TextField label="senha"></TextField>
        <Button variant="contained">Acessar</Button>
      </Paper>
    </div>
  )
}