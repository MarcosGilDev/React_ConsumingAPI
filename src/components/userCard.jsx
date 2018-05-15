import React, { Component } from 'react';

class UserCard extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  async handleClick(event) {
    const user = await this.dynamicFetch(`https://api.github.com/users/${this.props.username}`);
    const followers = await this.dynamicFetch(`https://api.github.com/users/${this.props.username}/followers`);
    const repos = await this.dynamicFetch(`https://api.github.com/users/${this.props.username}/repos`);

    this.props.set_user(user);
    this.props.set_followers(followers);
    this.props.set_repos(repos);
    this.props.history.push('/user');
  }

  dynamicFetch(url) {
    return new Promise((resolve) => {
      fetch(url)
        .then((response) => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          resolve(response.json());
        })
    });
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        <img src={this.props.avatar} alt="User's avatar" />
        <h2>{this.props.username}</h2>
      </div>
    );
  }
}

export default UserCard;