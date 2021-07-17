const express = require('express');
const fs = require('fs')
const path = require('path')

const app = express();

const paths = {
    events: path.resolve(__dirname, '..', 'data', 'events.json')
}

app.use(express.static('./public'))
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.sendFile('/')
})

app.get('/data', (req, res) => {
    const {data} = req.query

    if (data === 'events') {
        const events = JSON.parse(fs.readFileSync(paths.events))
        return res.json(events)
    }
    
    return res.json([])

})

app.post('/data', (req, res) => {
    const {data} = req.query
    
    if (data === 'events') {
        const {subject, content} = req.body
        const dateTime = new Date()
        const date = dateTime.toLocaleDateString()
        const time = dateTime.toLocaleTimeString()
        
        const offset = dateTime.getTimezoneOffset() * 60 * 1000
        const uniTime = dateTime.getTime() - offset
        
        const newEvent = {date, time, subject, content, uniTime}

        const events = JSON.parse( fs.readFileSync(paths.events) )
        events.push(newEvent)

        fs.writeFileSync(paths.events, JSON.stringify(events))
        const updEvents = JSON.parse( fs.readFileSync(paths.events) )
        return res.json(updEvents)
        
    }

    return res.json([])
})

const port = process.env.PORT || 5000
app.listen(5000, () => {
    process.stdout.write(`Server started at port ${port}`)
})