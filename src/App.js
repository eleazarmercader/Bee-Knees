import React from "react";
import ReactDOM from "react-dom";

import styles from "./styles";

import FakeAPI from './fakeAPI.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: "",
      logged: false,
    };
  }

  handleInput = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let error = null;
    let username_trim = this.state.username.trim();
    let password_trim = this.state.password.trim();
    if (username_trim.length === 0) {
      error = "Enter a username.";
    } else if (password_trim.length === 0) {
      error = "Enter a password.";
    }
    this.setState({
      error: error,
    });
    if (error !== null) {
      return;
    }
    let result = FakeAPI.login(this.state.username, this.state.password);
    this.setState({
      logged: result.valid,
      error: result.message
    });
  };

  render() {
    if (this.state.logged === true) {
      return <div style={styles.wrapper}>
              <p>Logged in! Welcome, {this.state.username}</p>
      </div>
    } else {
        return (
          <form style={styles.wrapper} onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleInput}
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInput}
              style={styles.input}
            />
            <input type="submit" value="Log In" style={styles.submit}></input>
            <p style={styles.error}>{this.state.error}</p>
          </form>
        );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"));