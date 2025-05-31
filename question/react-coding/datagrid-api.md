Sure! Here's a React.js markdown file example showing how to **fetch data from an API and render it in the UI** using hooks (`useEffect` and `useState`):

---

````markdown
# React.js Coding Question

## Question: Fetch Data from an API and Render It in the UI

Create a React component called `UserList` that:

- Fetches user data from a public API endpoint on component mount.
- Shows a loading message while data is being fetched.
- Handles errors and displays an error message if the fetch fails.
- Renders the list of users after successfully fetching.
- Displays each user's `name` and `email`.

---

## Sample Solution

```jsx
import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // Sample API
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty dependency array means run once on mount

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: '1rem' }}>
            <strong>{user.name}</strong><br />
            Email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
````

---

### Explanation:

* `useEffect` triggers the fetch on initial render.
* `loading` state shows a loading message while waiting for data.
* Errors are caught and shown with a message.
* Once data is loaded, the user list is rendered with unique keys.
* Uses the free public JSONPlaceholder API for demonstration.
