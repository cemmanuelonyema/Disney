import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
// import PropTypes from 'prop-types'

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
};

// App.propTypes = {}

export default App;
