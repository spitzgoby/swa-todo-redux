import {connect} from 'react-redux';
import {
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
    retrieveTodos: () => dispatch(retrieveTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
