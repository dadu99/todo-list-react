import { useState } from 'react'


export function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("") // initial state



  function handleSubmit(e) {
    e.preventDefault()

    if(newItem === "") return
    
    onSubmit(newItem);

    setNewItem("")
  }
    return (
        <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'>
          <h1 htmlFor='item'>New Item</h1>
          <input value={newItem} 
                 onChange={e => setNewItem(e.target.value)} 
                 type='text' 
                 id='item'>
          </input>
        </div>

        <button className='btn'>Add</button>
      </form>
    )
}