import { createBrowserHistory } from "history";
import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";

class RouteConfig extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Header />

        {/* COMMON ROUTES */}
        <Route exact path="/" component={Layout} />

        {/* <Route path="*" component={NotFoundPage} /> */}
      </Router>
    );
  }
}

export default RouteConfig;
