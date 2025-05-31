Here’s a React.js markdown file with a coding question to create a **Navbar with clickable items that switch the active tab** (highlighting the selected menu):

---

```markdown
# React.js Coding Question

## Question: Build a Navbar with Clickable Tabs That Switch Active State

Create a React component called `Navbar` that:

- Displays a list of navigation items (e.g., Home, About, Services, Contact).
- Highlights the currently active tab.
- When a tab is clicked, it becomes active and the previously active tab is deactivated.
- Displays the name of the active tab below the navbar.

---

## Sample Solution

```jsx
import React, { useState } from 'react';

function Navbar() {
  const tabs = ['Home', 'About', 'Services', 'Contact'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#eee' }}>
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => handleClick(tab)}
            style={{
              cursor: 'pointer',
              padding: '0.5rem 1rem',
              borderBottom: activeTab === tab ? '3px solid blue' : '3px solid transparent',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              color: activeTab === tab ? 'blue' : 'black',
              userSelect: 'none',
            }}
          >
            {tab}
          </div>
        ))}
      </nav>

      <div style={{ padding: '1rem', fontSize: '1.2rem' }}>
        Selected Tab: <strong>{activeTab}</strong>
      </div>
    </div>
  );
}

export default Navbar;
```

---

### Explanation:

- The `activeTab` state tracks which tab is selected.
- Clicking a tab updates the `activeTab`.
- Styles (underline and color) change dynamically based on active state.
- The selected tab name is displayed below the navbar.
