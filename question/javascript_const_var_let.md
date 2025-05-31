Here's a `.md` (Markdown) file format covering **JavaScript `const`, `let`, and `var` Interview Questions** with code examples, explanations, and output analysis:

````markdown
# JavaScript `var`, `let`, and `const` Interview Questions

This document explores differences and tricky scenarios with `var`, `let`, and `const` in JavaScript through code-based interview questions.

---

## 1. What is the difference between `var`, `let`, and `const`?

| Feature             | `var`            | `let`           | `const`          |
|---------------------|------------------|------------------|------------------|
| Scope               | Function-scoped   | Block-scoped     | Block-scoped     |
| Re-declaration      | Allowed           | Not allowed      | Not allowed      |
| Re-assignment       | Allowed           | Allowed          | **Not Allowed**  |
| Hoisting            | Hoisted (undefined) | Hoisted (TDZ) | Hoisted (TDZ)    |

---

## 2. Variable Hoisting Behavior

```javascript
console.log(a);  // undefined
var a = 5;

console.log(b);  // ReferenceError
let b = 10;

console.log(c);  // ReferenceError
const c = 15;
````

---

## 3. Block Scope Demonstration

```javascript
{
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); // 1
console.log(b); // ReferenceError
console.log(c); // ReferenceError
```

---

## 4. Re-declaration and Re-assignment

```javascript
var x = 10;
var x = 20; // Allowed

let y = 30;
// let y = 40; // Error: Identifier 'y' has already been declared

const z = 50;
// z = 60;     // Error: Assignment to constant variable
```

---

## 5. `const` with Objects and Arrays

```javascript
const person = { name: "Alice" };
person.name = "Bob"; // ✅ Allowed: object properties can change

const arr = [1, 2];
arr.push(3); // ✅ Allowed: array elements can change

// person = {}; // ❌ Error
// arr = [];    // ❌ Error
```

---

## 6. Temporal Dead Zone (TDZ)

```javascript
function test() {
  // console.log(a); // ReferenceError: TDZ
  let a = 10;
}
test();
```

---

## 7. Loops with `var` vs `let`

```javascript
// Using var
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3

// Using let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2
```

---

## 8. Global Scope Pollution with `var`

```javascript
var x = "global";
window.x === x; // true

let y = "block";
// window.y === y; // false (in browsers)
```

---

## 9. `const` Does Not Mean Immutable

```javascript
const obj = { val: 1 };
obj.val = 2; // ✅ Allowed

Object.freeze(obj);
obj.val = 3; // ❌ Ignored in non-strict mode, error in strict mode
```

---

## 10. Re-declaration Inside Blocks

```javascript
var a = 1;
{
  var a = 2; // Re-declared globally
  console.log(a); // 2
}
console.log(a); // 2

let b = 1;
{
  let b = 2; // Different block-scoped variable
  console.log(b); // 2
}
console.log(b); // 1
```

---

## Summary

| Feature        | `var`           | `let`     | `const`               |
| -------------- | --------------- | --------- | --------------------- |
| Scope          | Function        | Block     | Block                 |
| Hoisting       | Yes (undefined) | Yes (TDZ) | Yes (TDZ)             |
| Re-declaration | Yes             | No        | No                    |
| Re-assignment  | Yes             | Yes       | No                    |
| Immutable      | No              | No        | No (but ref constant) |

---

## Tips for Interviews

* Prefer `let` for mutable values and `const` for constants.
* Use `let` and `const` to avoid hoisting pitfalls.
* Understand TDZ (Temporal Dead Zone) and block scope for `let`/`const`.
* `const` only means the reference cannot be changed, not the contents.

