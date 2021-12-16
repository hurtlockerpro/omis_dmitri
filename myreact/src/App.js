import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import { useState } from 'react';
import TodoList from './components/TodoList';


function App() {
  const [newColor, setNewColor] = useState('yellow')
  return (
    <div className="myTodosContainer">
       <Header /> 
       <Button btnTitle="Add new" btnColor={ newColor == 'yellow' ? 'orange' : 'black'} />

       <TodoList />  
    </div>
  );
}

export default App;
