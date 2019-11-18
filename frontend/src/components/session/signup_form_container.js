import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import SignupForm from './signup_form';

const mapStateToProps = state => ({
  signedIn: state.session.isSignedIn,
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));