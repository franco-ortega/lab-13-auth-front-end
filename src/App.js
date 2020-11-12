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

  // handleTokenChange = (myToken) => {
  //   this.setState({ token: myToken });
  //   localStorage.setItem('TOKEN', myToken);
  // }

  handleChangeUsernameAndToken = (myUsername, myToken) => {
    localStorage.setItem('USERNAME', myUsername);
    localStorage.setItem('TOKEN', myToken);

    this.setState({
      username: myUsername,
      token: myToken
    });
    
//    localStorage.setItem('TOKEN', myToken);
  }

  render() {
    return (
      <div>
        <Router>Welcome to the Todos Website for Chores
          <ul>
            {this.state.username}
            {/* { this.state.token && <div>welcome, user!!!</div> }
            { this.state.token && <Link to="/todos"><div>todos</div></Link> } */}
            <Link to="/login"><div>Log In</div></Link>
            <Link to="/signup"><div>Sign Up</div></Link>
            <button onClick={() => this.handleTokenChange('')}>logout</button>
          </ul>
          <Switch>
            <Route exact path='/' render={(routerProps) => <Home 
                handleTokenChange={this.handleTokenChange} 
                {...routerProps} />} 
              />
            <Route exact path='/login' render={(routerProps) => <Login 
                handleTokenChange={this.handleTokenChange} 
                {...routerProps} />} 
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
            {/* //   notice that we pass the token here! This is required! */}
            <PrivateRoute 
              exact 
              path='/todos' 
              token={this.state.token} 
              render={(routerProps) => <Todos 
              {...routerProps} token={this.state.token} />} />
          </Switch>
        </Router>
      </div>
    )
  }
}