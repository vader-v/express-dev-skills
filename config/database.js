import mongoose from 'mongoose'

// connect to the database
mongoose.connect(process.env.DATABASE_URL)