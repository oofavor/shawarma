// task 
// id
// description:string
// completed:boolean
let tasks = [] 
let id = 1

const addTask = (description) => {
  tasks.push({id, description, completed: false})
  id++;
  renderTasks()
}

const removeTask = (id) => {
  tasks = tasks.filter(task => task.id !== id)
  renderTasks()
}

const changeStatusTask = (id) => {
  tasks = tasks.map(task => {
    if (task.id == id) task.completed = !task.completed
    return task
  })
  console.log(tasks)
  renderTasks()
}


const addTaskButton = document.getElementById("add")
const taskTextField = document.getElementById("task")
const tasksContainer = document.getElementById("tasks")

addTaskButton.onclick = () => {
  addTask(taskTextField.value)
}

const renderTasks = () => {
  tasksContainer.innerHTML = ""

  tasks.forEach(task => {
    const taskElement = document.createElement("div")
    taskElement.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""} onclick="changeStatusTask(${task.id})">
      <span>${task.description}</span>
      <button onclick="removeTask(${task.id})">X</button>
    `
    tasksContainer.appendChild(taskElement)
  })
}
