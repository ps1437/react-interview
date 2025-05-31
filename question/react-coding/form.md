Sure! Here’s a React.js coding question markdown file that shows managing **multiple form inputs using a single state object** with `useState`.

---

````markdown
# React.js Coding Question

## Question: Manage Multiple Form Inputs Using a Single Object State

Create a React component called `UserForm` that:

- Contains input fields for `firstName`, `lastName`, `email`, and `age`.
- Uses a single state object with `useState` to hold all form fields.
- Updates the relevant field in the state object on input change.
- Displays the entered data live below the form.
- On submit, alerts the full form data and resets the form.

---

## Sample Solution

```jsx
import React, { useState } from 'react';

function UserForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
  });

  // Generic change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User Info:\n
      First Name: ${formData.firstName}\n
      Last Name: ${formData.lastName}\n
      Email: ${formData.email}\n
      Age: ${formData.age}
    `);

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      age: '',
    });
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label><br />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label><br />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age:</label><br />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
      </form>

      <h3>Entered Data:</h3>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Age: {formData.age}</p>
    </div>
  );
}

export default UserForm;
````

---

### Explanation:

* A single `formData` state object holds all input fields.
* The `handleChange` function updates only the field being edited using dynamic object keys (`[name]`).
* Form inputs are controlled components bound to the corresponding `formData` properties.
* On submit, form data is alerted and form is reset by clearing the state.
