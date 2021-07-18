
export const formExtractor = (e) => {
    const formValues = {}
      
    Object.values(e.target.children).forEach(child => {

        if (child.tagName === 'INPUT' || child.tagName === 'TEXTAREA') {
            formValues[child.name] = child.value

        }
        
    })
    return formValues
}

export const formCleaner = (e) => {
    Object.values(e.target.children).forEach(child => {
        if (child.value) {
            child.value = ''
        }
    })
}

export const postFetch = async (body, url) => {

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)

    })
    const json = await response.json()
    return json
}