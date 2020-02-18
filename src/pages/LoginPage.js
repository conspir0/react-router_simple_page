import React, { Component } from "react";
import "./LoginPage.css";

class LoginPage extends Component {
  state = {
    user: "",
    pass: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      user: "",
      pass: ""
    });
  };

  render() {
    const { user, pass } = this.state;

    return (
      <div className="admin">
        <h1 className="admin__title">Login In</h1>
        <form className="admin__form" onSubmit={this.handleSubmit}>
          <label htmlFor="user" className="form__label">
            <input
              className="form__input"
              type="text"
              id="user"
              placeholder="User name"
              value={user}
              onChange={this.handleInputChange}
            />
          </label>
          <label htmlFor="pass" className="form__label">
            <input
              className="form__input"
              type="password"
              id="pass"
              placeholder="Password"
              value={pass}
              onChange={this.handleInputChange}
            />
          </label>
          <button className="form__btn form__btn--submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
