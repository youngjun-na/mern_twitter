import React from 'react';
import TweetBox from './tweet_box';

class Tweet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    }
  }

  componentDidMount() {
    this.props.fetchTweets();
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.tweets.length !== prevState.tweets.length){
      return { tweets: nextProps.tweets};
    }
    else return prevState;
  }
  handleDelete(e, id) {
    e.preventDefault();
    this.props.deleteTweet(id)
  }
  render() {
    if (this.state.tweets.length === 0) {
      return (<div>There are no Tweets</div>)
    } else {
      return (
        <div>
          <h2>All Tweets</h2>
          {this.state.tweets.map(tweet => (
            <div>
              <TweetBox key={tweet._id} text={tweet.text} date={tweet.date} />
              <button onClick={(e) => this.handleDelete(e, tweet._id)}>Delete</button>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Tweet;