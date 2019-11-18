import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import TweetsReducer from './tweets_reducer';

export default combineReducers({
  session: SessionReducer,
  tweets: TweetsReducer,
  errors: ErrorsReducer,
});
