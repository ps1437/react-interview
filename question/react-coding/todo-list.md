## Question: Build a Todo List Component

Create a React component called `TodoList` that allows a user to:

- Add new todos via an input field.
- Display the list of todos.
- Mark a todo as completed by clicking on it (toggle completed status).
- Remove a todo from the list.

### Requirements:
- Use functional components and React hooks (`useState`).
- Todos should be displayed with completed todos styled differently (e.g., line-through).
- Provide an input box and a button to add a new todo.

---

## Sample Solution

```jsx
import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Add new todo
  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput('');
  };

  // Toggle completed status
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Remove a todo
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        placeholder="Add a new todo"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
      />
      <button onClick={addTodo}>Add</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #ccc',
            }}
          >
            <span>{todo.text}</span>
            <button onClick={(e) => { e.stopPropagation(); removeTodo(index); }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
````

---

### Explanation:

* The component uses two pieces of state: `todos` array and `input` string.
* Adding a todo appends a new object to the `todos` list.
* Clicking a todo toggles its `completed` status.
* Each todo displays a "Remove" button that deletes it without toggling completion.
* Styling is applied inline to indicate completed todos with a line-through.

