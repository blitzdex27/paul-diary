const express = require('express');

const dataRoute = require('./routes/dataRoute')
const registerRoute = require('./routes/registerRoute')

const app = express();



app.use(express.static('./public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.get('/', (req, res) => {
    res.sendFile('/')
})

app.use('/data', dataRoute)

app.use('/register', registerRoute)

const port = process.env.PORT || 5000
app.listen(5000, () => {
    process.stdout.write(`Server started at port ${port}`)
})