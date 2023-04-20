import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import authRoute from './routes/auth.js'

mongoose
    .connect('mongodb+srv://admin:cardRPG777@cardrpg.zyyalre.mongodb.net/card-RPG-game?retryWrites=true&w=majority',)
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('ERROR!:', err))

const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/auth/', authRoute)


app.listen(4000, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Server OK')
})