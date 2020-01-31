import React, { Component } from 'react';
import Navbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './pages/Signup';
import './App.css'
import login from './pages/login';
import Home from './pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import CreatePost from './components/CreatePost';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
          <Route exact path="/" component={Navbar} />
          </Switch>
         <Switch>
         <Route path="/home" component={Home} />
         {/* <Route exact path="/home" component={CreatePost} /> */}
         <div className="auth-wrapper">
            <div className="auth-inner">
              {/* <Signup/> */}
              <Route path="/login" component={login} />
              <Route exact path="/signup" component={Signup} />
            </div>
          </div>
         </Switch>
        </BrowserRouter>
      </div>

    )
  }
}
;