import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Grid } from '@material-ui/core';
// import { Card } from 'react-bootstrap'
// import Model from 'react-modal'
import axios from 'axios'
class Home extends Component {
 state={
   fileInput: '',
 }


  handlChange(e) {
    // this.setState({ modal: true });
    console.log(e.target.files, '@@@@@@@@@@@@@@@')
    this.setState({
      fileInput:e.target.files[0]
    })
    axios.post('http://localhost:8000/image', { headers: { 'file': e.target.files[0].name } })
      .then((res) => {
        console.log(res, 'rrrrrrrrrrrrrrrrrrr')
      }).catch((err) => {
        console.log(err)
      })
  }
  handlesubmit(e) {
    e.preventDefault();
    console.log(e.target.value, 'OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
    axios.post('http://localhost:8000/image', { headers: { 'text': e.target.value } })
      .then((res) => { console.log(res, 'rupa') })
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
                <Link to="/home" ><AddIcon /> </Link>
              </IconButton>
              <IconButton color="inherit">
                <AccountCircleIcon />
              </IconButton>
            </div>
          </Navbar>
        </div>

        <Grid container spacing={16}>
          <Grid item sm={8} xs={12}>
            <div class="shadow p-3 mb-5 bg-white rounded" style={{ marginLeft: '38%', marginTop: '30px' }}>
              <div className="post">
                <p className="creat">Create post</p>
              </div>
              <input type='text'
                placeholder='write something'
                name='text'
                onChange={(e) => { this.handlesubmit(e) }}
              
              ></input>
             }
           
              <label for="file">
                <span class='fa fa-edit edit-icon'>
                </span>Photo/Videos</label>
              <input type="file"
                multiple='true'
                id="file" style={{ display: 'none' }}
                name='file' onChange={(e) => { this.handlChange(e) }} />
                
            </div>
          </Grid>
         
        </Grid>
      </div>
    )
  }
}

export default Home
