import React, { Component } from 'react'
import { Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    console.log(this.props, "pralhad")
    return (
      <Navbar expand="lg" variant="light" style={{ backgroundColor: '#3578E5' }}>
        <h1>Navgurukul</h1>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link to="/login" ><Button variant="primary">Login</Button> </Link>
            </li>
            <li className="nav-item">
            <Link to="/signup"> <Button variant="primary">Signup</Button></Link>
            </li>
          </ul>
        </div>
      </Navbar>
    )
  }
}
export default NavBar

