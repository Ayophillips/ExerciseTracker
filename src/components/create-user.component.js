import React, { Component } from 'react';
import axios from 'axios';

import { API_HOME, ADD_USER_ROUTE } from '../constants/apiConstants';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);


    axios.post(API_HOME + ADD_USER_ROUTE, user) // to send post request a new user in db
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }
  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Users" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}