import React, { useState } from 'react'

const AddTodo = ({ addNewTodo }) => {
    
    const [todoText, setTodoText] = useState('')
    const [todoDate, setTodoDate] = useState('')
    const [todoReminder, setTodoReminder] = useState(false)

    /*
    document.getElementById('form').addEventListener('submit', event => {
        // logic
    })
    */

    const frmOnSubmit = (event)  => {
        event.preventDefault()
       // console.log(event)
       console.log(todoText, todoDate, todoReminder)

        if (todoText.length == 3) 
        {
            alert('Please insert todo text')
            return
        }

        addNewTodo({ todoText, todoDate, todoReminder })
    }


    return (
        <form onSubmit={ frmOnSubmit }>
            <div className="form-control">
                <label>Todo</label>
                <input 
                    type="text" 
                    placeholder='Add ToDo' 
                    value={todoText}
                    onChange={ event => setTodoText(event.target.value) }
                />
            </div>
            <div className="form-control">
                <label>Date/Time</label>
                <input 
                    type="text" 
                    placeholder='Add Date/Time' 
                    value={todoDate}
                    onChange={ event => setTodoDate(event.target.value) }
                />
            </div>
            <div className="form-control">
                <label>Set Reminder</label>
                <input 
                    type="checkbox"
                    checked={todoReminder}
                    onChange={ event => setTodoReminder(event.target.checked) }
                />
            </div>

            <input type="submit" value="Save" className='btn btn-primary' />

        </form>
    )
}

export default AddTodo
