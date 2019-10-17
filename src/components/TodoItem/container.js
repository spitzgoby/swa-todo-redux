import {connect} from 'react-redux';
import {completeTodo, deleteTodo} from 'modules/Todos';
import {getUser} from 'modules/Users';
import TodoItem from './component';

const mapStateToProps = (state) => ({
    user: getUser(state)
})

const mapDispatchToProps = (dispatch) => ({
    completeTodo: (id, completed) => dispatch(completeTodo(id, completed)),
    deleteTodo: (id) => dispatch(deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
