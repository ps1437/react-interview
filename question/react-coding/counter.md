🔽 CountDownTimer: Count from 50 to 0


```jsx

import React, { useState, useEffect } from 'react';

function CountDownTimer() {
  const [count, setCount] = useState(50);

  useEffect(() => {
    if (count <= 0) return;

    const intervalId = setInterval(() => {
      setCount(prev => {
        if (prev > 0) return prev - 1;
        clearInterval(intervalId);
        return prev;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div style={{ fontSize: '2rem', fontFamily: 'monospace', textAlign: 'center' }}>
      Count Down: {count}
    </div>
  );
}

export default CountDownTimer;
