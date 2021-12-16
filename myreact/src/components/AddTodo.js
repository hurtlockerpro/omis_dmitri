import React from 'react'

const AddTodo = () => {
    return (
        <form>
            <div className="form-control">
                <label>Todo</label>
                <input type="text" placeholder='Add ToDo' />
            </div>
            <div className="form-control">
                <label>Date/Time</label>
                <input type="text" placeholder='Add Date/Time' />
            </div>
            <div className="form-control">
                <label>Set Reminder</label>
                <input type="checkbox" />
            </div>

            <input type="submit" value="Save" className='btn btn-save' />

        </form>
    )
}

export default AddTodo
