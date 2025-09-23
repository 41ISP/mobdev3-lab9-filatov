import { useState } from 'react'
import './App.css'
import Todo from './components/Todo/Todo'

function App() {
  const [todoName, setTodoName] = useState("")
  const [todos, setTodos] = useState("")
   const handleSubmit = (e) => {
    e.preventDefault();
    const text = todoName.trim();
    
    if (text) {
      onAdd(text);
      setTodoName('');
    }
    const todo = {
      name: name,
      id: crypto.randomUUID(),
      done:false,
    }
    setTodos((oldValue) => [todo, ...oldValue])
  };


  return (
    <div className="container">
        <div className="header">
            <h1>Todo App</h1>
            <p>Управляйте своими задачами</p>
        </div>

        <div className="add-todo">

          
            <div className="input-container">
              <form onSubmit={handleSubmit} className="add-todo-form">
                <input type="text" className="todo-input" 
                placeholder="Добавить новую задачу..." 
                id="todoInput"
                value = {todoName}
                onChange={(e)=> setTodoName(e.target.value)}/>
                <button type="submit"className="add-btn" id="addBtn">Добавить</button>
            </form>
            </div>
        </div>

        <div className="filters">
            <button className="filter-btn active" data-filter="all">Все</button>
            <button className="filter-btn" data-filter="active">Активные</button>
            <button className="filter-btn" data-filter="completed">Завершенные</button>
        </div>

        <div className="todo-list">
            <Todo/>
            
        </div>

        <div className="stats">
            Всего: 4 | Активных: 3 | Завершено: 1
        </div>
    </div>
  )
}

export default App
