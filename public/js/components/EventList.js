import Event from './Event.js'

function EventList (events) {

    const eventList = document.querySelector('.events-list')
    console.log(events)
    events.forEach(event => eventList.append(Event(event)))

    return eventList
}

export default EventList