import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";

import IndexPage from "./routes/IndexPage";
import BasicLayout from "./layouts/BasicLayout";

function RouterConfig ({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={BasicLayout} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
