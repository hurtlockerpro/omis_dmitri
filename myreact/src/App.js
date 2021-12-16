//import './App.css';
import Header from './components/Header';
import CustomButton from './components/CustomButton';
import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [newColor, setNewColor] = useState('yellow')
  return (
    <div className="myTodosContainer">
       <Header /> 
       <CustomButton btnTitle="Add new" btnColor={ newColor == 'yellow' ? 'orange' : 'black'} />
       <AddTodo />
       <Button className='btn btn-primary' variant="primary">sfdgsfgsa</Button>

       <TodoList />  
    </div>
    
  );
}

export default App;
