import {connect} from 'react-redux';
import {
    getCompletedTodos,
    getTodos
} from 'modules/Todos'
import TodoList from './component';

const mapStateToProps = (state) => ({
    completedTodos: getCompletedTodos(state),
    todos: getTodos(state)
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
