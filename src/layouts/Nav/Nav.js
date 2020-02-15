import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const list = [
  {
    name: "home",
    path: "/",
    exact: true
  },
  {
    name: "products",
    path: "/products",
    exact: false
  },
  {
    name: "contact",
    path: "/contact",
    exact: false
  },
  {
    name: "admin",
    path: "/admin",
    exact: false
  }
];

const Nav = props => {
  const navList = list.map(item => {
    return (
      <li key={item.name}>
        <NavLink to={item.path} exact={item.exact}>
          {item.name}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul>{navList}</ul>
    </nav>
  );
};

export default Nav;
