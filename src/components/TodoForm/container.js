import {
    addTodo,
    getForm,
    updateTodoForm
} from 'modules/Todos';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TodoForm from './component';

const mapStateToProps = (state) => ({
    form: getForm(state)
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ addTodo, updateTodoForm }, dispatch)    
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
