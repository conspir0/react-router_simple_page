import React from "react";
import { Route, Switch } from "react-router-dom";

import "./header.css";
import header_home from "../../images/header_home.jpg";
import header_products from "../../images/header_products.jpg";
import header_contact from "../../images/header_contact.jpg";
import header_admin from "../../images/header_admin.jpg";
import header_error from "../../images/header_error.jpg";

const Header = props => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => {
          return <img src={header_home} alt="" />;
        }}
      />
      <Route
        path="/products"
        render={() => {
          return <img src={header_products} alt="" />;
        }}
      />
      <Route
        path="/contact"
        render={() => {
          return <img src={header_contact} alt="" />;
        }}
      />
      <Route
        path="/admin"
        render={() => {
          return <img src={header_admin} alt="" />;
        }}
      />
      <Route
        render={() => {
          return <img src={header_error} alt="" />;
        }}
      />
    </Switch>
  );
};

export default Header;
