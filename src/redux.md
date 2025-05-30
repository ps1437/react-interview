
# Redux Flow Diagram with Details

Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments, and are easy to test.

---

## Redux Flow Overview

Redux follows a unidirectional data flow, meaning data flows in one direction through the app. Here’s a step-by-step explanation of the flow:

1. **Action**  
   An action is a plain JavaScript object describing *what happened*. It must have a `type` property that indicates the type of action being performed.  
   Example:  
   ```js
   { type: 'INCREMENT' }
   ```

2. **Dispatch**  
   To trigger a state change, an action is *dispatched* using the store's `dispatch` method. This is like sending a message that something happened.

3. **Reducer**  
   The reducer is a pure function that takes the current state and the action, and returns a new state based on the action type. It never mutates the current state but returns a new updated object.

4. **Store**  
   The store holds the whole application state. It listens for dispatched actions, calls the reducer, and saves the new state. Components subscribe to the store to get updates.

5. **View (React Components)**  
   The UI subscribes to the store and gets the current state to render the app. When the state updates, components re-render with the new state.

---

## Redux Flow Diagram (Simplified ASCII)

\`\`\`
   +---------+       dispatch       +---------+       new state      +---------+
   |  Action | ------------------> | Reducer | ------------------> |  Store  |
   +---------+                     +---------+                     +---------+
        ^                                                           |
        |                                                           |
        |                  subscribe                                  |
        +-----------------------------------------------------------+
                                updates
                                (state)
                                 |
                                 v
                          +--------------+
                          | React Views  |
                          +--------------+
\`\`\`

---

## Summary of Flow

- **User Interaction** or async event triggers an **Action**.
- The **Action** is dispatched to the **Store**.
- The **Store** calls the **Reducer** with the current state and the action.
- The **Reducer** returns a new state.
- The **Store** updates its state and notifies subscribed **React components**.
- React components re-render with the updated state.

---

## Additional Concepts

- **Middleware**: Enhances \`dispatch\` to handle async operations (like API calls) or logging.
- **Thunk / Saga**: Popular middleware for async side effects.
- **Selectors**: Functions to select parts of the state for components, improving performance.

---

## Example Action & Reducer

\`\`\`js
// Action
const incrementAction = { type: 'INCREMENT' };

// Reducer
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
\`\`\`
