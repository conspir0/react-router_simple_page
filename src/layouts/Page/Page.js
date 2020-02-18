import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ProductsListPage from "../../pages/ProductsListPage";
import ProductsPage from "../../pages/ProductsPage";
import ContactPage from "../../pages/ContactPage";
import AdminPage from "../../pages/AdminPage";
import LoginPage from "../../pages/LoginPage";
import ErrorPage from "../../pages/ErrorPage";

const Page = props => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/products" exact component={ProductsListPage} />
      <Route path="/products/:id" component={ProductsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/login" component={LoginPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Page;
