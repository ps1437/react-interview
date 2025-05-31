
##  Paginated Photos Grid

## Features Implemented

1. **Fetch data from API and display on grid**  
   - Uses `fetch` inside `useEffect` to retrieve data from `https://jsonplaceholder.typicode.com/users`
   - Displays the data in a structured list (can be replaced with a grid component like `Material-UI` or `CSS Grid`)

2. **Display loader while data is being fetched**  
   - Shows a `"Loading users..."` message when `loading` is `true`

3. **Display "No data found" when no data matches the filter**  
   - If the filtered user list is empty, it shows `"No results found"`

4. **Display error message in case of failures**  
   - If the API call fails, shows an error message in red with `Error: <error message>`

5. **Apply search filter on grid**  
   - Includes a search input to filter users by name in real time using `.filter()` on the `users` array
```jsx
import React, { useEffect, useState } from 'react';

function UserSearch() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>User Search</h2>
      <input
        type="text"
        placeholder="Search users by name"
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />
      {filteredUsers.length === 0 ? (
        <p>No results found</p>
      ) : (
        <ul>
          {filteredUsers.map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserSearch;

```
