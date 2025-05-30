Here is a Markdown-formatted file content containing **React Testing Questions with Answers**. You can copy this and save it as a `.md` file (e.g., `react-testing-questions.md`):

---

````markdown
# 📘 React Testing - Questions & Answers

A curated list of common React Testing interview and practice questions with answers using **Jest** and **React Testing Library**.

---

## ❓ Q1: What is unit testing in React?

**Answer:**  
Unit testing involves testing individual units/components in isolation to ensure they work as expected. In React, this includes testing:
- Component rendering
- Props and state changes
- Event handling (clicks, form input, etc.)
- Side effects (useEffect, API calls)

---

## ❓ Q2: What tools are commonly used for testing React apps?

**Answer:**
- **Jest** – Test runner and assertion library.
- **React Testing Library (RTL)** – For testing UI from a user’s perspective.
- **Enzyme** – A tool for shallow rendering and more detailed component testing (less recommended today).

---

## ❓ Q3: How do you test if a component renders properly?

```jsx
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header text', () => {
  render(<Header />);
  expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
});
````

---

## ❓ Q4: How do you simulate user interaction?

```jsx
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick} />);
  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

---

## ❓ Q5: How to test conditional rendering?

```jsx
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('shows welcome message when logged in', () => {
  render(<Greeting isLoggedIn={true} />);
  expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
});
```

---

## ❓ Q6: How do you mock an API call in tests?

```jsx
import axios from 'axios';
import { render, waitFor } from '@testing-library/react';
import Users from './Users';
jest.mock('axios');

test('loads and displays users', async () => {
  axios.get.mockResolvedValue({ data: [{ name: 'Alice' }] });
  const { getByText } = render(<Users />);
  await waitFor(() => getByText('Alice'));
});
```

---

## ❓ Q7: What is the purpose of `act()` in testing?

**Answer:**
`act()` ensures that all updates related to state, effects, or DOM updates are flushed before assertions. It prevents inconsistent states in tests.

---

## ❓ Q8: How to test form input changes?

```jsx
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

test('updates input value', () => {
  const { getByLabelText } = render(<Form />);
  const input = getByLabelText(/Name/i);
  fireEvent.change(input, { target: { value: 'John' } });
  expect(input.value).toBe('John');
});
```

---

## ✅ Best Practices

* Test behavior, not implementation details.
* Prefer `screen.getBy*` methods for querying DOM.
* Use `waitFor` for async assertions.
* Keep tests small, readable, and isolated.

---

> 🧪 Writing tests improves code reliability, prevents regressions, and ensures confidence during refactoring.

```

---

Let me know if you want this saved as a downloadable `.md` file too.
```
