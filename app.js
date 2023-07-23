require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('HOLA MUNDO!')
})

app.listen(port, () => {
  console.log(`Aplicacion esta escuchando en puerto: ${port}`)
})
