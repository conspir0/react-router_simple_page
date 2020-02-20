import React from "react";
import { Route } from "react-router-dom";
import "./Footer.css";

const Footer = props => {
  return (
    <div className="footer">
      <Route path="/" exact render={() => <p>Home Page</p>} />
      <Route
        path="/:id"
        exact
        render={props => <p>{props.match.params.id}</p>}
      />
      <Route
        path="/:id/:prod"
        exact
        render={props => (
          <p>
            {props.match.params.id} <span>-</span> {props.match.params.prod}
          </p>
        )}
      />
    </div>
  );
};

export default Footer;
