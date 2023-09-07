const express  = require('express')
require('dotenv').config()
const cors = require('cors')


const PORT = process.env.PORT

const app  = express()

app.set(`view engine`, 'pug')
app.set(`views`, './view')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())


app.use(`/`, require('./route/fileRoute'))

app.listen(PORT, () => {
    console.log(`server is connected and running @ http://localhost:${PORT}`)
})