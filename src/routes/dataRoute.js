const { Router } = require('express')
const fs = require('fs')
const path = require('path')
const {v4: uuidv4} = require('uuid')

const router = new Router()

const paths = {
    events: path.resolve(__dirname, '..', '..', 'data', 'events.json')
}

router.get('/', (req, res) => {
    const {data} = req.query

    if (data === 'events') {
        const events = JSON.parse(fs.readFileSync(paths.events))
        return res.json(events)
    }
    
    return res.json([])

})

router.post('/', (req, res) => {
    const {data} = req.query
    
    if (data === 'events') {
        const {subject, content} = req.body
        const dateTime = new Date()
        const date = dateTime.toLocaleDateString()
        const time = dateTime.toLocaleTimeString()
        
        const offset = dateTime.getTimezoneOffset() * 60 * 1000
        const uniTime = dateTime.getTime() - offset

        const id = uuidv4()
        
        const newEvent = {id, date, time, subject, content, uniTime}

        const events = JSON.parse( fs.readFileSync(paths.events) )
        events.push(newEvent)

        fs.writeFileSync(paths.events, JSON.stringify(events, null, 2))
        const updEvents = JSON.parse( fs.readFileSync(paths.events) )
        return res.json(updEvents)
        
    }

    return res.json([])
})

module.exports = router