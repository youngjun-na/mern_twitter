import React from 'react';
import '../../styles/tweet_box.scss';
class TweetBox extends React.Component {
  render() {
    console.log(this.props.date)
    return (
      <div className="tb-cont">
        <h3>{this.props.text}</h3>
        <div>{this.props.date}</div>
      </div>
    );
  }
}

export default TweetBox;