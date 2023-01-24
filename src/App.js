import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import FilterTask from "./components/FilterTask"
import Footer from "./components/Footer"



const App = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
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

  // // filter a task
  const filterTask = (task) => {
    return task.text.toLowerCase().includes(filter.toLowerCase())
  }
 //LUDDIGT HÄR

  // ta bort task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('delete', id)
  }

  const deleteAllTasks = () => {
    setTasks([])
  }

  // ta bort alla tasks
  
const filteredList = tasks.filter (filterTask) 


  return (
    <div className='container'>
      <Header />
      <AddTask onAdd={addTask}/>
      <hr></hr>
      <FilterTask filterInput={filter} setInputFilter={setFilter} />
      {tasks.length > 0 ? (
        <Tasks tasks={filteredList} onDelete=
        {deleteTask}  />
      ) : (
        'Inga aktiviteter att visa :('
      )}
      <Footer onDeleteAll={deleteAllTasks} />
    
      
    </div>
  ) 
      
}

export default App
