import './Todo.css';

function Todo() {
  return (

            <div className="todo-item completed">
                <input type="checkbox" className="todo-checkbox" checked/>
                <span className="todo-text">Настроить рабочее окружение</span>
                <button className="delete-btn">Удалить</button>
            </div>
             
        )
}

export default Todo