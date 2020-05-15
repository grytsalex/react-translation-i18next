import React, { Component } from "react";
import { BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Team } from "../components/Team/Team";
import { About } from "../components/About/About";
import { Home } from "../components/Home/Home";
import {Header} from "../components/Header/Header";

export default class Layout extends Component {
  render() {
    return (

      <Router>
        <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/team" component={Team}/>
          </Switch>
      </Router>
    )
  }
}