
// Simulated API 1
export function mockApi1(page) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pageSize = 5;
      const totalItems = 100;
      const start = (page - 1) * pageSize;
      const end = Math.min(start + pageSize, totalItems);
      const items = [];

      for (let i = start + 1; i <= end; i++) {
        items.push({
          id: `api1-${i}`,
          title: `API 1 Item ${i}`,
          createdAt: new Date(Date.now() - i * 1000000),
        });
      }

      resolve({
        items,
        hasMore: end < totalItems,
      });
    }, 800);
  });
}

// Simulated API 2
export function mockApi2(page) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pageSize = 3;
      const totalItems = 100;
      const start = (page - 1) * pageSize;
      const end = Math.min(start + pageSize, totalItems);
      const items = [];

      for (let i = start + 1; i <= end; i++) {
        items.push({
          id: `api2-${i}`,
          title: `API 2 Item ${i}`,
          createdAt: new Date(Date.now() - i * 1500000),
        });
      }

      resolve({
        items,
        hasMore: end < totalItems,
      });
    }, 1000);
  });
}