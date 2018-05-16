import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCardContainer from '../containers/userCardContainer';

class UserList extends Component {
  constructor(props){
    super(props);
    this.renderUsers = this.renderUsers.bind(this);
  }

  renderUsers(){
    return this.props.users.map((user) => {
      return (
        <UserCardContainer username={user.login} avatar={user.avatar_url} history={this.props.history}/>
      );
    });
  }

  render() {
    if( this.props.users.length > 0 ){
      return (
        <div>
           {this.renderUsers()} 
        </div>
      );
    }
    return(
      <h2>Waiting name...</h2>
    );
  }
}

export default UserList;
