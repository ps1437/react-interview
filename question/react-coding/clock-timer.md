## Question: Build a Clock Timer Component

Create a React component called `ClockTimer` that:

- Displays the current time (hours:minutes:seconds).
- Updates every second using an internal timer (`setInterval`).
- Cleans up the timer on component unmount to avoid memory leaks.

---

## Sample Solution

```jsx
import React, { useState, useEffect } from 'react';

function ClockTimer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Set up interval to update time every second
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(timerId);
  }, []);

  // Format time as HH:MM:SS
  const formatTime = (date) => {
    const pad = (num) => num.toString().padStart(2, '0');
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
  };

  return (
    <div style={{ fontSize: '2rem', fontFamily: 'monospace', textAlign: 'center', marginTop: '20px' }}>
      {formatTime(time)}
    </div>
  );
}

export default ClockTimer;
````

---

### Explanation:

* `useState` stores the current `Date` object.
* `useEffect` sets up a `setInterval` timer to update the time every second.
* The cleanup function clears the timer when the component unmounts.
* Time is formatted to always show two digits for hours, minutes, and seconds.

