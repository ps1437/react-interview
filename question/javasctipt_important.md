## JavaScript Interview Questions and Answers

### Basic

#### What's the difference between a JavaScript variable that is: null, undefined or undeclared?

**Answer:**

* `null`: A variable that has been explicitly set to no value.
* `undefined`: A variable that has been declared but not assigned a value.
* `undeclared`: A variable that has not been declared in the accessible scope.

**Example:**

```js
let a = null;      // a is declared and explicitly set to null
let b;             // b is declared but undefined
console.log(c);    // ReferenceError: c is not defined (undeclared)
```

#### What's the difference between .call and .apply in JavaScript?

**Answer:** Both invoke functions with a given `this` context, but:

* `call`: Accepts arguments individually.
* `apply`: Accepts arguments as an array.

**Example:**

```js
function greet(greeting, name) {
  console.log(`${greeting}, ${name}`);
}
greet.call(null, 'Hello', 'Alice');       // Hello, Alice
greet.apply(null, ['Hello', 'Bob']);      // Hello, Bob
```

#### What is the definition of a higher-order function in JavaScript?

**Answer:** A function that takes another function as an argument or returns a function.

**Example:**

```js
function higherOrder(fn) {
  return function(x) {
    return fn(x);
  };
}
const square = x => x * x;
const squared = higherOrder(square);
console.log(squared(5)); // 25
```

#### Describe event bubbling in JavaScript and browsers

**Answer:** Events propagate from the innermost target element to the outermost ancestors.

**Example:**

```js
document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked');
});
document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
});
```

#### Describe event capturing in JavaScript and browsers

**Answer:** Events propagate from the outermost ancestor to the innermost target.

**Example:**

```js
document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent capturing');
}, true);
```

#### What is 'use strict'; in JavaScript for?

**Answer:** Enforces stricter parsing and error handling in your JavaScript code.

**Example:**

```js
'use strict';
x = 3.14; // ReferenceError: x is not defined
```

#### How do you abort a web request using AbortController in JavaScript?

**Answer:** By calling `.abort()` on the controller instance.

**Example:**

```js
const controller = new AbortController();
fetch('/api', { signal: controller.signal });
controller.abort();
```

#### What are JavaScript polyfills for?

**Answer:** Scripts that replicate modern JavaScript features on older browsers.

**Example:**

```js
if (!Array.prototype.includes) {
  Array.prototype.includes = function(search) {
    return this.indexOf(search) !== -1;
  };
}
```

#### Explain the difference between mutable and immutable objects in JavaScript

**Answer:**

* Mutable: Can be changed after creation.
* Immutable: Cannot be changed after creation.

**Example:**

```js
let a = { x: 1 };
let b = a; // mutable, both a and b reference same object
a.x = 2;
console.log(b.x); // 2
```

#### What are the differences between Map/Set and WeakMap/WeakSet?

**Answer:**

* WeakMap/WeakSet only accept objects as keys.
* They are not enumerable and do not prevent garbage collection.

**Example:**

```js
let map = new Map();
let weakMap = new WeakMap();
let obj = {};
map.set(obj, 'value');
weakMap.set(obj, 'value');
```

#### What are Symbols used for in JavaScript?

**Answer:** Unique and immutable primitive values used as object property keys to avoid collisions.

**Example:**

```js
const sym = Symbol('desc');
const obj = { [sym]: 'hidden' };
```

#### How do you convert a string to a number in JavaScript?

**Answer:** Use `Number()`, unary `+`, `parseInt()`, or `parseFloat()`.

**Example:**

```js
Number("123")      // 123
+"123"             // 123
parseInt("123")    // 123
parseFloat("123.45") // 123.45
```

#### What is the spread operator and how is it used?

**Answer:** Expands iterable elements into individual elements.

**Example:**

```js
const arr = [1, 2];
const newArr = [...arr, 3]; // [1, 2, 3]
```

#### What is the difference between == and === in JavaScript?

**Answer:**

* `==`: Compares values with type coercion.
* `===`: Compares values without type coercion.

**Example:**

```js
0 == '0';  // true
0 === '0'; // false
```

#### What language constructs do you use for iterating over object properties and array items in JavaScript?

**Answer:**

* Arrays: `for`, `forEach`, `map`, `for...of`
* Objects: `for...in`, `Object.keys()`, `Object.entries()`

**Example:**

```js
const arr = [1, 2];
arr.forEach(console.log);

const obj = { a: 1, b: 2 };
for (let key in obj) {
  console.log(key, obj[key]);
}
```

#### Explain the difference between shallow copy and deep copy

**Answer:**

* Shallow copy copies only the first layer.
* Deep copy duplicates all nested layers.

**Example:**

```js
const original = { nested: { value: 1 } };
const shallow = { ...original };
const deep = JSON.parse(JSON.stringify(original));
```

### Intermediate

#### What is Object.freeze() for?

**Answer:** Makes an object immutable — properties can't be changed or added.

**Example:**

```js
const obj = Object.freeze({ a: 1 });
obj.a = 2; // Fails silently or throws in strict mode
```

#### What is Object.seal() for?

**Answer:** Prevents adding or removing properties but allows modifying existing ones.

**Example:**

```js
const obj = Object.seal({ a: 1 });
obj.a = 2;       // Allowed
obj.b = 3;       // Not allowed
```

#### What is Object.preventExtensions() for?

**Answer:** Prevents new properties from being added to an object.

**Example:**

```js
const obj = {};
Object.preventExtensions(obj);
obj.a = 1; // Ignored
```

### Promises and Async

#### What is the use of Promise.all()?

**Answer:** Runs multiple promises in parallel and resolves when all succeed.

**Example:**

```js
Promise.all([Promise.resolve(1), Promise.resolve(2)])
  .then(console.log); // [1, 2]
```

#### How is Promise.all() different from Promise.allSettled()?

**Answer:**

* `Promise.all()`: Rejects if any promise rejects.
* `Promise.allSettled()`: Waits for all to settle and returns results.

**Example:**

```js
Promise.allSettled([
  Promise.resolve(1),
  Promise.reject('err')
]).then(console.log);
```

### Event Loop and Delegation

#### What is the difference between setTimeout(), setImmediate(), and process.nextTick()?

**Answer:** Execution order priority:

1. `process.nextTick()`
2. `setTimeout()` / `setImmediate()` (varies)

**Example:**

```js
setTimeout(() => console.log('timeout'));
setImmediate(() => console.log('immediate'));
process.nextTick(() => console.log('nextTick'));
```

#### Explain event delegation in JavaScript

**Answer:** Attach a single event listener to a parent that handles events from children via `event.target`.

**Example:**

```js
document.getElementById('list').addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    console.log('List item clicked');
  }
});
```

#### What is the difference between event.preventDefault() and event.stopPropagation()?

**Answer:**

* `preventDefault()`: Prevents default browser behavior.
* `stopPropagation()`: Stops event from bubbling up.

**Example:**

```js
form.addEventListener('submit', e => {
  e.preventDefault();
});

div.addEventListener('click', e => {
  e.stopPropagation();
});
```

#### Describe the difference between <script>, <script async> and <script defer>

**Answer:**

* `<script>`: Blocks HTML parsing until script loads and executes.
* `async`: Loads and executes as soon as ready (non-blocking).
* `defer`: Executes after HTML parsing (non-blocking).

**Example:**

```html
<script src="main.js"></script>
<script src="async.js" async></script>
<script src="defer.js" defer></script>
```

#### How do you use window\.history API?

**Answer:** Allows manipulating browser session history.

**Example:**

```js
history.pushState({ page: 1 }, 'title 1', '/page1');
window.onpopstate = (e) => console.log(e.state);
```

### Functional Programming

#### What are the benefits of using currying and partial application?

**Answer:**

* Makes code reusable and modular.
* Helps with function composition and code clarity.

**Example:**

```js
function add(a) {
  return function(b) {
    return a + b;
  };
}
const add5 = add(5);
console.log(add5(3)); // 8
```

### Advanced

#### How does JavaScript garbage collection work?

**Answer:** Uses algorithms like mark-and-sweep to free memory occupied by unreachable objects.

**Example:**

```js
let obj = { a: 1 };
obj = null; // eligible for garbage collection
```
Here are 5 advanced JavaScript interview questions with clear code examples and concise answers, formatted to match your document style:

---

### Advanced (continued)

#### What are closures in JavaScript and how are they used?

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

A closure allows a function to access variables from an outer scope even after that scope has closed.

---

#### What is the Temporal Dead Zone (TDZ) in JavaScript?

```js
console.log(a); // ReferenceError
let a = 5;
```

The TDZ is the time between entering a scope and the variable’s declaration being processed, during which the variable cannot be accessed.

---

#### How does JavaScript handle tail call optimization?

```js
'use strict';
function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, acc * n);
}
```

In strict mode, compliant engines may optimize tail-recursive functions by reusing the current stack frame.

---

#### What are proxies in JavaScript and how can they intercept operations?

```js
const target = {};
const handler = {
  get: (obj, prop) => prop in obj ? obj[prop] : 'Not found'
};
const proxy = new Proxy(target, handler);
proxy.a = 10;
console.log(proxy.a); // 10
console.log(proxy.b); // Not found
```

Proxies allow interception and custom behavior for fundamental operations (get, set, etc.).

---

#### How do generators work in JavaScript?

```js
function* gen() {
  yield 1;
  yield 2;
}
const g = gen();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 2, done: false }
```

Generators are functions that can pause and resume their execution, returning an iterator.

---
Here's a Markdown-formatted explanation of the difference between `.call()`, `.apply()`, and `.bind()` in JavaScript, including example code:

---

````md
## Difference Between call(), apply(), and bind() in JavaScript

In JavaScript, `call()`, `apply()`, and `bind()` are used to invoke functions with a specific `this` context. The main difference lies in how arguments are passed and when the function is executed.

---

### 1. `call()`

- Invokes the function immediately.
- Passes arguments one by one.

**Syntax:**
```js
functionName.call(thisArg, arg1, arg2, ...);
````

**Example:**

```js
function greet(greeting, name) {
  console.log(`${greeting}, ${name}`);
}

greet.call(null, 'Hello', 'Alice'); // Output: Hello, Alice
```

---

### 2. `apply()`

* Invokes the function immediately.
* Passes arguments as an array.

**Syntax:**

```js
functionName.apply(thisArg, [arg1, arg2, ...]);
```

**Example:**

```js
function greet(greeting, name) {
  console.log(`${greeting}, ${name}`);
}

greet.apply(null, ['Hi', 'Bob']); // Output: Hi, Bob
```

---

### 3. `bind()`

* Returns a new function with a fixed `this` value and optionally preset arguments.
* Does **not** invoke the function immediately.

**Syntax:**

```js
const newFunc = functionName.bind(thisArg, arg1, arg2, ...);
```

**Example:**

```js
function greet(greeting, name) {
  console.log(`${greeting}, ${name}`);
}

const greetHello = greet.bind(null, 'Hello');
greetHello('Charlie'); // Output: Hello, Charlie
```

---

### Summary Table

| Method | Invokes Function Immediately | Arguments Format          | Returns a Function |
| ------ | ---------------------------- | ------------------------- | ------------------ |
| call   | Yes                          | Comma-separated values    | No                 |
| apply  | Yes                          | Array of arguments        | No                 |
| bind   | No                           | Comma-separated (partial) | Yes                |

```
Here's the explanation and code examples for both **Currying** and **Pure Functions**, formatted in Markdown style (`.md`) as per your request:

---

````md
## What is a Currying Function?

**Currying** is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

### Example:
```js
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); // Output: 10
````

In this example, `multiply(2)` returns a new function that multiplies its argument by 2. This is useful for creating reusable, specialized functions.

---

## What is a Pure Function?

A **pure function** is a function that:

* Given the same input, always returns the same output.
* Does not have any side effects (e.g., modifying external variables, logging, file I/O, etc.).

### Example:

```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Always returns 5
```

### Impure Function (for contrast):

```js
let counter = 0;

function increment() {
  counter++;
  return counter;
}
```

In this case, `increment()` is **impure** because it modifies the external `counter` variable and its return value changes with each call.

Pure functions are easier to test, debug, and reason about in functional programming.

```
Here's a clear and concise explanation of **event bubbling** and **event capturing** in Markdown format, with code examples included:

---

```md
## What is Event Bubbling?

**Event bubbling** is a type of event propagation in the DOM where the event starts from the **target element** and bubbles up to its **ancestors** (parent → grandparent → ...).

### Example:
```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

```js
document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
});

document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked');
});
```

### Output when clicking the button:
```
Child clicked
Parent clicked
```

Here, the event is triggered on the child first, then bubbles up to the parent.

---

## What is Event Capturing?

**Event capturing** (also known as the **capture phase**) is the opposite of bubbling. The event is captured at the root and propagated **down** to the target element.

To handle events during the capturing phase, set the third parameter of `addEventListener` to `true`.

### Example:
```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

```js
document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent capturing');
}, true);

document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked');
});
```

### Output when clicking the button:
```
Parent capturing
Child clicked
```

The parent’s capturing handler runs **before** the child’s click handler.

---

### Summary

| Phase          | Order of Execution              | addEventListener Option |
|----------------|----------------------------------|--------------------------|
| Capturing      | Ancestors → Target              | `true` as 3rd parameter  |
| Bubbling       | Target → Ancestors              | `false` (default)        |

```
Here’s the Markdown-formatted explanation for both `clearTimeout` and `clearInterval` with examples:

---

```md
## What is the Purpose of `clearTimeout` Method?

The `clearTimeout` method is used to **cancel** a timer that was previously established by `setTimeout`.

### Syntax:
```js
clearTimeout(timeoutID);
```

### Example:
```js
const timeoutID = setTimeout(() => {
  console.log("This won't run");
}, 3000);

clearTimeout(timeoutID); // Cancels the timeout
```

This prevents the callback from running after 3 seconds.

---

## What is the Purpose of `clearInterval` Method?

The `clearInterval` method is used to **stop** a repeated action that was started using `setInterval`.

### Syntax:
```js
clearInterval(intervalID);
```

### Example:
```js
const intervalID = setInterval(() => {
  console.log("This will keep running every second...");
}, 1000);

setTimeout(() => {
  clearInterval(intervalID); // Stops the interval after 5 seconds
}, 5000);
```

This will print the message every second, but stop after 5 seconds.

```
Here’s a concise Markdown-formatted explanation on **how to define JSON arrays**, with examples:

---

```md
## How Do You Define JSON Arrays?

A **JSON array** is a list of values enclosed in square brackets `[]`. Each value can be a string, number, object, array, `true`, `false`, or `null`. Items are separated by commas.

### Example 1: Array of Strings
```json
["apple", "banana", "cherry"]
```

### Example 2: Array of Numbers
```json
[1, 2, 3, 4, 5]
```

### Example 3: Array of Objects
```json
[
  { "name": "Alice", "age": 25 },
  { "name": "Bob", "age": 30 }
]
```

### Example 4: Mixed Types (valid in JSON)
```json
["text", 123, true, null, { "key": "value" }]
```

### Notes:
- JSON arrays are **zero-indexed**.
- The entire array must be a **valid JSON** structure.
- Often used in APIs to return lists of data.

### JavaScript Usage:
```js
const jsonString = '[{"name": "Alice"}, {"name": "Bob"}]';
const parsedArray = JSON.parse(jsonString);
console.log(parsedArray[0].name); // "Alice"
```
```
