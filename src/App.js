import React, { Component } from 'react';
import Navbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './pages/Signup';
import './App.css'
import login from './pages/login';
import  CreatePost from './components/CreatePost'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Profile from './components/profile';
import Home from './pages/Home'
import edit from './components/edit';

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
         <Route path="/profile" component={Profile} />
         <Route exact path="/edit" component={edit} />
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
// i
// }
// ;