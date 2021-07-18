import Event from '../components/Event.js'
import AddForm from '../components/AddForm.js'
import SearchForm from '../components/SearchForm.js'

export default class EventHandler {
    constructor() {
        this.body = document.querySelector('body')
        this.sections = {
            operation: document.createElement("section"),
            timeline: document.createElement("section")
        }
    }

    showEventsInterface() {



        const { operation, timeline } = this.sections

        operation.setAttribute('id', 'operation')
        timeline.setAttribute('id', 'timeline')

        EventHandler.showEventsOperationInterface(operation)
        EventHandler.showEventsTimelineInterface(timeline)

        this.body.append(operation, timeline)
        
    }
    removeEventsInterface() {
        Object.values(this.sections).forEach(section => section.remove())
    }

    refreshInterface() {
        this.removeEventsInterface()
        this.showEventsInterface()

    }

    addEvent() {

    }

    static async getEvents () {
        const fetchEvents = async () => {
            const response = await fetch('/data/?data=events')
            const json = await response.json()
            return json
        }

        const response = await fetchEvents()
        return response
    }

    static showEventsOperationInterface(operation) {
        operation.append(AddForm(), SearchForm())
    }

    static async showEventsTimelineInterface(timeline) {
        const events = await this.getEvents()

        const eventList = document.createElement('ul')
        eventList.className = 'event-list'
        
        events.forEach(event => eventList.append(Event(event)))

        timeline.append(eventList)

    }

}

