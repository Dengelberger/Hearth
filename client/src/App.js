import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "./pages/Login";
import Search from "./pages/Browse";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import Recipe from "./pages/Recipe";
import Builder from "./pages/Builder";
import axios from "axios"
import HomeCook from './pages/HomeCook';

function App() {
  const [isUser, setIsUser] = useState(false);
  const [userInfo, setUserInfo] = useState();


  useEffect(() => {
    getUser()
  }, []);

  const getUser = () => {
    axios.get('/api/user').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        // this.setState({
        //   loggedIn: true,
        //   username: response.data.user.username
        // })
      } else {
        console.log('Get user: no user');
        // this.setState({
        //   loggedIn: false,
        //   username: null
        // })
      }
    })
  }



  


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
      <Route path="/homecook/:id">
        <HomeCook />
      </Route>
      <Route path="/">
        <Welcome />
      </Route>
    </Switch>
  </BrowserRouter>;
}

export default App;
