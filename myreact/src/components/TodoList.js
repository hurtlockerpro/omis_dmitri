import { React, useState } from 'react'
import TodoItem from './TodoItem'




const TodoList = () => {

    const deleteTodo =  ( id ) => {
        console.log('clicked (to delete): ' + id)
        if (id > 0)
        {
            setTodos(todos.filter(todo => todo.id !== id))
        }
    }

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'todo 1',
            time: '16.12.2021',
            toggle: false
        },
        {
            id: 2,
            title: 'todo 2',
            time: '16.12.2021',
            toggle: false
        },
        {
            id: 3,
            title: 'todo 3',
            time: '16.12.2021',
            toggle: false
        }
    ])

    return (
        <div>
            { 
            todos.map((todo, index) => (
                <TodoItem 
                    key={ index } 
                    todoItemTitle={ todo.title } 
                    btnOnClickFn={() => deleteTodo(todo.id)} />
            )) 
            }
        </div>
    )
}

export default TodoList
