# Todo App Brown Bag Session \#3

## Review Data Normalization
A quick recap of the topics discussed in the previous brown bag session
regarding data normalization.

## Managing Forms In Redux
Currently the `<TodoForm />` component maintains its state locally within the
component. This means that the form will be wiped every time the user refreshes
the page. If we want to use our persistence layer we should tie the form into
our `Redux` store.

The steps for incorporating form data are the same as any other piece of data
managed by the store. We need to:
1. Create an initial state for the form within the Todos reducer.
2. Add a selector that is able to access this property.
3. Connect the `<TodoForm />` component to this new property within its
`container`.
4. Create a new action `updateTodoForm` and a corresponding `UPDATE_TODO_FORM`
type. Remember to export this new file from
`src/modules/Todos/actions/index.js`.
5. Add a new case to the Todos reducer that updates the form values according to
the action's payload.
6. Dispatch the action from the component whenever a form input is changed.
7. Profit.

Now our form data will be automatically persisted according to our
`redux-persist` configuration. We probably want to clear the form when a todo is
added. We simply reset the form data inside of the `ADD_TODO_INIT` method and
our form is cleared.

## Validating Forms
Another advantage to controlling our forms inside of Redux is that form
validation is now moved out of the component into the model layer. This is
advantageous because the validity of data is a business rule and should not be
handled within the view layer.

We need to add a new `validationErrors` property to the Todos reducer. This is
where we will track any validation issues as they come in. We will implement the
following validation rules:

1. The `description` property cannot be empty
2. The `dueBy` property cannot be in the past

The validation logic can be placed in an `validateTodoForm` action or within the
Todos reducer. I encourage all intelligence to be placed within the actions
because it keeps the reducer code manageable. In addition to reduce file size,
the other advantage is that our stories are typically written to describe user  
actions. This makes it easier when starting a new story to find where your code
should go.

Whether the logic is kept in the
reducer or the action, it is most important that this stays consistent across
the code base. Developers should not have to guess where business logic is being
performed. The steps for generating this action should be somewhat familiar by
now so I will not go over them in great detail.
