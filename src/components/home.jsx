import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import UserList from '../components/userList.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] }
    this.handlingKey = this.handlingKey.bind(this);
  }

  handlingKey(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      fetch(`https://api.github.com/search/users?q=${event.target.value}+in:login`).then(
        (response) => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then((users) => {
            this.setState({
              users : users.items
            });
          })
        }
      );
    }
  }
  render() {
    return (
      <div >
        <form>
          <input type="text" name="firstname" placeholder="Login name" onKeyPress={this.handlingKey} />
        </form>
        <UserList users={this.state.users} history={this.props.history}/>
      </div>
    );
  }
}

export default Home;