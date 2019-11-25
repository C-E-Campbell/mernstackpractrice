import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from "./user/pages/Users";
function App() {
  return (
    <Router>
      <Route component={Users} path={"/users"} />
    </Router>
  );
}

export default App;
