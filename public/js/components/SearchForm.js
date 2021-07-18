export default function SearchForm() {
    
    const searchForm = document.createElement('form')
    // searchForm.onsubmit((e) => e.preventDefault())

    const searchInput = document.createElement('input')
    
    const button = document.createElement('button')
    button.innerText = 'Search'

    searchForm.append(searchInput, button)
    
    return searchForm
    
}