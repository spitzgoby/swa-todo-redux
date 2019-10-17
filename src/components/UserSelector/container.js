import {connect} from 'react-redux';
import {getUser, selectUser} from 'modules/Users';
import UserSelector from './component';

const mapStateToProps = (state) => ({
    user: getUser(state)
});

const mapDispatchToProps = (dispatch) => ({
    selectUser: (user) => dispatch(selectUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSelector);