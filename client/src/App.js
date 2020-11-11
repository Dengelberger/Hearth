import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "./pages/Login";
import Search from "./pages/Browse";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import Recipe from "./pages/Recipe";
import Builder from "./pages/Builder";
import axios from "axios"

function App() {
  const [isUser, setIsUser] = useState(false);
  const [userInfo, setUserInfo] = useState();


  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "/api/user",
    }).then((res) => {
      // setData(res.data);
      console.log(res.data);
    });
  //   axios.get("/api/user").then(res => {
  //     console.log("USER DATA:")
  //     console.log(res.data);
  // }).catch(err => { console.log(err) });
  }, []);




  


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
      <Route path="/recipe/:id">
        <Recipe />
      </Route>
      <Route path="/builder">
        <Builder />
      </Route>
      <Route path="/">
        <Welcome />
      </Route>
    </Switch>
  </BrowserRouter>;
}

export default App;
