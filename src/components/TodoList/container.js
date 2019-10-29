import {connect} from 'react-redux';
import {
    clearCompletedTodos,
    getCompletedTodos,
    getTodos,
    retrieveTodos
} from 'modules/Todos'
import {getUser} from 'modules/Users';
import TodoList from './component';

const mapStateToProps = (state) => ({
    completedTodos: getCompletedTodos(state),
    todos: getTodos(state),
    user: getUser(state)
});

const mapDispatchToProps = (dispatch) => ({
    clearCompletedTodos: () => dispatch(clearCompletedTodos()),
    retrieveTodos: () => dispatch(retrieveTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
