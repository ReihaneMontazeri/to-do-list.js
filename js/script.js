let todos = document.querySelector('.todos')
let input = document.querySelector('input')
let addTodoForm = document.querySelector('.add')

addTodoForm.addEventListener('submit', function(event){
    event.preventDefault()
})

input.addEventListener('keydown', function(event){
    if( event.key === 'Enter'){
        let inputValue = event.target.value
        console.log(inputValue)
        let newLi = document.createElement('li')
        newLi.className = 'list-group-item todo-item d-flex justify-content-between align-items-center'
        let newTrashIcon = document.createElement('i')
        newTrashIcon.className = 'fa fa-trash-o delete'
        newTrashIcon.addEventListener('click', function(e){
            e.target.parentElement.remove()
        })
        let newSpan = document.createElement('span')
        newSpan.innerHTML = inputValue
        newLi.appendChild(newSpan)
        newLi.appendChild(newTrashIcon)
        todos.appendChild(newLi)
        input.value = ''
    }
})