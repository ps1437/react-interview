# Ways to Create Objects in JavaScript

JavaScript provides several ways to create objects. Below are the most common and widely used methods:

---

## 1. Object Literal

```javascript
const person = {
  name: "John",
  age: 30,
  greet() {
    console.log("Hello");
  }
};
````

---

## 2. Using `new Object()`

```javascript
const person = new Object();
person.name = "John";
person.age = 30;
```

---

## 3. Constructor Function

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Alice", 25);
```

---

## 4. ES6 Class Syntax

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("Bob", 28);
```

---

## 5. `Object.create()`

```javascript
const proto = {
  greet() {
    console.log("Hello");
  }
};

const person = Object.create(proto);
person.name = "Charlie";
```

---

## 6. Factory Function

```javascript
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log("Hello");
    }
  };
}

const person = createPerson("David", 35);
```

---

## 7. Singleton Object Using IIFE

```javascript
const singleton = (function () {
  let instance;

  function createInstance() {
    return { name: "Singleton" };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const obj1 = singleton.getInstance();
```

---

## 8. JSON.parse() (Creating object from JSON string)

```javascript
const jsonString = '{"name":"Eve","age":29}';
const person = JSON.parse(jsonString);
```

---

## 9. Object.assign()

```javascript
const source = { name: "Frank" };
const person = Object.assign({}, source);
```

---

## 10. Using Spread Operator

```javascript
const source = { name: "Grace" };
const person = { ...source };
```

---

## Summary

| Method               | Description                              |
| -------------------- | ---------------------------------------- |
| Object Literal       | Most concise and commonly used           |
| `new Object()`       | Constructor-based, less preferred        |
| Constructor Function | Traditional OOP-style object creation    |
| ES6 Class            | Modern and clean OOP-style syntax        |
| `Object.create()`    | Creates object with specified prototype  |
| Factory Function     | Returns object without `new`             |
| Singleton (IIFE)     | Ensures single instance of object        |
| `JSON.parse()`       | Converts JSON string to object           |
| `Object.assign()`    | Clones or merges objects                 |
| Spread Operator      | Clones object properties into new object |

