import mongoose from 'mongoose'

// shortcut to mongoose.connection obj
const db = mongoose.connection

// connect to the database
mongoose.connect(process.env.DATABASE_URL)

db.on('connected', function(){
  console.log(`Connected to Mongodb ${db.name} at ${db.host}:${db.port}`)
})