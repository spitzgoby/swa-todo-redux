import {connect} from 'react-redux';
import {completeTodo} from 'modules/Todos';
import TodoItem from './component';

const mapDispatchToProps = (dispatch) => ({
    completeTodo: (id, completed) => dispatch(completeTodo(id, completed))
});

export default connect(undefined, mapDispatchToProps)(TodoItem);
