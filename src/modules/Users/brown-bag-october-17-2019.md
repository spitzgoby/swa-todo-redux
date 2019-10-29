# Todo App Brown Bag Session \#3

## Splitting Reducers
Applications will quickly become too complex to be handled by a single reducer.
In that case we want to create multiple reducers that handle a particular slice
of the overall application state. There is still a single store that is
responsible for coordinating all data across the application, but the actions,
selectors, and reducers are now split in order to follow the single
responsibility principle.

In our example we will add a new "User" entity that controls whether the user is
able to delete or add new todos.

We first need to modify `store.js` by using the `combineReducers` utility
provided by Redux. This utility accepts an object where the keys are the names
of the state slices and the values are the reducers that will handle them. You
can see this inside of `store.js`.

Now that we have nested our Todos state deeper inside of the application state,
all of our selectors will need to be updated with this new state path. The
`getTodos` selector, for example, will change from `state => state.todos` to
`state => state.Todos.todos`.

And that's it! There is no need to update any containers or components. They
will automatically work because they are restricted to using selectors to access
data.

## Adding the User Role Actions
Adding an action has not changed, so this you can refer to the previous material
in `brown-bag-october-10-2019.md`.

## Data Normalization
See information in `brown-bag-october-10-2019.md`.

## Homework
Implement the "Clear Completed Todos" action using the new normalized data
structure.

__Hint__: You can use a `lodash` function to reduce the existing
`state.entities` object or iterate over the `state.todos` list using
the ES6 `Array.prototype.reduce` method, but make sure to spread the existing
entities as well. You will also need to filter the existing todo ids out of the
`state.Todos.todos` array. Make sure not mutate the existing state values within
the reducer.

```
case types.CLEAR_COMPLETED_TODOS:
    newState = {
        ...state,
        entities: {
            ...state.entities,
            ...state.reduce(accumulator, todoId) => {
                // your reduce code here
            }, {})
        },
        todos.filter(todoId => {
            // your code here
        })
    }
```
