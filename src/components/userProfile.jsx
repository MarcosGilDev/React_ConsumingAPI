import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props){
    super(props);

    this.renderProfile = this.renderProfile.bind(this);
    this.renderFollowers = this.renderFollowers.bind(this);
    this.renderRepos = this.renderRepos.bind(this);
  }

  renderProfile(){
    return(
      <div>
        Profile
      </div>
    )
  }
  renderFollowers(){
    return(
      <div>
        Followers
      </div>
    )
  }
  renderRepos(){
    return(
      <div>
        Repos
      </div>
    )
  }

  render() {
      return (
        <div >
          {this.renderProfile()}
          {this.renderFollowers()}
          {this.renderRepos()}
        </div>
      );
    }
  }

export default UserProfile;