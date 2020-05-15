import React, { Component } from "react";
import "./App.less";
import { BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {About} from "./component/About";
import {Team} from "./component/Team";
import {Home} from "./component/Home";

export default class App extends Component {
    render() {
        return (
          <Router>
              <Switch>
                  <Route path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/team" component={Team}/>
              </Switch>
          </Router>
        )
    }
}