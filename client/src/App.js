import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "./pages/Login";
import Search from "./pages/Browse";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import Recipe from "./pages/Recipe";
import Builder from "./pages/Builder";
import HomeCook from './pages/HomeCook';
import UserPage from './pages/UserPage';
import axios from "axios"


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);


  useEffect(() => {
    getUser()
  }, []);

  const getUser = () => {
    axios.get('/api/user').then(response => {
      console.log('Get user response: ')
      console.log(response)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        setLoggedIn(true);
        setUserInfo(response.data.user)

      } else {
        console.log('Get user: no user');
        
        setLoggedIn(false);
        setUserInfo(null)
      }
    })
  }
  return <BrowserRouter>
    <Switch>
      <Route path="/login">
        <Login user={userInfo} />
      </Route>
      <Route path="/signup">
        <Signup user={userInfo}  />
      </Route>
      <Route path="/browse">
        <Search user={userInfo}  />
      </Route>
      <Route path="/recipe/:id">
        <Recipe user={userInfo}  />
      </Route>
      <Route path="/builder">
        <Builder user={userInfo} />
      </Route>
      <Route path="/homecook/:id">
        <HomeCook user={userInfo} />
      </Route>
      <Route path="/user">
        <UserPage user={userInfo} />
      </Route>
      <Route path="/">
        <Welcome user={userInfo} />
      </Route>
    </Switch>
  </BrowserRouter>;
}

export default App;
