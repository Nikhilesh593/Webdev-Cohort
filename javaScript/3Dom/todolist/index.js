alert("linked")
const addbtn = document.getElementById("add-btn")
const todoinp = document.getElementById("todo-input")
const todoiteams = document.getElementById("todoiteams")

addbtn.addEventListener('click', () => {
    const value = todoinp.value
    console.log('user entered', value);
    const li = document.createElement('li')
    li.innerText = value
    // console.log(li);
    const delbuton = document.createElement('button')
    delbuton.innerText = 'X'
    li.appendChild(delbuton)
    delbuton.addEventListener('click', function () {
        li.remove()
    })

    todoiteams.appendChild(li);
    todoinp.value = ''
});

