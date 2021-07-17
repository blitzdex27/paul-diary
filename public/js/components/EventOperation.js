

function AddForm() {
    const addForm = document.createElement('form')
    addForm.setAttribute('class', 'add-form')
    addForm.setAttribute('method', 'POST')
    addForm.setAttribute('action', '/data/?data=events')
    addForm.onsubmit((e) => e.preventDefault())
    
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

    addForm.append(subjectLabel, subjectInput, contentLabel, contentInput, button)
    return addForm
}

function SearchForm() {
    
    const searchForm = document.createElement('form')
    // searchForm.onsubmit((e) => e.preventDefault())

    const searchInput = document.createElement('input')
    
    const button = document.createElement('button')

    searchForm.append(searchInput, button)
    
    return searchForm
    
}

// let add_form = AddForm();
// let search_form = SearchForm();

// function OperationInput() {


//     const selectOperationLabel = document.createElement('label')
//     selectOperationLabel.setAttribute('for', 'select-operation')

//     const selectOperation = document.createElement('select')
//     selectOperation.setAttribute('id', 'select-operation')
//     selectOperation.setAttribute('name', 'select-operation')

//     let returnee;

//     const option1 = document.createElement('option')
//     option1.setAttribute('value', 'add')
//     option1.innerText = 'Add'
//     option1.addEventListener('click', () => {
//         returnee = add_form
//     })

//     const option2 = document.createElement('option')
//     option2.setAttribute('value', 'search')
//     option2.innerText = 'Search'
//     option2.addEventListener('click', () => {
//         returnee = search_form
//     })

//     return returnee
    
// }

function EventOperation() {
    
    const EventOperation = document.createElement('div')
    EventOperation.setAttribute('class', 'operation')

    EventOperation.append(AddForm(), SearchForm())

    return EventOperation

}

export default EventOperation


//     <section id='operation'>
//     <form action="" method="post"></form>
// </section>