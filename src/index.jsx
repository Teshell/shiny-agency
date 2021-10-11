import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";

import Header from "./components/Header";
import Error from "./components/Error";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/results">
          <Results />
        </Route>

        <Route exact path="/freelances">
          <Freelances />
        </Route>

        <Route path="/survey/:questionNumber">
          <Survey />
        </Route>

        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
