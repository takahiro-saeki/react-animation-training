import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NoMatch, Example1, Example2 } from "./pages";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Example1} />
      <Route exact path="/example1" component={Example1} />
      <Route exact path="/example2" component={Example2} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default Root;
