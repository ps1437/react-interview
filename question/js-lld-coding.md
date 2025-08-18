# JavaScript Interview Questions (Low-Level Design + Coding)

### 1. Counter Implementation

* Implement a counter in JavaScript.
* How would you handle **increment, decrement, and reset**?
* What about **maintaining state across multiple buttons**?

---

### 2. Recreate `Function.prototype.call()`

* How would you bind the **correct `this` context**?
* How do you handle **arguments dynamically**?

---

### 3. Recreate `Function.prototype.apply()`

* How is it different from `call()`?
* How do you **spread array arguments safely**?

---

### 4. Recreate `Function.prototype.bind()`

* How do you ensure the returned function **remembers context**?
* How would you handle **partial application of arguments**?

---

### 5. Implement a **Debounce** Function

* How would you **cancel a pending call**?
* Where is debounce useful in **real-world apps**?

---

### 6. Implement a **Throttle** Function

* How would you support both **leading and trailing** options?
* Where would **throttle** be preferred over **debounce**?

---

### 7. Implement an **Event Emitter**

* How would you implement **on, off, and once**?
* How would you handle **error propagation**?

---

### 8. Implement a **Promise.all** Polyfill

* How do you handle **one rejection**?
* How do you deal with an **empty array**?

---

### 9. Implement a **Promise.race** Polyfill

* How do you return the **first settled promise**?
* How would you handle **rejections**?

---

### 10. Flatten an Array

* How would you flatten **nested arrays of arbitrary depth**?
* How do you **optimize for very large arrays**?

---

### 11. Implement a **Deep Clone**

* How would you handle **nested objects, arrays, and dates**?
* How would you deal with **circular references**?

---

### 12. Implement a **Deep Equality Check**

* How would you compare **arrays vs objects**?
* How would you handle **edge cases like `NaN` or `null`**?

---

### 13. Implement **Memoization**

* How would you **cache expensive computations**?
* How would you handle **cache invalidation**?

---

### 14. Implement a **once()** Function

* How do you ensure the function executes **only once**?
* Would you return the **first computed result** on later calls?

---

### 15. Check for **Balanced Brackets**

* How would you extend to `{}`, `[]`, and `<>`?
* How do you handle **invalid orders**?

---

### 16. Check for **Anagrams**

* How would you **optimize for very large strings**?
* How do you handle **Unicode characters**?

---

### 17. Implement **Currying**

* How would you handle **multiple parameters**?
* What about **optional arguments**?

---

### 18. Implement an **LRU Cache**

* How would you implement **eviction**?
* What data structures would you use internally?

---

### 19. Reverse a **Linked List**

* How would you do it **iteratively vs recursively**?
* What about **stack safety in large lists**?

---

### 20. Implement **Image Lazy Loading**

* How would you **detect when images enter the viewport**?
* What **placeholder strategies** would you use (blur/skeleton)?

---

## 🔥 Additional Questions

### 21. Implement a **Polyfill for setTimeout using requestAnimationFrame**

* How do you emulate `setTimeout` without timers?
* What are the limitations of this approach?

---

### 22. Implement a **Task Scheduler**

* How would you design a function that **executes tasks with concurrency limits**?
* How would you handle **task retries on failure**?

---

### 23. Implement a **Retry Function**

* How would you retry a function on **failure with exponential backoff**?
* How would you **stop retries after max attempts**?

---

### 24. Implement a **Custom Virtual DOM Diffing Algorithm**

* How would you compare two **DOM trees efficiently**?
* How would you handle **keyed vs unkeyed lists**?

---

### 25. Implement an **Async Queue**

* How would you process tasks in **FIFO order asynchronously**?
* How would you **pause and resume** the queue?
