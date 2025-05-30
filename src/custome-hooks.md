# Creating Custom Hooks in React

Custom hooks in React allow you to extract component logic into reusable functions. They enable sharing logic across components without repeating code.

---

## What is a Custom Hook?

- A custom hook is a JavaScript function whose name starts with `use` and that may call other hooks.
- It encapsulates reusable logic related to stateful behavior or side effects.
- Custom hooks help keep components clean and modular.

---

## Basic Example: useCounter Hook

This custom hook manages a counter state with increment and decrement functions.

```jsx
import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

export default useCounter;
```
---
### Usage

```jsx
import React from 'react';
import useCounter from './useCounter';

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterComponent;
```

---
 ## UseFetch


```jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

#Usage

```jsx
import React from 'react';
import useFetch from './useFetch';

function DataComponent() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default DataComponent;

```

Key Points to Remember
Custom hooks must start with use to allow React to track hook calls.

They can call other hooks (e.g., useState, useEffect).

They help you reuse logic easily and keep components clean.

Custom hooks do not render UI themselves; they return values and functions.