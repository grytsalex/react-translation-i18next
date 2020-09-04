import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ReactSelect } from '../components';
import ReduxThunk from '../components/ReduxThunk/index';
import { Home } from '../components/Home/Home';
import { Header } from '../components/Header/Header';
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import ParentComponent from '../components/HigherOrderComponent/ParentComponent';

// eslint-disable-next-line react/prefer-stateless-function
export default class Layout extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/react-select" component={ReactSelect} />
          <Route path="/redux-thunk" component={ReduxThunk} />
          <Route path="/hoc" component={ParentComponent} />
        </Switch>
      </Router>
    );
  }
}
