1. What's the output?
```jsx
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia'; //hoisting = undefined
  let age = 21;
}

sayHi();
```
Answer : undefined and ReferenceError
--

2. What's the output?

```jsx 
for (var i = 0; i < 3; i++) { // var globla and hosited 
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) { // local scope
  setTimeout(() => console.log(i), 1);
}

Answer :  3 3 3 and 0 1 2
```

3. What's the output?
```jsx
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius, // Due to Arrao function
};

console.log(shape.diameter()); //20
console.log(shape.perimeter()); //Nan

```
What's the output?
```jsx
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting); //Hello
```

 What are the three phases of event propagation?

 ```jsx
 Capturing > Target > Bubbling
 ```

What's the output?
```jsx

function sum(a, b) {
  return a + b;
}

sum(1, '2'); //12
```

What's the output?
```jsx
function getAge(...args) {
  console.log(typeof args);
}

getAge(21); // Object
```
What will be the output

```jsx
x = 10;
console.log(x); //10 = The declaration of the variable x is hoisted to the top of its scope.
var x;
```

 What will be the output
```jsx
function hello() {
  console.log("1");
    setTimeout(() => {
        console.log("2");
    })
  console.log("3");
}
hello(); //1 3 2
```  

What will be the output
```jsx

let f = "8";
let a = 1;
console.log((+f)+a+1);  //10 The expression (+f) is a shorthand way to convert the string value of f to a number. Therefore, (+f) evaluates to 8.
```

 What will be the output
```jsx
let a = 10;
if(true){
   let a = 20;
   console.log(a, "inside"); //20
}
console.log(a, "outside"); //10
```

```jsx
console.log(5 < 6 < 7); //true -> LEft to right execution
console.log(7 > 6 > 5); //false
```

Here are several **JavaScript console-based output guess questions** in `.md` format that you can use for practice or interviews:

---

````md
## JavaScript Console Log Output Guess Questions

### 1. Variable Hoisting
```js
console.log(a);
var a = 5;
````

**Output:** `undefined`
**Explanation:** Due to hoisting, the declaration `var a` is hoisted, but not the initialization.

---

### 2. Let and Temporal Dead Zone

```js
console.log(b);
let b = 10;
```

**Output:** `ReferenceError: Cannot access 'b' before initialization`
**Explanation:** `let` and `const` are hoisted but not initialized.

---

### 3. Object Reference

```js
const a = { x: 1 };
const b = a;
b.x = 2;
console.log(a.x);
```

**Output:** `2`
**Explanation:** `a` and `b` reference the same object.

---

### 4. typeof null

```js
console.log(typeof null);
```

**Output:** `'object'`
**Explanation:** This is a long-standing JavaScript bug.

---

### 5. setTimeout with Loop (var)

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

**Output:** `3 3 3`
**Explanation:** `var` is function scoped; all callbacks share the same `i`.

---

### 6. setTimeout with Loop (let)

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

**Output:** `0 1 2`
**Explanation:** `let` is block scoped; each callback gets a new `i`.

---

### 7. Function Scope

```js
function foo() {
  var x = 10;
}
console.log(x);
```

**Output:** `ReferenceError: x is not defined`
**Explanation:** `x` is scoped to the function.

---

### 8. Implicit Global

```js
function test() {
  y = 20;
}
test();
console.log(y);
```

**Output:** `20`
**Explanation:** Assigning to undeclared variable makes it global (non-strict mode).

---

### 9. NaN === NaN

```js
console.log(NaN === NaN);
```

**Output:** `false`
**Explanation:** `NaN` is not equal to itself in JavaScript.

---

### 10. Boolean Conversion

```js
console.log(!!"false");
```

**Output:** `true`
**Explanation:** Non-empty strings are truthy.

```

Ref : https://github.com/TUSHAR-30/Javascript-Output-Based-Question

