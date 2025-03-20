// task 
// id:number
// description:string
// completed:boolean
let tasks = [] 

const generateId = () => {
  return Math.floor(Math.random() * 1000)
}

const addTask = (description) => {
  tasks.push({id: generateId(), description, completed: false})
  renderTasks()
}

const removeTask = (id) => {
  tasks = tasks.filter(task => task.id !== id)
  renderTasks()
}

const changeStatusTask = (id) => {
  tasks = tasks.map(task => {
    if (task.id === id) task.completed = !task.completed
    return task
  })
  console.log(tasks)
  renderTasks()
}

const addTaskButton = document.getElementById("add")
const taskTextField = document.getElementById("task")
const tasksContainer = document.getElementById("tasks")

addTaskButton.addEventListener("click", (e) => {
  addTask(taskTextField.value)
})

const renderTasks = () => {
  tasksContainer.innerHTML = ""

  tasks.forEach(task => createTask(task))

  saveTasks()
}

const createTask = task => {
    const taskElement = document.createElement("div")
    taskElement.classList.add("task")

    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.checked = task.completed
    checkBox.addEventListener("click", (e) => changeStatusTask(task.id))

    const taskText = document.createElement("span")
    taskText.innerText = task.description
    taskText.className = task.completed ? "completed" : ""

    const removeButton = document.createElement("button")
    removeButton.textContent = "X"
    removeButton.addEventListener("click", (e) => removeTask(task.id))

    taskElement.appendChild(checkBox)
    taskElement.appendChild(taskText)
    taskElement.appendChild(removeButton)

    tasksContainer.appendChild(taskElement)
}

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

const loadTasks = () => {
  tasks = JSON.parse(localStorage.getItem("tasks")) || []
  renderTasks()
}

loadTasks()