import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const db = mongoose.connection

const handleOpen = () => {
  console.log('✅ Connected to DB')
}
const handleError = (error) => {
  console.log(`❌ Error on DB Connection:${error}`)
}

db.on('error', handleError)
db.once('open', handleOpen)
