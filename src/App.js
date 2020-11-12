import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link,
} from "react-router-dom";
import './App.css';
import Home from './Home.js';
import Todos from './Todos.js';
import Login from './Login.js'
import SignUp from './SignUp.js'
import PrivateRoute from './PrivateRoute.js';

export default class App extends Component {
  state = {
    username: localStorage.getItem('USERNAME') || '',
    token: localStorage.getItem('TOKEN') || ''
  }

  handleChangeUsernameAndToken = (myUsername, myToken) => {
    localStorage.setItem('USERNAME', myUsername);
    localStorage.setItem('TOKEN', myToken);

    this.setState({
      username: myUsername,
      token: myToken
    });
  }

    logOut = () => {
      localStorage.setItem('USERNAME', '');
      localStorage.setItem('TOKEN', '');

      this.setState({
        username: '',
        token: ''
    }) 
  }

  render() {
    return (
      <div>
        <Router>Welcome to the Todos Website for Chores
          <ul>
            {
              this.state.token
              ? <div>
                {this.state.username}
                <button onClick={this.logOut}>Log Out</button>
              </div>
              : <>
              <Link to="/login"><div>Log In</div></Link>
            <Link to="/signup"><div>Sign Up</div></Link>
              </>
            }
          </ul>
          <Switch>
            <Route exact path='/' render={(routerProps) => <Home {...routerProps} />} />
            <Route exact path='/login' render={(routerProps) =>
            <Login 
            {...routerProps}
                handleChangeUsernameAndToken={this.handleChangeUsernameAndToken} 
                />
              } 
              />
            <Route 
            exact
            path='/signup'  
            render={(routerProps) =>
                <SignUp 
                {...routerProps}
                handleChangeUsernameAndToken={this.handleChangeUsernameAndToken}
                />
                } 
              />
            <PrivateRoute
              token={this.state.token}
              exact
              path='/todos'
              render={(routerProps) => <Todos {...routerProps} token={this.state.token} />} />
          </Switch>
        </Router>
      </div>
    )
  }
}