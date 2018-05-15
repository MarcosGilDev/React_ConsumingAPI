import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_user, set_followers, set_repos } from '../actions/index';
import UserCard from '../components/userCard.jsx';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ set_user, set_followers, set_repos }, dispatch);
}
export default connect(null, mapDispatchToProps)(UserCard);