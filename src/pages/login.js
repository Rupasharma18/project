import React, { Component } from 'react'
import axios from 'axios';
import Navbar from './../components/navbar';


class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      loading: true,
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    axios.get("http://localhost:8000/login", {
      params: {
        email: this.state.email,
        password: this.state.password
      }
    }, { headers: { 'Content-Type': 'application/json' } })
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data);
        console.log(localStorage.getItem('token'))
        // axios.post('http://localhost:8000/verify', {id: res.data.user['id']})

        axios.get('http://localhost:8000/verify', { headers: { id: res.data } })
          .then(res => {
            console.log(res.data)
            if (res.data === true) {
              this.props.history.push('/home')
            } else {
              this.props.history.push('/login')
            }
          })
        this.setState({
          loading: false
        })
        // this.props.history.push('/home')
      })
      .catch(err => {
        console.log(err)
        this.setState({
          loading: false
        })
      })
  };
  render() {

    return (
      <>
        <form noValidate onSubmit={this.onSubmit}>
          <h3>Log In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input type="email" onChange={this.onChange} value={this.state.email} name="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" onChange={this.onChange} value={this.state.password} name="password" className="form-control" placeholder="Enter password" />
          </div>

          <button type="submit" className="btn btn-primary btn-block">Submit</button>

        </form>
      </>
    )
  }
}

export default Login