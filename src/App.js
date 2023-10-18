import React, { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);

  const [todoTitle, setTodoTitle] = useState('');

  const addTodo = (event) => {
    if (event.key === 'Enter') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false,
        },
      ]);
      setTodoTitle('')
    }
  }

  return (
    <div className="container">
      <h1>Todo app</h1>
      <div className="input-field">
        <input
          type="text"
          value={todoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
          onKeyPress={addTodo}
        />
        <label>Todo name</label>
      </div>
      <TodoList todos={todos} />
    </div>
  );
}


function TodoList({todos}) {
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
}


function TodoItem({title}) {
  return (
    <li className="todo">
      <label>
        <span>{title}</span>
      </label>
    </li>
  );
}

export default Todo;
