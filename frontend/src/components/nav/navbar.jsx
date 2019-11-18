import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.scss';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks  = this.getLinks.bind(this);
  }
  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="nb-cont">
          <Link className="nb-link" to='/tweets'>
            <p>All Tweets</p>
          </Link>
          <Link className="nb-link" to='/profile'>
            <p>Profile</p>
          </Link>
          <Link className="nb-link" to='/new_tweet'>
            <p>Write a Tweet</p>
          </Link>
          <div className="logout-but"onClick={this.logoutUser}>
            <p>Logout</p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Link to='signup'>Signup</Link>
          <Link to='login'>Login</Link>
        </div>
      )
    }
  }
  render() {
    return(
      <div>
        <h1>BlueBird</h1>
        { this.getLinks() }
      </div>
    );
  }
}