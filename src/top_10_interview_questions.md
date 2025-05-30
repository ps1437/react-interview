# Top 10 React Interview Questions with Answers

1. **What are the main features of React?**

   * Virtual DOM, Components, JSX, One-way Data Binding, Performance, Hooks.

2. **What is the Virtual DOM and how does React use it?**

   * Virtual DOM is an in-memory representation of the real DOM. React updates the Virtual DOM first and then efficiently updates the real DOM using diffing algorithms.

3. **Explain the difference between functional and class components.**

   * Functional components are plain JS functions, often stateless. Class components can hold state and lifecycle methods (before hooks). Now, functional components can use hooks for state and side effects.

4. **What are hooks? Name some commonly used hooks.**

   * Hooks are functions that let you use React state and lifecycle features in functional components. Common hooks: `useState`, `useEffect`, `useContext`, `useMemo`, `useCallback`.

5. **How does React handle events?**

   * React uses Synthetic Events, a cross-browser wrapper around native events, with consistent interface and behavior.

6. **What is the purpose of keys in React lists?**

   * Keys help React identify which items have changed, are added, or removed, improving rendering performance.

7. **How do you optimize performance in a React application?**

   * Use `React.memo`, `useMemo`, `useCallback`, code splitting with `React.lazy` and `Suspense`, and avoid unnecessary re-renders.

8. **Explain the concept of Higher-Order Components (HOC).**

   * HOCs are functions that take a component and return a new component to add shared functionality.

9. **How does React’s context API work?**

   * It provides a way to pass data through the component tree without props drilling by creating a context and using Provider and Consumer or `useContext`.

10. **What is the difference between controlled and uncontrolled components?**

    * Controlled components get their value from React state and notify changes via callbacks. Uncontrolled components manage their own state internally, accessed via refs.

---

# Top 10 JavaScript Interview Questions with Answers

1. **What are closures and how are they used?**

   * Closures are functions that remember the environment in which they were created. Used for data privacy and function factories.

2. **Explain prototypal inheritance.**

   * Objects inherit properties from other objects via the prototype chain, enabling reuse of methods.

3. **What is the event loop in JavaScript?**

   * The event loop manages execution of code, handling asynchronous callbacks, by monitoring the call stack and task queue.

4. **Difference between `var`, `let`, and `const`.**

   * `var`: function scoped, hoisted. `let` and `const`: block scoped, `const` is read-only after assignment.

5. **What are promises and how do you use them?**

   * Promises represent future completion/failure of async operations, handled with `.then()`, `.catch()`, or `async/await`.

6. **Explain async/await.**

   * Syntactic sugar over promises, making asynchronous code look synchronous using `async` functions and `await`.

7. **What is hoisting in JavaScript?**

   * Variable and function declarations are moved to the top of their scope before code execution.

8. **Difference between `==` and `===`.**

   * `==` compares values with type coercion, `===` compares both type and value strictly.

9. **What is the difference between synchronous and asynchronous programming?**

   * Synchronous runs code line by line; asynchronous allows operations to run in the background.

10. **What are arrow functions and how are they different from regular functions?**

    * Arrow functions have a shorter syntax and do not have their own `this`, `arguments`, or `prototype`.

---

# Top 10 HTML & CSS Interview Questions with Answers

1. **What is the difference between `id` and `class` in HTML?**

   * `id` is unique per page, used for single elements; `class` can be shared by multiple elements.

2. **Explain the box model in CSS.**

   * Consists of content, padding, border, and margin that define element spacing and size.

3. **What are semantic HTML elements?**

   * Elements that clearly describe their meaning like `<header>`, `<footer>`, `<article>`, improving accessibility.

4. **How do you center a div horizontally and vertically?**

   * Using Flexbox:

     ```css
     display: flex;
     justify-content: center;
     align-items: center;
     ```

5. **What is the difference between relative, absolute, and fixed positioning?**

   * `relative`: positioned relative to itself;
   * `absolute`: positioned relative to nearest positioned ancestor;
   * `fixed`: positioned relative to viewport.

6. **Explain CSS specificity.**

   * Determines which CSS rule applies if multiple rules target the same element.

7. **What are media queries and how do they work?**

   * CSS techniques to apply styles based on device characteristics like width or resolution.

8. **How does Flexbox work?**

   * Layout model for arranging items in one dimension (row or column) with flexible sizing.

9. **What is the difference between `em`, `rem`, `%`, and `px` units in CSS?**

   * `px`: fixed size;
   * `em`: relative to parent font size;
   * `rem`: relative to root font size;
   * `%`: relative to parent property.

10. **What are pseudo-classes and pseudo-elements in CSS?**

    * Pseudo-classes target elements in a specific state (e.g., `:hover`), pseudo-elements style parts of elements (e.g., `::before`).

---

# Top 10 Coding Questions with Solutions

1. **Reverse a string**

   ```js
   function reverseString(str) {
     return str.split('').reverse().join('');
   }
   ```

2. **Find the factorial of a number**

   ```js
   function factorial(n) {
     return n <= 1 ? 1 : n * factorial(n - 1);
   }
   ```

3. **Check if a string is a palindrome**

   ```js
   function isPalindrome(str) {
     const reversed = str.split('').reverse().join('');
     return str === reversed;
   }
   ```

4. **Find the largest number in an array**

   ```js
   function maxInArray(arr) {
     return Math.max(...arr);
   }
   ```

5. **Remove duplicates from an array**

   ```js
   function removeDuplicates(arr) {
     return [...new Set(arr)];
   }
   ```

6. **Merge two sorted arrays**

   ```js
   function mergeSortedArrays(arr1, arr2) {
     let result = [], i = 0, j = 0;
     while (i < arr1.length && j < arr2.length) {
       if (arr1[i] < arr2[j]) result.push(arr1[i++]);
       else result.push(arr2[j++]);
     }
     return result.concat(arr1.slice(i)).concat(arr2.slice(j));
   }
   ```

7. **Find the missing number in an array of 1 to N**

   ```js
   function findMissingNumber(arr, n) {
     const total = (n * (n + 1)) / 2;
     const sum = arr.reduce((a, b) => a + b, 0);
     return total - sum;
   }
   ```

8. **Check if two strings are anagrams**

   ```js
   function areAnagrams(str1, str2) {
     return str1.split('').sort().join('') === str2.split('').sort().join('');
   }
   ```

9. **Implement Fibonacci sequence**

   ```js
   function fibonacci(n) {
     if (n <= 1) return n;
     return fibonacci(n - 1) + fibonacci(n - 2);
   }
   ```

10. **Find the first non-repeated character in a string**

    ```js
    function firstNonRepeatedChar(str) {
      for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
          return str[i];
        }
      }
      return null;
    }
    ```

---
