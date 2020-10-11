import app from './app.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT

function handleListening () {
  console.log(`✅Listening on: http://localhost:${PORT}`)
}

app.listen(PORT, handleListening)
