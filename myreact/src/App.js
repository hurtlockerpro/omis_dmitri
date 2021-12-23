import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [newColor, setNewColor] = useState('yellow')
  const [showAddTodoForm, setShowAddTodoForm] = useState(false)
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

  useEffect(() => {
    
    const getTodos = async () => {
      const todosFromServer = await fetchTodos()
      setTodos(todosFromServer)
    }
    getTodos()
  }, [])  

  const fetchTodos = async () => {
    const res = await fetch('http://localhost:5000/todos', { 
      method: 'GET'
    })
    const data = await res.json()

    return data
  }

  /* 
  // old  function work localy
  const deleteTodo =  ( id ) => {
    console.log('clicked (to delete): ')
    console.log(id)

    if (id > 0)
    {
        setTodos(todos.filter(todo => todo.id !== id))
    }
  }
  */

  const deleteTodo =  ( id ) => {
    const res = fetch('http://localhost:5000/todos/' + id, {
      method: 'DELETE'
    })

  }
 
  // function x(...data){}

  /*  
  // old function working localy 
  const addNewTodo = (data) => {

    const newTodo = {
      id: todos.length + 1,
      title: data.todoText,
      time: data.todoDate,
      toggle: data.todoReminder
    }
    console.log(newTodo)
    setTodos([...todos, newTodo])
  }
  */

  const addNewTodo = (data) => {

    const newTodo = {
      id: todos.length + 1,
      title: data.todoText,
      time: data.todoDate,
      toggle: data.todoReminder
    }

    const res = fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
  }

  const changeButtonState = () => {
    setShowAddTodoForm(!showAddTodoForm)
  }
  
  return (
    <div className="myTodosContainer">
       <Header 
        showAddTodoForm={showAddTodoForm}
        //showOnClick={ () => setShowAddTodoForm(!showAddTodoForm) }
        showOnClick={ () => changeButtonState() }
        /> 
       
       { showAddTodoForm && <AddTodo addNewTodo= { addNewTodo } />}
       { 
       // showAddTodoForm == true ?  <AddTodo /> : 'no form' 
       }
       
       <TodoList 
        todos={ todos } 
        deleteTodo={ deleteTodo }  
      />  
    </div>
    
  );
}

export default App;
