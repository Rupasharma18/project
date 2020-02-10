import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './edit.css'
// import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import jwt_decode from 'jwt-decode';



class Edit extends Component {
    constructor() {
        super()
        this.state = {
            address: '',
            email: '',
            birthday: '',
            education: '',
            phone: '',
            bio: '',

        }

        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(e) {
        e.preventDefault()
        const token = localStorage.getItem('token');
        console.log(localStorage.getItem('token'), "tokan is ..")
        const decoded = jwt_decode(token)
        console.log(decoded, "decode..")
        axios.post("http://localhost:8000/edit", { headers: { id: token } }, {
            params: {
                phone: this.state.phone,
                email: this.state.email,
                birthday: this.state.birthday,
                education: this.state.education,
                address: this.state.address,
                bio: this.state.bio,

            }


        })
            .then(res => {
                console.log(res)
            })

    };
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <div>
                    <Navbar expand="lg" variant="light" style={{ backgroundColor: '#3578E5' }}>
                        <IconButton
                            color="inherit"
                        >
                            <HomeIcon />
                        </IconButton>
                        <span>Home</span>
                        <div className="container" style={{ width: '10px' }}>
                            <IconButton color="inherit">
                                <FavoriteBorderIcon />
                            </IconButton>
                            <IconButton color="inherit">
                                <Link to="/CreatePost" ><AddIcon /> </Link>
                            </IconButton>
                            <IconButton color="inherit">
                                <Link to="/profile" > <AccountCircleIcon /></Link>
                            </IconButton>
                        </div>
                    </Navbar>
                </div>
                <div className="class" style={{ marginTop: '3%' }}>
                    <Card className="card" >
                        <h3>Edit profile</h3>
                        {/* <Avatar src="/broken-image.jpg" /> */}
                        <CardContent>
                            <form noValidate onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input
                                        onChange={this.onChange}
                                        type="education"
                                        name="education"
                                        placeholder="Education"
                                        className="form-control"
                                        value={this.state.education} />
                                </div>
                                <div className="form-group">
                                    <input type="tel"
                                        name="phone"
                                        label="Phone Number"
                                        placeholder="Enter your Phone Number"
                                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                                        value={this.state.phone_number}
                                        onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <input type="email"
                                        onChange={this.onChange}
                                        name="email"
                                        value={this.state.email}
                                        className="form-control"
                                        placeholder="Enter email" />
                                </div>
                                <div className="form-group">

                                    <input
                                        onChange={this.onChange}
                                        type="date"
                                        name="birthday"
                                        placeholder="Enter your DOB"
                                        className="form-control"
                                        value={this.state.birthday} />
                                </div>
                                <div className="form-group">

                                    <input
                                        onChange={this.onChange}
                                        name="address"
                                        type="address"
                                        label="Address"
                                        className="form-control"
                                        placeholder="Enter your Address"
                                        value={this.state.address} />
                                </div>
                                <div className="form-group">
                                    <input
                                        onChange={this.onChange}
                                        name="bio"
                                        type="bio"
                                        label="Bio"
                                        className="form-control"
                                        placeholder="Enter your Bio"
                                        value={this.state.bio} />
                                </div>

                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </form>
                        </CardContent>
                    </Card>
                </div>

            </div>
        );
    }
}
export default Edit;















