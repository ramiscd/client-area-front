import { Button, Input, Paper } from "@mui/material";

//app/sso/sign-in.tsx
export default function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen flex-col bg-gray-400">
      <Paper elevation={20} className="w-fit flex flex-col items-center p-10 gap-6">
        <h1>Login</h1>
        <p>Bem vindo, por favor insira suas credenciais</p>
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Button variant="contained">Acessar</Button>
      </Paper>
    </div>
  )
}