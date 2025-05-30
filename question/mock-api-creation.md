# MOCK API

# 1. Mock APi

```jsx
export function simulateApi(delay = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ message: 'Hello from the simulated API!' });
    }, delay);
  });
}
```

# 2. With Random Error
```jsx
export function simulateApi(delay = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve({ message: 'Hello from the simulated API!' });
      } else {
        reject(new Error('Simulated API failure!'));
      }
    }, delay);
  });
}
```

