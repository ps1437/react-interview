# Immutable vs Mutable in JavaScript

## What is Mutable?

- Mutable objects can be changed after creation.
- Their properties or contents can be modified.
- Example: JavaScript objects and arrays.

### Example of Mutable Object

```javascript
const obj = { name: "John" };
obj.name = "Jane";  // Mutation allowed
console.log(obj);   // Output: { name: "Jane" }
```

---

## What is Immutable?

- Immutable objects cannot be changed once created.
- Any change creates a new object instead of modifying the original.
- Example: Strings in JavaScript are immutable.

### Example of Immutable String

```javascript
let str = "Hello";
str[0] = "J";       // Does NOT change the string
console.log(str);   // Output: "Hello"
```

---

## How to Create Immutable Objects in JavaScript?

Use `Object.freeze()` to prevent object mutation.

```javascript
const obj = Object.freeze({ name: "John" });
obj.name = "Jane";   // No effect
console.log(obj);    // Output: { name: "John" }
```

## 1. Spread Operator (`...`)

* Expands elements (arrays, objects).
* Great for shallow copying and merging.

```javascript
// Copy object
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

// Copy array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4];
```

## 2. Rest Operator (`...`)

* Collects multiple elements into an array or object.
* Used in function arguments and destructuring.

```javascript
// Function parameters
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

// Object destructuring
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
console.log(rest); // { c: 3, d: 4 }
```

## 3. `Object.assign()`

* Copies properties from source objects to a target object.
* Used for shallow copying or merging.

```javascript
const target = { a: 1 };
const source = { b: 2 };
const merged = Object.assign({}, target, source);
```

## 4. `Object.freeze()`

* Makes an object immutable (shallow).
* Prevents adding, deleting, or changing properties.

```javascript
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2;  // Won't work
```

## 5. `Array.prototype.concat()`

* Combines arrays without mutation.

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
```

## 6. Array Methods That Return New Arrays (Non-Mutating)

* `.map()`, `.filter()`, `.slice()`, `.reduce()`, `.flat()`
* These do not mutate original arrays.

```javascript
const arr = [1, 2, 3];
const doubled = arr.map(x => x * 2);
```

## 7. Deep Cloning Libraries / Techniques

* For deep cloning (objects inside objects), use libraries like `lodash` or write custom deep clone functions.

```javascript
// Using lodash
const _ = require('lodash');
const deepClone = _.cloneDeep(originalObj);
```

---

# Summary Table

| Method / Operator     | Purpose                       | Mutable or Immutable?              | Shallow or Deep Copy |
| --------------------- | ----------------------------- | ---------------------------------- | -------------------- |
| Spread (`...`)        | Expand or copy arrays/objects | Immutable (creates new)            | Shallow              |
| Rest (`...`)          | Collect remaining elements    | N/A (used in params/destructuring) | N/A                  |
| `Object.assign()`     | Copy/merge objects            | Immutable (creates new)            | Shallow              |
| `Object.freeze()`     | Prevent mutation              | Immutable (locks object)           | Shallow              |
| `.concat()`           | Combine arrays                | Immutable (creates new)            | N/A                  |
| `.map()`, `.filter()` | Create new arrays             | Immutable (creates new)            | N/A                  |
| Deep clone libraries  | Deep copy objects             | Immutable (creates new)            | Deep                 |

---



## Summary

| Feature        | Mutable                        | Immutable                           |
|----------------|-------------------------------|-----------------------------------|
| Can change?    | Yes                           | No                                |
| Examples      | Objects, Arrays                | Strings, frozen objects            |
| Use case       | When you want to modify state | When you want to prevent changes   |

--