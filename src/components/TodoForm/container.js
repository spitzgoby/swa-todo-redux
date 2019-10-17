import {addTodo} from 'modules/Todos';
import {connect} from 'react-redux';
import TodoForm from './component';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (payload) => {
    dispatch(addTodo(payload));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
