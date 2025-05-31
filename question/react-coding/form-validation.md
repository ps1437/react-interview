
## Question: Build a Form with Basic Validation Without Using Any Library

Create a React component called `SimpleForm` that:

- Has input fields: `username`, `email`, and `password`.
- Validates inputs on submit:
  - `username`: required, minimum 3 characters.
  - `email`: required, must be a valid email format.
  - `password`: required, minimum 6 characters.
- Displays validation error messages next to each field.
- Prevents submission if validation fails.
- Shows an alert with form data if all validations pass.

---

## Sample Solution

```jsx
import React, { useState } from 'react';

function SimpleForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    // Email validation (simple regex)
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert(`Form Submitted Successfully:\n
        Username: ${formData.username}\n
        Email: ${formData.email}\n
        Password: ${formData.password}
      `);

      // Reset form
      setFormData({ username: '', email: '', password: '' });
      setErrors({});
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Simple Form Validation</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: '1rem' }}>
          <label>Username:</label><br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && (
            <div style={{ color: 'red', fontSize: '0.8rem' }}>{errors.username}</div>
          )}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div style={{ color: 'red', fontSize: '0.8rem' }}>{errors.email}</div>
          )}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <div style={{ color: 'red', fontSize: '0.8rem' }}>{errors.password}</div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm;
```

---

### Explanation:

- `validate` function performs checks and sets error messages in `errors` state.
- On submit, validation runs; if it passes, shows alert and resets form.
- Error messages are conditionally rendered below each input.
- No external validation library is used — only simple JavaScript and React state.
