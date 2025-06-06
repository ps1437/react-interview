# React js Question 
## Question:
The UserSearch component fetches a list of users and filters them based on the user's input. What potential optimization can you introduce to reduce the number of unnecessary re-renders or performance hits as the user types in the search input, and how would you implement it?

Follow-up (optional):
Can you explain the concept of debouncing in the context of input handling and apply it to this component?

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
