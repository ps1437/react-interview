# TypeScript Interview Questions for Developers with 3-6 Years of Experience

This guide covers TypeScript interview questions for developers with 3-6 years of experience, including Object-Oriented Programming (OOP) concepts like classes, inheritance, abstraction, encapsulation, and polymorphism. The questions range from intermediate to advanced, focusing on practical knowledge, problem-solving, and real-world applications. Questions are categorized for better organization.

---

## Table of Contents
1. [Basic and Intermediate Concepts](#basic-and-intermediate-concepts)
2. [Object-Oriented Programming in TypeScript](#object-oriented-programming-in-typescript)
3. [Advanced TypeScript Features](#advanced-typescript-features)
4. [TypeScript with Frameworks](#typescript-with-frameworks)
5. [Tooling and Best Practices](#tooling-and-best-practices)
6. [Practical Coding Questions](#practical-coding-questions)
7. [Behavioral/Scenario-Based Questions](#behavioral-scenario-based-questions)

---

## Basic and Intermediate Concepts

1. **What is TypeScript, and how does it differ from JavaScript?**
   - Expected Answer: TypeScript is a superset of JavaScript with static typing, interfaces, and OOP features like classes. It compiles to JavaScript, enabling type safety and better tooling.

2. **Explain the difference between `interface` and `type` in TypeScript.**
   - Expected Answer: `interface` is extendable with `extends` and suited for OOP, while `type` supports unions/intersections and is more flexible for complex types.

3. **What are the benefits of using TypeScript in a large-scale project?**
   - Expected Answer: Type safety, maintainability, IDE support, early error detection, and explicit contracts for OOP designs.

4. **How does TypeScript handle `null` and `undefined`? Explain strict null checks.**
   - Expected Answer: `null` and `undefined` are distinct types. With `strictNullChecks`, variables cannot be `null` or `undefined` unless explicitly allowed.

5. **What is the `never` type, and when would you use it?**
   - Expected Answer: `never` represents values that never occur, e.g., in functions that throw errors or in exhaustive checks for class hierarchies.

6. **Explain the `any` type and its pitfalls.**
   - Expected Answer: `any` disables type checking, undermining type safety and OOP principles like encapsulation, leading to runtime errors.

7. **What are union and intersection types? Provide examples.**
   - Expected Answer: Union (`|`) allows multiple types; intersection (`&`) combines types. Example:
     ```typescript
     type Union = string | number;
     type Intersection = { a: string } & { b: number };
     ```

8. **How do you define optional properties in an interface?**
   - Expected Answer:
     ```typescript
     interface User {
       name: string;
       age?: number;
     }
     ```

9. **What is type inference in TypeScript? Provide an example.**
   - Expected Answer: TypeScript infers types based on context. Example:
     ```typescript
     let count = 5; // Inferred as number
     class User { name = "John"; } // name inferred as string
     ```

10. **Explain the difference between `unknown` and `any`.**
    - Expected Answer: `unknown` requires type narrowing, safer for OOP; `any` allows unchecked operations, bypassing type safety.

---

## Object-Oriented Programming in TypeScript

11. **What are the core principles of OOP supported by TypeScript?**
    - Expected Answer: Encapsulation, inheritance, abstraction, and polymorphism. TypeScript supports these via classes, interfaces, access modifiers, and abstract classes.

12. **Explain how classes are defined in TypeScript, including access modifiers.**
    - Expected Answer: Classes use `public`, `private`, and `protected` modifiers. Example:
      ```typescript
      class Person {
        private name: string;
        protected age: number;
        public constructor(name: string, age: number) {
          this.name = name;
          this.age = age;
        }
        public getName(): string {
          return this.name;
        }
      }
      ```

13. **What is inheritance in TypeScript? Provide an example.**
    - Expected Answer: Inheritance allows a class to extend another using `extends`. Example:
      ```typescript
      class Animal {
        protected move(): void {
          console.log("Moving");
        }
      }
      class Dog extends Animal {
        public bark(): void {
          this.move();
          console.log("Barking");
        }
      }
      const dog = new Dog();
      dog.bark(); // Moving, Barking
      ```

14. **How does TypeScript support abstraction?**
    - Expected Answer: Use `abstract` classes and interfaces. Abstract classes can have abstract methods and implementation. Example:
      ```typescript
      abstract class Shape {
        abstract getArea(): number;
        public describe(): string {
          return `Area: ${this.getArea()}`;
        }
      }
      class Circle extends Shape {
        private radius: number;
        constructor(radius: number) {
          super();
          this.radius = radius;
        }
        getArea(): number {
          return Math.PI * this.radius ** 2;
        }
      }
      ```

15. **Explain encapsulation in TypeScript and its benefits.**
    - Expected Answer: Encapsulation restricts access to class members using `private` or `protected`. Benefits include data protection and maintainability. Example:
      ```typescript
      class BankAccount {
        private balance: number = 0;
        public deposit(amount: number): void {
          if (amount > 0) this.balance += amount;
        }
        public getBalance(): number {
          return this.balance;
        }
      }
      ```

16. **What is polymorphism in TypeScript? Provide an example.**
    - Expected Answer: Polymorphism allows different classes to be treated as instances of a common superclass. Achieved via inheritance or interfaces. Example:
      ```typescript
      interface Printable {
        print(): string;
      }
      class Document implements Printable {
        print(): string {
          return "Printing document";
        }
      }
      class Image implements Printable {
        print(): string {
          return "Printing image";
        }
      }
      const items: Printable[] = [new Document(), new Image()];
      items.forEach(item => console.log(item.print()));
      ```

17. **What is the difference between an interface and an abstract class?**
    - Expected Answer: Interfaces define contracts without implementation; abstract classes can include implementation and abstract methods. Interfaces support multiple inheritance, while classes don’t.

18. **How do you implement method overloading in TypeScript?**
    - Expected Answer: Use function signatures to define multiple call patterns. Example:
      ```typescript
      class Calculator {
        add(a: number, b: number): number;
        add(a: string, b: string): string;
        add(a: any, b: any): any {
          return a + b;
        }
      }
      const calc = new Calculator();
      console.log(calc.add(1, 2)); // 3
      console.log(calc.add("a", "b")); // "ab"
      ```

19. **How do you use `readonly` properties in classes?**
    - Expected Answer: `readonly` prevents reassignment after initialization. Example:
      ```typescript
      class User {
        readonly id: number;
        constructor(id: number) {
          this.id = id;
        }
      }
      const user = new User(1);
      // user.id = 2; // Error
      ```

20. **Explain how to use static members in TypeScript classes.**
    - Expected Answer: `static` members belong to the class, not instances. Example:
      ```typescript
      class Counter {
        static count: number = 0;
        constructor() {
          Counter.count++;
        }
      }
      new Counter();
      new Counter();
      console.log(Counter.count); // 2
      ```

---

## Advanced TypeScript Features

21. **What are generics in TypeScript? Provide an OOP example.**
    - Expected Answer: Generics enable reusable, type-safe components. Example:
      ```typescript
      class Repository<T> {
        private items: T[] = [];
        add(item: T): void {
          this.items.push(item);
        }
        getAll(): T[] {
          return this.items;
        }
      }
      const userRepo = new Repository<{ name: string }>();
      userRepo.add({ name: "John" });
      ```

22. **How do you use conditional types in TypeScript?**
    - Expected Answer: Conditional types select types based on conditions. Example:
      ```typescript
      type IsString<T> = T extends string ? true : false;
      type Test = IsString<string>; // true
      ```

23. **Explain mapped types and provide an example.**
    - Expected Answer: Mapped types transform properties. Example:
      ```typescript
      type Readonly<T> = {
        readonly [K in keyof T]: T[K];
      };
      interface User {
        name: string;
      }
      type ReadonlyUser = Readonly<User>; // { readonly name: string }
      ```

24. **What are utility types in TypeScript? Name a few.**
    - Expected Answer: Built-in types like `Partial<T>`, `Required<T>`, `Pick<T, K>`, `Omit<T, K>`. Example:
      ```typescript
      type User = { name: string; age?: number };
      type RequiredUser = Required<User>; // { name: string; age: number }
      ```

25. **How do you use `keyof` and lookup types with classes?**
    - Expected Answer: `keyof` gets property names; lookup types access property types. Example:
      ```typescript
      class User {
        name: string = "";
        age: number = 0;
      }
      type UserKeys = keyof User; // "name" | "age"
      type NameType = User["name"]; // string
      ```

26. **What is a discriminated union, and how does it relate to OOP?**
    - Expected Answer: Discriminated unions use a common property to narrow types, often used with class hierarchies. Example:
      ```typescript
      interface Circle {
        kind: "circle";
        radius: number;
      }
      interface Square {
        kind: "square";
        side: number;
      }
      type Shape = Circle | Square;
      function getArea(shape: Shape) {
        switch (shape.kind) {
          case "circle": return Math.PI * shape.radius ** 2;
          case "square": return shape.side ** 2;
        }
      }
      ```

27. **How do you handle async functions in TypeScript classes?**
    - Expected Answer: Use `Promise<T>` for async methods. Example:
      ```typescript
      class DataFetcher {
        async fetchData(): Promise<string> {
          return "data";
        }
      }
      ```

28. **What are declaration merging and module augmentation?**
    - Expected Answer: Declaration merging combines declarations (e.g., interfaces for classes). Module augmentation extends modules. Example:
      ```typescript
      interface User {
        name: string;
      }
      interface User {
        age: number;
      }
      ```

29. **Explain the `infer` keyword in TypeScript.**
    - Expected Answer: `infer` extracts types in conditional types. Example:
      ```typescript
      type ReturnType<T> = T extends (...args: any) => infer R ? R : any;
      type Func = () => string;
      type Result = ReturnType<Func>; // string
      ```

30. **How do you type dynamic object keys in TypeScript?**
    - Expected Answer: Use index signatures. Example:
      ```typescript
      class DynamicStore {
        private data: { [key: string]: number } = {};
        set(key: string, value: number): void {
          this.data[key] = value;
        }
      }
      ```

---

## TypeScript with Frameworks

31. **How do you integrate TypeScript with React, considering OOP?**
    - Expected Answer: Use `.tsx`, define props with interfaces, and use class components if needed. Example:
      ```typescript
      interface Props {
        name: string;
      }
      class MyComponent extends React.Component<Props> {
        render() {
          return <div>{this.props.name}</div>;
        }
      }
      ```

32. **What are common TypeScript challenges in React applications?**
    - Expected Answer: Typing complex components, event handlers, and third-party libraries with missing types.

33. **How do you use TypeScript with Node.js/Express in an OOP style?**
    - Expected Answer: Use `@types/express`, define controllers as classes. Example:
      ```typescript
      class UserController {
        public getUser(req: Request, res: Response): void {
          res.send("User data");
        }
      }
      const app = express();
      const userController = new UserController();
      app.get("/user", userController.getUser.bind(userController));
      ```

34. **How do you type Redux actions and reducers in TypeScript?**
    - Expected Answer: Use interfaces for actions and discriminated unions. Example:
      ```typescript
      interface Increment {
        type: "INCREMENT";
        payload: number;
      }
      type Action = Increment;
      const reducer = (state: number, action: Action): number => {
        switch (action.type) {
          case "INCREMENT": return state + action.payload;
          default: return state;
        }
      };
      ```

35. **What considerations are needed when using TypeScript with Angular?**
    - Expected Answer: Leverage TypeScript’s OOP features (classes, decorators) for services and components. Use strict typing for dependency injection.

---

## Tooling and Best Practices

36. **How do you configure a `tsconfig.json` file for OOP projects?**
    - Expected Answer: Use `strict`, `target: "ES2020"`, `module: "commonjs"`, and `outDir`. Example:
      ```json
      {
        "compilerOptions": {
          "target": "ES2020",
          "module": "commonjs",
          "strict": true,
          "outDir": "./dist"
        }
      }
      ```

37. **What are the benefits of enabling `strict` mode in TypeScript?**
    - Expected Answer: Enforces type safety, ensuring robust OOP designs with fewer runtime errors.

38. **How do you handle third-party libraries without TypeScript definitions?**
    - Expected Answer: Use `@types/<package>` or create `.d.ts` files. Example:
      ```typescript
      declare module "some-library";
      ```

39. **What is the role of `.d.ts` files in OOP projects?**
    - Expected Answer: Define types for JavaScript code or external libraries, ensuring type safety for class-based code.

40. **How do you debug TypeScript code in class-based projects?**
    - Expected Answer: Use source maps, IDE debuggers, and `console.log`. Ensure `"sourceMap": true` in `tsconfig.json`.

---

## Practical Coding Questions

41. **Write a TypeScript class hierarchy for a vehicle system.**
    - Expected Answer:
      ```typescript
      abstract class Vehicle {
        protected speed: number = 0;
        abstract accelerate(): void;
        getSpeed(): number {
          return this.speed;
        }
      }
      class Car extends Vehicle {
        accelerate(): void {
          this.speed += 10;
        }
      }
      const car = new Car();
      car.accelerate();
      console.log(car.getSpeed()); // 10
      ```

42. **Create a generic class for a type-safe stack.**
    - Expected Answer:
      ```typescript
      class Stack<T> {
        private items: T[] = [];
        push(item: T): void {
          this.items.push(item);
        }
        pop(): T | undefined {
          return this.items.pop();
        }
      }
      const numberStack = new Stack<number>();
      numberStack.push(1);
      console.log(numberStack.pop()); // 1
      ```

43. **Implement a type-safe singleton pattern in TypeScript.**
    - Expected Answer:
      ```typescript
      class Singleton {
        private static instance: Singleton;
        private constructor() {}
        public static getInstance(): Singleton {
          if (!Singleton.instance) {
            Singleton.instance = new Singleton();
          }
          return Singleton.instance;
        }
        public doSomething(): string {
          return "Singleton action";
        }
      }
      const instance = Singleton.getInstance();
      console.log(instance.doSomething()); // Singleton action
      ```

44. **Write a utility type to extract method names from a class.**
    - Expected Answer:
      ```typescript
      type MethodNames<T> = {
        [K in keyof T]: T[K] extends Function ? K : never;
      }[keyof T];
      class User {
        name: string = "";
        getName(): string { return this.name; }
        setName(name: string): void { this.name = name; }
      }
      type UserMethods = MethodNames<User>; // "getName" | "setName"
      ```

45. **Type a polymorphic function that processes shapes.**
    - Expected Answer:
      ```typescript
      interface Shape {
        getArea(): number;
      }
      class Circle implements Shape {
        constructor(private radius: number) {}
        getArea(): number {
          return Math.PI * this.radius ** 2;
        }
      }
      class Rectangle implements Shape {
        constructor(private width: number, private height: number) {}
        getArea(): number {
          return this.width * this.height;
        }
      }
      function processShape(shape: Shape): number {
        return shape.getArea();
      }
      const circle = new Circle(5);
      const rectangle = new Rectangle(4, 6);
      console.log(processShape(circle)); // ~78.54
      console.log(processShape(rectangle)); // 24
      ```

---

## Behavioral/Scenario-Based Questions

46. **How would you convince a team to adopt TypeScript’s OOP features?**
    - Expected Answer: Highlight benefits like encapsulation and polymorphism for maintainable code. Propose using classes/interfaces in critical modules first.

47. **Describe a challenging TypeScript OOP bug you faced and how you resolved it.**
    - Expected Answer: Example: Incorrect type inference in a class hierarchy. Debugged using explicit types and `tsc --noEmit`.

48. **How do you ensure type safety in a large OOP codebase?**
    - Expected Answer: Use strict `tsconfig`, enforce interfaces/abstract classes, and review type usage in CI/CD pipelines.

49. **What approach do you take when migrating a JavaScript project to TypeScript with OOP?**
    - Expected Answer: Enable `allowJs`, introduce classes/interfaces gradually, and prioritize typing core business logic.

50. **How do you handle disagreements on TypeScript OOP practices in a team?**
    - Expected Answer: Align on standards (e.g., prefer interfaces for contracts), use examples to show benefits, and enforce via linting.
