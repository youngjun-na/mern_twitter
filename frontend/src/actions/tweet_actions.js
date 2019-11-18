import * as APIUtil from '../util/tweet_api_util';

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const RECEIVE_USER_TWEETS = "RECEIVE_USER_TWEETS";
export const RECEIVE_NEW_TWEET = "RECEIVE_NEW_TWEET";
export const REMOVE_TWEET = "REMOVE_TWEET";

export const receiveTweets = tweets => ({
  type: RECEIVE_TWEETS,
  tweets
});

export const receiveUserTweets = tweets => ({
  type: RECEIVE_USER_TWEETS,
  tweets
});

export const receiveNewTweet = tweet => ({
  type: RECEIVE_NEW_TWEET,
  tweet
});

export const removeTweet = tweet => ({
  type: REMOVE_TWEET,
  tweet
})
export const fetchTweets = () => dispatch => (
  APIUtil.getTweets()
    .then(tweets => dispatch(receiveTweets(tweets)))
    .catch(err => console.log(err))
);

export const fetchUserTweets = id => dispatch => (
  APIUtil.getUserTweets(id)
    .then(tweets => dispatch(receiveUserTweets(tweets)))
    .catch(err => console.log(err))
);

export const composeTweet = data => dispatch => (
  APIUtil.writeTweet(data)
    .then(tweet => dispatch(receiveNewTweet(tweet)))
    .catch(err => console.log(err))
);

export const deleteTweet = id => dispatch => (
  APIUtil.deleteTweet(id)
    .then(tweet => dispatch(removeTweet(tweet)))
    .catch(err => console.log(err))
);