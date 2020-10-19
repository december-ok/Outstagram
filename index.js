import app from './app.js'
import dotenv from 'dotenv'
import './db'
import './models/Comment'
import './models/Post'
import './models/User'
dotenv.config()

const PORT = process.env.PORT || 80

const handleListening = () => {
  console.log(`✅ Listening on: http://localhost:${PORT}`)
}

app.listen(PORT, handleListening)
