import React from 'react'
import CustomButton from './CustomButton'

const TodoItem = ({ todoItem, btnOnClickFn }) => {
    return (
        <div>
            <h3>{ todoItem.title } 
            <CustomButton 
                btnTitle="delete" 
                btnColor="red" 
                btnOnClick={ () => btnOnClickFn(todoItem.id)} /></h3>
        </div>
    )
}

export default TodoItem
