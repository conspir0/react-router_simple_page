import React from "react";
import { Route, Redirect } from "react-router-dom";

const permission = false;

const AdminPage = () => {
  return (
    <Route
      render={() =>
        permission ? (
          <h1
            style={{
              margin: "10px 20px 50px",
              paddingBottom: 5,
              borderBottom: "1px solid #E4A044",
              textTransform: "uppercase"
            }}
          >
            Admin Panel
          </h1>
        ) : (
          <Redirect to="./login" />
        )
      }
    />
  );
};

export default AdminPage;
