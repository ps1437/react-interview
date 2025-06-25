### ✅ **1. Scenario: Component Re-rendering Issue**

**Question:**
You have a parent component that passes a callback prop to multiple child components. On every render, all children re-render even though props haven't changed. Why? How can you prevent this?

**Answer:**
Because the callback is re-created on each render (`() => {}` creates a new function reference), children think the prop changed.

**Solution:** Use `useCallback` to memoize the function:

```js
const handleClick = useCallback(() => {
  // logic
}, []);
```

Also wrap child components with `React.memo` to avoid unnecessary re-renders.

---

### ✅ **2. Scenario: Memory Leak in useEffect**

**Question:**
You fetch data using `useEffect`, but get a warning: "Can't perform a React state update on an unmounted component." What's the cause? How to fix it?

**Answer:**
This happens if the component unmounts before the async operation completes. When the fetch resolves, it tries to set state on an unmounted component.

**Solution:**

```js
useEffect(() => {
  let isMounted = true;
  fetchData().then(data => {
    if (isMounted) setData(data);
  });

  return () => {
    isMounted = false;
  };
}, []);
```

---

### ✅ **3. Scenario: Preserving Scroll Position**

**Question:**
How would you preserve scroll position when navigating between pages in a SPA built with React Router?

**Answer:**

* Use `react-router`'s location state to store scroll position.
* Use `useEffect` and `window.scrollTo(position)` on navigation.

Example:

```js
useEffect(() => {
  const scrollPos = sessionStorage.getItem('scroll');
  if (scrollPos) window.scrollTo(0, parseInt(scrollPos));
  return () => sessionStorage.setItem('scroll', window.scrollY);
}, []);
```

---

### ✅ **4. Scenario: State Update Not Reflecting**

**Question:**
You call `setState` and log the value immediately after, but it's not updated. Why?

**Answer:**
State updates are **asynchronous** and **batched**. So logging right after `setState` won’t show the updated value.

Use a `useEffect` hook to respond to the updated state:

```js
useEffect(() => {
  console.log(value);
}, [value]);
```

---

### ✅ **5. Scenario: Debounced Search Input**

**Question:**
How would you implement a debounced search input field in React?

**Answer:**

```js
const [query, setQuery] = useState('');
useEffect(() => {
  const timeout = setTimeout(() => {
    if (query) performSearch(query);
  }, 500);

  return () => clearTimeout(timeout);
}, [query]);
```

This delays the search function until 500ms after the user stops typing.

---

### ✅ **6. Scenario: Conditional Rendering Performance**

**Question:**
You have a large component with conditional blocks (`{isVisible && <HeavyComponent />}`), but performance is still slow. Why?

**Answer:**
Even though it's not rendered, the component is still **evaluated**. If `HeavyComponent` has logic in its body, it will run.

**Solution:**
Lazy load it with dynamic `import()` and `React.lazy()`:

```js
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
```

And use `Suspense` to wrap it:

```js
{isVisible && (
  <Suspense fallback={<div>Loading...</div>}>
    <HeavyComponent />
  </Suspense>
)}
```

---

### ✅ **7. Scenario: Global State Management Without Redux**

**Question:**
You want to manage app-wide state (theme, user) without using Redux. What options do you have?

**Answer:**

* **React Context API** (good for low-frequency updates)
* **Zustand** / **Jotai** / **Recoil** for better performance
* Use a global `useReducer` with context:

```js
const AppContext = createContext();
function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}
```

---

### ✅ **8. Scenario: Persist State on Refresh**

**Question:**
How would you persist user state (like login info or theme) across page reloads?

**Answer:**

* Use **localStorage** or **sessionStorage** with `useEffect`

```js
useEffect(() => {
  const data = localStorage.getItem('user');
  if (data) setUser(JSON.parse(data));
}, []);
useEffect(() => {
  localStorage.setItem('user', JSON.stringify(user));
}, [user]);
```

Or use libraries like `redux-persist`.

---

### ✅ **9. Scenario: Avoiding Prop Drilling**

**Question:**
Your deeply nested component needs access to a value from the top-level component. How do you avoid prop drilling?

**Answer:**

* Use **React Context** to share state between distant components.
* Alternatively, use a state management library like **Zustand**, **Recoil**, or **Redux**.

---

### ✅ **10. Scenario: Handling Errors in React**

**Question:**
How do you handle errors gracefully in a React component tree?

**Answer:**

* Use **Error Boundaries** for class components:

```js
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    return this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children;
  }
}
```

### ✅ **11. Scenario: Custom Hook for Form Handling**

**Question:**
You’re repeating form logic (handleChange, validation) in multiple components. What’s the best way to abstract this?

**Answer:**
Create a **custom hook** like `useForm`.

```js
function useForm(initialState) {
  const [form, setForm] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  return { form, handleChange };
}
```

Use it like:

```js
const { form, handleChange } = useForm({ name: '', email: '' });
```

---

### ✅ **12. Scenario: Optimizing Expensive Calculations**

**Question:**
A function does a heavy computation, and runs on every render. How do you optimize it?

**Answer:**
Use `useMemo` to memoize the result:

```js
const result = useMemo(() => heavyFunction(data), [data]);
```

This prevents re-calculation unless `data` changes.

---

### ✅ **13. Scenario: Accessibility (a11y)**

**Question:**
You build a modal, but screen readers and keyboard users can’t interact with it properly. What are your options?

**Answer:**

* Use `aria-*` attributes (`aria-modal`, `aria-labelledby`, `aria-describedby`)
* Trap focus inside modal
* Restore focus on close
* Use libraries like `@reach/dialog`, `react-aria`, or `headlessui`

---

### ✅ **14. Scenario: Prevent XSS in React**

**Question:**
How do you prevent Cross-Site Scripting (XSS) attacks in a React app?

**Answer:**

* Avoid using `dangerouslySetInnerHTML` unless absolutely necessary.
* Always sanitize input/output using a library like `DOMPurify` if injecting HTML.
* React escapes content by default, so do not turn that off unless needed.

---

### ✅ **15. Scenario: Server-Side Rendering (SSR)**

**Question:**
You’re using Next.js and fetch data in a page. How to ensure SEO bots see the content?

**Answer:**
Use **`getServerSideProps`** to fetch data **on the server before rendering**:

```js
export async function getServerSideProps() {
  const data = await fetchData();
  return { props: { data } };
}
```

This ensures content is in HTML before it reaches the client, helping SEO.

---

### ✅ **16. Scenario: Sharing Logic Between Components**

**Question:**
Two components have similar data fetching and error handling. How to reuse that logic?

**Answer:**
Abstract it into a **custom hook** like `useFetch`.

```js
function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData).catch(setError);
  }, [url]);
  return { data, error };
}
```

---

### ✅ **17. Scenario: Synchronizing Tabs**

**Question:**
User changes a theme in one browser tab, and you want all tabs to reflect the change. How?

**Answer:**
Use `storage` event listener:

```js
useEffect(() => {
  const handler = (e) => {
    if (e.key === 'theme') setTheme(e.newValue);
  };
  window.addEventListener('storage', handler);
  return () => window.removeEventListener('storage', handler);
}, []);
```

Set the theme in `localStorage` to trigger the change across tabs.

---

### ✅ **18. Scenario: Mocking API in Tests**

**Question:**
You use `fetch` in a component and want to write unit tests without making real API calls. What’s the solution?

**Answer:**
Use **Jest** to mock the `fetch` call:

```js
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve({ data: 'mocked' }) })
);
```

Or use libraries like **msw (Mock Service Worker)** for more realistic mocks.

---

### ✅ **19. Scenario: Preventing State Updates on Unmounted Component**

**Question:**
You get a React warning: `Can't perform a state update on an unmounted component`. What causes this?

**Answer:**
An async operation (e.g. fetch or timeout) completes after the component unmounted. You can prevent this using `AbortController` or a cleanup flag.

Example with AbortController:

```js
useEffect(() => {
  const controller = new AbortController();
  fetch(url, { signal: controller.signal }).catch(err => {
    if (err.name !== 'AbortError') throw err;
  });
  return () => controller.abort();
}, []);
```

---

### ✅ **20. Scenario: Controlled vs Uncontrolled Component**

**Question:**
You notice input fields don’t reflect React state properly. What could be the issue?

**Answer:**
Mixing controlled and uncontrolled inputs. A **controlled input** uses `value` + `onChange`, an **uncontrolled input** uses `defaultValue`.

Fix controlled input:

```js
<input value={name} onChange={(e) => setName(e.target.value)} />
```

Fix uncontrolled input:

```js
<input defaultValue="John" ref={ref} />
```


### ✅ **21. Scenario: Basic API Fetching**

**Question:**
How would you fetch data from an API when a component mounts?

**Answer:**
Use `useEffect` and `fetch`:

```js
useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(setData)
    .catch(setError);
}, []);
```

Use `useState` for managing `data`, `error`, and `loading`.

---

### ✅ **22. Scenario: Show Loader During API Call**

**Question:**
How do you display a loading indicator while fetching API data?

**Answer:**
Track loading with a state:

```js
const [loading, setLoading] = useState(true);
useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(setError)
    .finally(() => setLoading(false));
}, []);
```

In JSX:

```js
{loading ? <Spinner /> : <DataTable data={data} />}
```

---

### ✅ **23. Scenario: Retry Failed API Request**

**Question:**
How would you retry an API call if it fails due to a network error?

**Answer:**
Use a retry mechanism like this:

```js
const fetchWithRetry = async (url, attempts = 3) => {
  while (attempts > 0) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed");
      return await res.json();
    } catch (e) {
      attempts--;
      if (attempts === 0) throw e;
    }
  }
};
```

Call this in `useEffect`.

---

### ✅ **24. Scenario: Abort API Call on Component Unmount**

**Question:**
How do you prevent memory leaks by cancelling an API call when a component unmounts?

**Answer:**
Use `AbortController`:

```js
useEffect(() => {
  const controller = new AbortController();
  fetch('/api/data', { signal: controller.signal })
    .then(res => res.json())
    .then(setData)
    .catch(err => {
      if (err.name !== 'AbortError') setError(err);
    });

  return () => controller.abort();
}, []);
```

---

### ✅ **25. Scenario: API Pagination**

**Question:**
How would you implement infinite scroll or paginated API results?

**Answer:**
Track `page`, `data`, and `hasMore` state:

```js
const [page, setPage] = useState(1);
const [data, setData] = useState([]);
const [hasMore, setHasMore] = useState(true);

useEffect(() => {
  fetch(`/api/data?page=${page}`)
    .then(res => res.json())
    .then(newData => {
      setData(prev => [...prev, ...newData]);
      if (newData.length === 0) setHasMore(false);
    });
}, [page]);
```

Trigger `setPage(page + 1)` on scroll bottom.

---

### ✅ **26. Scenario: Refresh API Data Manually**

**Question:**
How would you let a user refresh the API data by clicking a button?

**Answer:**
Trigger `useEffect` manually with a refresh flag:

```js
const [refresh, setRefresh] = useState(false);

useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(setData);
}, [refresh]);

<button onClick={() => setRefresh(prev => !prev)}>Refresh</button>
```

---

### ✅ **27. Scenario: Multiple API Calls in Parallel**

**Question:**
How would you fetch data from multiple APIs at once?

**Answer:**
Use `Promise.all`:

```js
useEffect(() => {
  Promise.all([
    fetch('/api/users').then(res => res.json()),
    fetch('/api/posts').then(res => res.json())
  ]).then(([users, posts]) => {
    setUsers(users);
    setPosts(posts);
  });
}, []);
```

---

### ✅ **28. Scenario: Conditional API Calls**

**Question:**
You want to fetch user data **only if the user is logged in**. How?

**Answer:**

```js
useEffect(() => {
  if (!isLoggedIn) return;
  fetch('/api/user')
    .then(res => res.json())
    .then(setUser);
}, [isLoggedIn]);
```

This prevents API call when `isLoggedIn` is false.

---

### ✅ **29. Scenario: Handling 401 Unauthorized Globally**

**Question:**
How do you handle global API errors like 401 Unauthorized?

**Answer:**

* Use an API wrapper or interceptor.
* Example with `fetch`:

```js
const fetchWithAuth = async (url) => {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (res.status === 401) {
    logout(); // Or redirect to login
    throw new Error("Unauthorized");
  }
  return res.json();
};
```

---

### ✅ **30. Scenario: Debounce Search API**

**Question:**
You’re building a search input that calls an API as the user types. How do you prevent too many calls?

**Answer:**
Use `useEffect` with `setTimeout` (debounce pattern):

```js
useEffect(() => {
  const timeout = setTimeout(() => {
    if (query) fetch(`/api/search?q=${query}`).then(res => res.json()).then(setResults);
  }, 500);

  return () => clearTimeout(timeout);
}, [query]);
```


