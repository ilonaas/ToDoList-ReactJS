import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText ] = useState('')

const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
        alert('Please add a task dumbass')
        return
    }
    onAdd({text})
    setText('')
}

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control form-control-check'>
        <p className="add-task-title">Task:</p>
        <input 
        type='text' 
        placeholder='Add Task' 
        value={text} 
        onChange={(e) => setText(e.target.value)}/>
      </div>

      <input type='submit' value='Save Task' className="btn-block"/>
       {/* kankse ändra class block */}
    </form>
  )
}

export default AddTask
