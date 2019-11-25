import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Users from "./user/pages/Users";
import Places from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
function App() {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/places/new" exact component={Places} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
