import App from './component';
import {connect} from 'react-redux';
import {getErrorDeletingTodo, getRecentlyDeletedTodo} from '../../modules/Todos';

const mapStateToProps = (state) => ({
    errorDeletingTodo: getErrorDeletingTodo(state),
    recentlyDeletedTodo: getRecentlyDeletedTodo(state) 
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
