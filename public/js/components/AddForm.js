import {formExtractor, postFetch, formCleaner} from '../lib.js'

function AddForm() {
    const addForm = document.createElement('form')
    addForm.setAttribute('class', 'add-form')
    addForm.setAttribute('method', 'POST')
    addForm.setAttribute('action', '/data/?data=events')
    addForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const formValues = formExtractor(e)
        postFetch(formValues, '/data/?data=events')
        formCleaner(e)
        
    })
    
    const subjectLabel = document.createElement('label')
    subjectLabel.setAttribute('for', 'subject')
    const subjectInput = document.createElement('input')
    subjectInput.setAttribute('id', 'subject')
    subjectInput.setAttribute('name', 'subject')

    const contentLabel = document.createElement('label')
    contentLabel.setAttribute('for', 'content')
    const contentInput = document.createElement('input')
    contentInput.setAttribute('id', 'content')
    contentInput.setAttribute('name', 'content')

    const button = document.createElement('button')
    button.innerText = 'Add'

    addForm.append(subjectLabel, subjectInput, contentLabel, contentInput, button)
    return addForm
}

export default AddForm