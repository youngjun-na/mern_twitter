import { connect } from 'react-redux';
import { fetchTweets, deleteTweet } from '../../actions/tweet_actions';
import Tweets from './tweets';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    tweets: Object.values(state.tweets.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTweets: () => dispatch(fetchTweets()),
    deleteTweet: id => dispatch(deleteTweet(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tweets));