import {connect} from 'react-redux';
import {completeTodo, deleteTodo, getTodoById} from 'modules/Todos';
import {getUser} from 'modules/Users';
import TodoItem from './component';

const mapStateToProps = (state, ownProps) => ({
    todo: getTodoById(state, ownProps.todoId),
    user: getUser(state)
})

const mapDispatchToProps = (dispatch) => ({
    completeTodo: (id, completed) => dispatch(completeTodo(id, completed)),
    deleteTodo: (id) => dispatch(deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
