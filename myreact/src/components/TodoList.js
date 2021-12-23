import { React, useState } from 'react'
import TodoItem from './TodoItem'


const TodoList = ({ todos, deleteTodo }) => {

    return (
        <div>
            { 
            todos.map((todo, index) => (
                <TodoItem 
                    key={ index } 
                    todoItem={ todo } 
                    btnOnClickFn={ deleteTodo } />
            )) 
            }
        </div>
    )
}

export default TodoList
