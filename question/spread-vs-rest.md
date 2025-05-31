
# Spread vs Rest Operator in JavaScript

JavaScript introduced the **spread** and **rest** operators in ES6 (ECMAScript 2015). Both use the same syntax `...` but serve different purposes depending on the context.

---

## 1. Spread Operator (`...`)

The **spread operator** is used to **expand** (or "spread out") elements of an iterable (like an array, string, or object) into individual elements.

### Common Use Cases

- Expanding an array into individual elements
- Copying arrays or objects
- Merging arrays or objects
- Passing elements as function arguments

### Examples

#### Spread with Arrays

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; 
console.log(arr2); // Output: [1, 2, 3, 4, 5]
````

#### Spread with Objects

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // Output: { a: 1, b: 2, c: 3 }
```

#### Spread in Function Calls

```javascript
const numbers = [10, 20, 30];
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(...numbers)); // Output: 60
```

---

## 2. Rest Operator (`...`)

The **rest operator** is used to **collect** multiple elements into a single array or object. It is mainly used in function parameters or destructuring assignments to group the remaining elements.

### Common Use Cases

* Gathering function arguments into an array
* Collecting remaining elements during destructuring

### Examples

#### Rest in Function Parameters

```javascript
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
```

#### Rest in Array Destructuring

```javascript
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first);  // Output: 10
console.log(second); // Output: 20
console.log(rest);   // Output: [30, 40, 50]
```

#### Rest in Object Destructuring

```javascript
const { a, b, ...others } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a);      // Output: 1
console.log(b);      // Output: 2
console.log(others); // Output: { c: 3, d: 4 }
```

---

## Summary

| Feature        | Spread Operator (`...`)                | Rest Operator (`...`)                     |
| -------------- | -------------------------------------- | ----------------------------------------- |
| Purpose        | Expands elements of an iterable        | Collects multiple elements into an array  |
| Usage Context  | In function calls, arrays, and objects | In function parameters and destructuring  |
| Result         | Expands to individual elements         | Packs elements into a single array/object |
| Example Syntax | `myFunction(...array)`                 | `function(...args) { }`                   |

---

## References

* [MDN Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
* [MDN Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

---

*Happy Coding!*

```
