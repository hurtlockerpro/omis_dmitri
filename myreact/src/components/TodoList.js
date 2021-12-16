import { React, useState } from 'react'
import TodoItem from './TodoItem'


const TodoList = () => {

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
            { todos.map((todo, index) => (
                <TodoItem key={ index } todoItemTitle={ todo.title } />
            )) }
        </div>
    )
}

export default TodoList
