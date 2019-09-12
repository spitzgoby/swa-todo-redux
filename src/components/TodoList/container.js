import {connect} from 'react-redux';
import {getTodos} from 'modules/Todos'
import TodoList from './component';

const mapStateToProps = (state) => ({
  todos: getTodos(state)
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);