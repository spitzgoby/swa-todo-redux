# Todo App Brown Bag Session \#2

## Creating Actions
The process for adding a new action involves the following steps
1. Add a new type for the action to `types.js`
2. Add the action creator with `actions.js`
3. Add a new switch case in `reducer.js` that uses the new action type and
updates state according to the action's payload
4. Import the new action creator into the container of the component that will
dispatch the action
5. Add code to the component to fire the new action whenever necessary (via a
    browser event, AJAX request, timer, etc)
6. Dispatch the action and make sure that state is being updated correctly

## Delete Todo Example
1. Add a new key to the object in `src/modules/Todos/types.js`. The new type for
the action to delete todos will be:
```
DELETE_TODO: '@swa-todo-redux/Todos/DELETE_TODO'
```
The `@swa-todo-redux/Todos` namespace prevents collisions when multiple modules
need to export an action with the same name. Remember that the action types are
just strings, and if we forget to namespace our modules then we can have
collisions when `moduleA` dispatches an action with the same type constant as
`moduleB`. A good example is a `SEARCH` action.
2. Add a new function inside of `actions.js` that accepts a single parameter of
the todo ID and returns an object with the `DELETE_TODO` type and `id` payload.
3. Add a new case inside of the function in `reducer.js`. This new case will
update the list of todos by removing the one that matches with the given ID. We
want to create a new copy of the list with the matching todo filtered out.
Reducers should always generate new copies of the data whenever they respond to
an action.
```
case types.DELETE_TODO:
    newState = {
        ...state,
        todos: state.todos.filter(todo => todo.id !== id)
    }
    break;
```
When possible we want to stick to functions like `map` and `filter` that do not
alter the objects they work upon.
4. In `src/components/TodoItem/container.js` import the new action and copy it
into the object created by `mapDispatchToProps`. The existing action '
(`completeTodo`) can be used as the template for this. We will introduce a new
`Redux` method `bindActionCreators` to reduce some of the boiler plate when
connecting actions to components.
5. Add an `onClick` event handler to the `<IconButton>` inside of `TodoItem`. We
just need to call the new function that we added to props inside of the
container.
```
const handleDeleteButtonClick = () => {
    props.deleteTodo(props.todo.id)
};
```
6. Profit
