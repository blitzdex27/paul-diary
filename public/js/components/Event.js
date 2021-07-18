

function Event (props) {
    const {date, time, subject, content} = props

    const event = document.createElement("li")
    event.setAttribute('class', 'event-list-item')

    const eventInfoList = document.createElement("ul")
    eventInfoList.setAttribute('class', 'event-info-list')

    const eventDate = document.createElement('li')
    eventDate.setAttribute('class', 'event-info-date')
    eventDate.innerText = date

    const eventTime = document.createElement('li')
    eventTime.setAttribute('class', 'event-info-time')
    eventTime.innerText = time

    const eventSubject = document.createElement('li')
    eventSubject.setAttribute('class', 'event-info-subject')
    eventSubject.innerText = subject

    const eventContent = document.createElement('li')
    eventContent.setAttribute('class', 'event-info-content')
    eventContent.innerText = content

    eventInfoList.append(eventDate, eventTime, eventSubject, eventContent)
    event.append(eventInfoList)

    return event
}

export default Event

