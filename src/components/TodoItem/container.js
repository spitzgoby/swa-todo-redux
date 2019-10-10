import {connect} from 'react-redux';
import {completeTodo, deleteTodo} from 'modules/Todos';
import TodoItem from './component';

const mapDispatchToProps = (dispatch) => ({
    completeTodo: (id, completed) => dispatch(completeTodo(id, completed)),
    deleteTodo: (id) => dispatch(deleteTodo(id))
});

export default connect(undefined, mapDispatchToProps)(TodoItem);
