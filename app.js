let btn = document.getElementById('add');
let todoList = document.getElementById('todo');
let input = document.getElementById('input');

let todos = [];

window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
}

btn.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)
    input.value=''
})

function addtodo(todo){
    let p = document.createElement('p');
    p.innerText = todo;
    todoList.appendChild(p)
    
    p.addEventListener('click',()=>{
        p.style.textDecoration = 'line-through'
        remove(todo)
    })
    p.addEventListener('dblclick',()=>{
        todoList.removeChild(p)
        remove(todo)
    })
}

function remove(todo){
    let index = todos.indexOf(todo)
    if (index > -1) {
        todos.splice(index, 1);
      }
    localStorage.setItem('todos',JSON.stringify(todos))
}