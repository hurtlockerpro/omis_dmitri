import React from 'react'
import CustomButton from './CustomButton'

const TodoItem = ({ todoItemTitle, btnOnClickFn }) => {
    return (
        <div>
            <h3>{ todoItemTitle } <CustomButton btnTitle="delete" btnColor="red" btnOnClick={btnOnClickFn} /></h3>
        </div>
    )
}

export default TodoItem
