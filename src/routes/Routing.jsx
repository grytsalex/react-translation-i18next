import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ReactSelect, ReduxThunk } from "../components";
import { Home } from "../components/Home/Home";
import { Header } from "../components/Header/Header";
import ParentComponent from "../components/HigherOrderComponent/ParentComponent";

export default class Layout extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={ReactSelect} />
          <Route path="/team" component={ReduxThunk} />
          <Route path="/hoc" component={ParentComponent} />
        </Switch>
      </Router>
    );
  }
}
