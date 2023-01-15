import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import FilterTask from "./components/FilterTask"
import Footer from "./components/Footer"


const App = () => {
  const [query, setQuery] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Läkartid',
    },
    {
      id: 2,
      text: 'Möte i skolan',
    },
    {
      id: 3,
      text: 'Handla mat',
    }
  ])

  // add task
  const addTask = (task) => {
   const id = Math.floor(Math.random() * 100) + 1
   const newTask = { id, ...task}
   setTasks([...tasks, newTask])

   console.log(id)
   console.log(task)
  }

  // filter a task
  const filterTask = (task) => {
    {task.filter((task) =>
      task.text.toLowerCase().includes(query)
      ).map((task) => (''))}
  }
 //LUDDIGT HÄR

  // ta bort task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('delete', id)
  }

  // ta bort alla tasks
  

  return (
    <div className='container'>
      <Header />
      <AddTask onAdd={addTask}/>
      <hr></hr>
      <FilterTask/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
        {deleteTask} />
      ) : (
        'Inga aktiviteter att visa :('
      )}
      <Footer/>
    </div>
  ) 
      
}

export default App
