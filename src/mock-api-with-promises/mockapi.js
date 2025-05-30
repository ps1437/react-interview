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