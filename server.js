const { application } = require('express')
const express = require('express')
const app = express()

require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('conected to db'))

app.use(express.json())

// app.get("/", (req, res) => {
//     res.send("hello")
// })

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)


app.listen(3000, () => {
    console.log('server is listening on port 3000')
})