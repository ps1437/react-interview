
# React Optimization Techniques

Optimizing React applications improves performance, reduces unnecessary renders, and enhances user experience. Below are some common techniques with code examples.

---

## 1. Memoization with `React.memo`

Prevents unnecessary re-rendering of functional components when props haven't changed.

```jsx
import React from 'react';

const MyComponent = React.memo(({ name }) => {
  console.log('Rendered:', name);
  return <div>Hello, {name}!</div>;
});

export default MyComponent;
```

---

## 2. Using `useMemo` for Expensive Calculations

```jsx
import React, { useMemo } from 'react';

function ExpensiveComponent({ number }) {
  const factorial = useMemo(() => {
    console.log('Calculating factorial...');
    const calculateFactorial = (n) => (n <= 1 ? 1 : n * calculateFactorial(n - 1));
    return calculateFactorial(number);
  }, [number]);

  return <div>Factorial of {number} is {factorial}</div>;
}
```

---

## 3. Using `useCallback` to Memoize Callbacks

```jsx
import React, { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <Child onClick={increment} />;
}

const Child = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Increment</button>;
});
```

---

## 4. Code Splitting with `React.lazy` and `Suspense`

```jsx
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

---

## 5. Avoid Anonymous Functions and Inline Objects in JSX

```jsx
// Bad: Creates new function every render
<button onClick={() => console.log('Clicked!')}>Click</button>

// Better: Define once
const handleClick = () => console.log('Clicked!');
<button onClick={handleClick}>Click</button>
```

---

## 6. Virtualize Large Lists with `react-window` or `react-virtualized`

```jsx
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

function VirtualizedList() {
  return (
    <List
      height={150}
      itemCount={1000}
      itemSize={35}
      width={300}
    >
      {Row}
    </List>
  );
}
```

---

## 7. Avoid Unnecessary State Updates

```jsx
// Instead of multiple state updates
setCount(count + 1);
setFlag(true);

// Batch into one update or use functional updates
setState(prev => ({ count: prev.count + 1, flag: true }));
```
