# Different Types of React Hooks and Their Use Cases

React hooks are functions that let you use state and other React features without writing a class. Here’s a rundown of the main hooks and when to use them.

---

## 1. useState

**What it does:**  
Adds state to functional components.

**Use case:**  
Managing simple local component state like form inputs, toggles, counters.

```jsx
const [count, setCount] = useState(0);
```
---

## 2. useEffect
What it does:
Runs side effects in functional components — data fetching, subscriptions, manually changing the DOM, timers.

Use case:
Fetching data on component mount, setting up event listeners, or cleaning up timers.

```jsx
useEffect(() => {
  fetchData();
}, []); // Runs once on mount
```

---
## 3. useContext
What it does:
Accesses React Context in functional components.

Use case:
Sharing global data like theme, user authentication, language settings without prop drilling.

```jsx
const theme = useContext(ThemeContext);

```

---
## 4. useReducer
What it does:
Manages complex state logic, an alternative to useState.

Use case:
Complex forms, state with multiple sub-values or when the next state depends on previous.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

---
## 5. useCallback
What it does:
Returns a memoized callback to optimize performance by preventing unnecessary re-creations of functions.

Use case:
Passing stable callback references to child components to avoid unnecessary renders.

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

---

## 6. useMemo
What it does:
Returns a memoized value to avoid expensive calculations on every render.

Use case:
Optimizing performance for expensive computations or derived data.

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
---

7. useRef
What it does:
Accesses mutable refs that persist across renders, often for DOM nodes or storing mutable variables.

Use case:
Managing focus, text selection, storing interval IDs, or keeping previous state.

```jsx
const inputRef = useRef();

```