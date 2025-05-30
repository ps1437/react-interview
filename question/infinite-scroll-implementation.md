# Infinite Scroll Implementation in React (JavaScript)

This guide explains how to implement **infinite scroll** in a React application using **JavaScript** with modern `useEffect` and `IntersectionObserver`.

---

## ✅ When to Use Infinite Scroll

- Loading a long list of data (e.g., blog posts, comments, products).
- Better UX than pagination for mobile and feed-like interfaces.

---

## 📦 Setup

You need a component that:
1. Fetches data from an API.
2. Adds more data when the user scrolls near the bottom.

---

## 🚀 Implementation

### 1. Basic Functional Component Using Intersection Observer

```jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';

const InfiniteScrollList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  const fetchData = async (page) => {
    const res = await fetch(\`https://api.example.com/items?page=\${page}\`);
    const data = await res.json();

    setItems(prev => [...prev, ...data.items]);
    setHasMore(data.hasMore);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const observerCallback = useCallback((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && hasMore) {
      setPage(prev => prev + 1);
    }
  }, [hasMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    });

    const node = loaderRef.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [observerCallback]);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="item">{item.name}</div>
      ))}
      {hasMore && <div ref={loaderRef} className="loading">Loading more...</div>}
    </div>
  );
};

export default InfiniteScrollList;
```

---

## 🧠 Tips

- Use a **loading spinner** or skeleton loader when fetching.
- Debounce or throttle API calls if necessary.
- Avoid memory leaks by cleaning up observers.
- For older browsers, consider using scroll events instead.

---

## 🧩 Alternative: Scroll Event Listener

```js
useEffect(() => {
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      hasMore
    ) {
      setPage(prev => prev + 1);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [hasMore]);
```

---

## 📌 Summary

| Method                  | Pros                         | Cons                          |
|-------------------------|------------------------------|-------------------------------|
| `IntersectionObserver`  | Efficient, declarative       | Needs polyfill for old browsers |
| Scroll Event            | Broad compatibility          | Can be less efficient         |

---

> ✅ Infinite scrolling enhances UX, but ensure accessibility and usability on slow networks.
