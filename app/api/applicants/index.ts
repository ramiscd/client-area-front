import { NextApiRequest, NextApiResponse } from "next";

const { CLIENT_AREA_URL } = "http://localhost:3000"

export const endpoint = `${CLIENT_AREA_URL}/applications`

export const index = () => {
  return fetch(endpoint, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

//Criar metodo create aqui posteriormente
export const create = () => {
  console.log("create")
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await index();
    // ajustar quando criar o create
    // req.method === 'POST' ? await create() : await index();

    return res.status(response.status).send(await response.json());

  } catch (e) {
    console.error(e)
    res.status(500).send
  }
}