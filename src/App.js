import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
// import Header from "./components/Header";
import "./App.css";
// import PropTypes from 'prop-types'

const App = (props) => {
  return (
    <Router>
      {/* <Header /> */}
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
