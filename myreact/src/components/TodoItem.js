import React from 'react'
import Button from './Button'

const TodoItem = ({ todoItemTitle }) => {
    return (
        <div>
            <h3>{ todoItemTitle }</h3>
            <Button btnTitle="delete" btnColor="red" />
        </div>

    )
}

export default TodoItem
