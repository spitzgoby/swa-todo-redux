# Todo App Brown Bag Session \#4

## Testing Reducers and Selectors

### Implementation
Testing reducers is quite simple. Reducers are just functions that accept a
state and an action and produce a new state. The pattern for testing these is:
1. Create a variable with a starting state
2. Create a variable with an action that has a type the reducer responds to as
well as a payload that generates a new expected state.
3. Call the reducer with the starting state and action and `expect` that the
results of the function is correct.

Example:
```JavaScript
// This is found in src/modules/User/__tests__/reducer.test.js:11

// The action we want the reducer to respond to
const mockAction = {
    type: 'fake-action-type'
};
// The starting state of the application when the action occurs. While it is not
// required for this mock state to match the actual shape of the application
// data, there is value in doing it this way because tests should also serve
// as documentation.
const mockCurrentState = {
    User: {
        user: {id: 'test'}
    }
};

// The reducer does not respond to this action so we expect the starting and
// final states to be the same.
expect(reducer(mockCurrentState, mockAction)).toEqual(mockCurrentState);
```

### Common Reducer Tests
There are 2 tests that should be standard for all reducers:
1. A test that the reducer returns its initial state when passed `undefined` and
an action that it doesn't recognize. This is because all reducers will receive
this while Redux is booting up.
2. A test that the reducer returns the starting state when it does not recognize
an action. This test is demonstrated above.

These tests are good sanity checks that you have set your `default` case and
have the correct starting value.

### Testing Selectors
Since our selectors are colocated with our reducer we will also be testing them
in the same file. Selectors are just functions that accept `state` and return
data, so we won't spend much time on them as they can be tested just like any
other function.   

## Testing components

### `jest`
`jest` is an all-in-one testing platform that is specifically designed for
React applications. It provides useful mocking features as well as an
expectation library.

### `enzyme`
This project uses a set of testing utilities called `enzyme` that are developed
by AirBnB. These utilities make it easy to render our components and search
through their structure as well as simulating events on those components.

The 2 primary methods provided by `enzyme` are `shallow` and `mount`. The
difference is how far down the component tree `enzyme` will render. `shallow`
will only render the one component deep and use placeholders for any other
React components nested inside. `mount` will attempt to go all the way down the
component tree and render each component. One important consideration is that
`shallow` will not cause `componentDidMount` (or the equivalent hook) to be
triggered.

`shallow` and `mount` both return a wrapper around the React component that have
several helper functions we can use to test. The most commonly used are `find`
and `simluate`.

We will implement the `clearCompletedTodos` button and test it using `find` and
`simulate`.

## Demonstration
* Add a test for the `Todos` reducer that checks whether it returns the correct
initial state.
* Add a test for the `TodoItem` component that checks whether it calls its
`deleteTodo` prop when the delete button is clicked.

## Additional Reading
* [Enzyme Docs](https://airbnb.io/enzyme/docs/api/)
* [Jest Docs](https://jestjs.io/docs/en/getting-started.html)
