import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import LoginForm from './login_form';

const mapStateToProps = state => ({
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));