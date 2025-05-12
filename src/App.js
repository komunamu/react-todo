import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (event) => {
    // prevent default behavior of the form eg. reloading the page
    event.preventDefault();
    if (todo === "") {
      return;
    }
    
    //same ss function(currentArray) => 
    setTodos(currentArray => [todo, ...currentArray]);
    setTodo("");
    console.log(todos);
  
  };
  
  return (
    <div className="App">
      <h1> My To Dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type="text" 
          onChange={onChange}
          value={todo} 
          placeholder='write your to do...'/>
          <button >Add To Do</button>
      </form>
      <hr/>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
