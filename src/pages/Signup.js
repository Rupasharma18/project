import React, { Component } from 'react'
import axios from 'axios';
// import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
class Register extends Component {
  constructor() {
    super()
    this.state = {
      Username: '',
      email: '',
      password: '',
      errors: {},
   
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    const newUser = {
      Username: this.state.Username,
      email: this.state.email,
      password: this.state.password
    }
    // console.log(JSON.stringify(newUser), "zebaSwati")

    axios.post("http://localhost:8000/register",{params:newUser})
      .then(res => {
        console.log(res, "Rashmi");
        window.localStorage.setItem('token', res.data);
        console.log(localStorage.getItem('token'))
       
        axios.get('http://localhost:8000/verify',{headers: {id: res.data}})
        .then(res=>{console.log(res.data )
        if(res.data===true){
          this.props.history.push('/home')
        }else{
          this.props.history.push('/signup')
        }
  
        })
        
        // this.props.history.push('/login')
      })
     
  
    
      
      .catch(err => {
        console.log(err)

      })
  };
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form noValidate onSubmit={this.onSubmit}>
        <h3>Sign Up</h3>
        <div className="form-group">
          <label>Username</label>
          <input type="text"
            onChange={this.onChange}
            name="Username"
            value={this.state.Username}
            className="form-control"
            placeholder="Username" />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input type="email"
            onChange={this.onChange}
            name="email"
            value={this.state.email}
            className="form-control"
            placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password"
            onChange={this.onChange}
            name="password"
            value={this.state.password}
            className="form-control"
            placeholder="Enter password" />
        </div>

        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        <p className="forgot-password text-right">
          Already registered<Link to="/login" >Login</Link>
        </p>
      </form>

    )
  }
}

export default Register


