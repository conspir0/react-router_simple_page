import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import "./App.css";

const Home = () => {
  return <h1>HOME</h1>;
};
const Info = () => {
  return <h1>Info</h1>;
};
const Gallery = () => {
  return <h1>Gallery</h1>;
};
const Contact = () => {
  return <h1>Contact</h1>;
};
const ErrorPage = () => {
  return <h1>Error #404</h1>;
};

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/info" activeClassName="active info">
                  Info
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" activeClassName="active gallery">
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <section>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/info" component={Info} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
            <Route component={ErrorPage} />
          </Switch>
        </section>
      </Router>
    );
  }
}

export default App;
