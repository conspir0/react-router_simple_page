import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Page from "../Page/Page";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <Header />
          </header>
          <main>
            <aside>
              <Nav />
            </aside>
            <section className="page">
              <Page />
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
