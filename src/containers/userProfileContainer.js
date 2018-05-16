import React, { Component } from 'react';
import { connect } from 'react-redux';
import userProfile from '../components/userProfile.jsx';

function mapStateToProps(state) {
    return { user: state.user, followers: stat.followers, repos: state.repos };
}

export default connect(null, mapStateToProps)(userProfile)