# 🔁 Reducer Pattern & Middleware in React/Redux

## 🧩 Reducer Pattern

### What is a Reducer?

A **reducer** is a pure function that takes the current state and an action, and returns a new state.

```js
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
```

### Where it's Used:

* **Redux** (`createStore(reducer)`)
* **React's useReducer Hook** (`const [state, dispatch] = useReducer(reducer, initialState)`)

### Benefits:

* Predictable state transitions
* Easier to test (pure functions)
* Centralized state updates

---

## 🛠️ Middleware in Redux

### What is Middleware?

Middleware in Redux provides a way to extend Redux with custom functionality such as logging, asynchronous operations, etc. It sits between **dispatching an action** and the **moment it reaches the reducer**.

### Middleware Flow:

```
Action -> Middleware -> Reducer -> New State
```

### Common Middlewares:

* **redux-thunk**: allows you to write action creators that return a function instead of an action (for async logic)
* **redux-logger**: logs actions and state transitions
* **redux-saga**: handles complex async flows using generators

### Example: Thunk Middleware

```js
const fetchUser = () => {
  return async (dispatch) => {
    dispatch({ type: 'USER_REQUEST' });
    const response = await fetch('/api/user');
    const data = await response.json();
    dispatch({ type: 'USER_SUCCESS', payload: data });
  };
};
```

---

## 🚀 Summary

| Concept    | Purpose                                           |
| ---------- | ------------------------------------------------- |
| Reducer    | Handles state updates based on dispatched actions |
| Middleware | Intercepts actions before they reach the reducer  |

* Reducer = Pure, synchronous state logic
* Middleware = Side effects, async tasks, logging, etc.

Use them **together** for robust, maintainable state management in complex React/Redux apps.
