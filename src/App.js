import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "./pages/Login";
import Search from "./pages/Browse";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";

function App() {
  return <BrowserRouter>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/browse">
        <Search />
      </Route>
      <Route path="/">
        <Welcome />
      </Route>
    </Switch>
  </BrowserRouter>;
}

export default App;
