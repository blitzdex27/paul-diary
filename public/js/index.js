import EventList from './components/EventList.js'
import EventOperation from './components/EventOperation.js'

const fetchEvents = async () => {
    const response = await fetch('/data/?data=events')
    const json = await response.json()
    console.log(json)
    return json
}


fetchEvents().then(EventList)

const opSection = document.querySelector('#operation')
opSection.append(EventOperation())