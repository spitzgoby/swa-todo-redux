import {
    addTodo,
    getForm,
    updateTodoForm
} from 'modules/Todos';
import {connect} from 'react-redux';
import TodoForm from './component';

const mapStateToProps = (state) => ({
    form: getForm(state)
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (payload) => {
        dispatch(addTodo(payload));
    },
    updateTodoForm: (payload) => {
        dispatch(updateTodoForm(payload))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
