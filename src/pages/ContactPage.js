import React, { Component } from "react";
import { Prompt } from "react-router-dom";
import "./ContactPage.css";

class ContactPage extends Component {
  state = {
    text: ""
  };

  handleTextChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.prevntDefault();

    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <>
        <div className="contact">
          <h1 className="contact__title">write to us</h1>
          <form className="contact__form" onSubmit={this.handleSubmit}>
            <textarea
              value={this.state.text}
              onChange={this.handleTextChange}
              placeholder="Type here..."
              className="form__textarea"
            ></textarea>
            <button className="form__btn form__btn--submit">Submit</button>
          </form>
          <Prompt
            when={this.state.text.length > 0}
            message="If you leave this page you will lose your message. Are you sure?"
          ></Prompt>
        </div>
      </>
    );
  }
}

export default ContactPage;
