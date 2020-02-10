import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import Card from '@material-ui/core/Card';
import { Navbar } from 'react-bootstrap'
import HomeIcon from '@material-ui/icons/Home';
import { IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './profile.css'
// import Avatar from '@material-ui/core/Avatar';
import demo from './demo.jpg'
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
// import jwt_decode from 'jwt-decode';


class Profile extends Component {
  constructor() {
    super();
    this.state= {
      image: demo,
      loading: false
    }
  }

  uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'venu18')
    this.setState({
      loading: true
    });
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/coder-202/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()
    this.setState({
      image: file.secure_url
    });
    console.log(file.secure_url)
    this.setState({
      loading: false
    });
    const token = localStorage.getItem('token');
    console.log(localStorage.getItem('token'), "tokan is ..")
    // const decoded = jwt_decode(token)
    // console.log(decoded)
  
    axios.post('http://localhost:8000/profile_im',{header:{imageUrl:file.secure_url,token:token }}
    ).then(res =>{
      console.log(res)
    }).catch(err =>{
      console.log(err)
    })
  }
  
  render() {
    return(
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
              <AddIcon />
            </IconButton>
            <IconButton color="inherit">
              <Link to="/profile" > <AccountCircleIcon /></Link>
            </IconButton>
          </div>
        </Navbar>
      </div>

      <div className="profile">

        {/* <label className='Icon' for="file">
          < EditIcon color='primary' />
        </label> */}
        <input type="file"
          multiple='true'
          id="file"
          style={{ display: 'none' }}
          name='file'
          onChange={this.uploadImage}/>
        {this.state.loading ? (
          <h3>Loading...</h3>
        ) : (
            <div className='box'>
              <img src={this.state.image} style={{ width: '150px', borderRadius: '50%', height: '150px', }} />
            </div>
          )}
           <label className='Icon' for="file">
          < EditIcon color='primary' />
        </label>
        <div>
        <Link to="/edit"> <button variant="primary">Edit profile</button></Link>
      </div>
      </div>

    </div>
    )
  }
}

// function Profile() {
//   const [image, setImage] = useState(demo)
//   const [loading, setLoading] = useState(false)

//   const uploadImage = async e => {
//     const files = e.target.files
//     const data = new FormData()
//     data.append('file', files[0])
//     data.append('upload_preset', 'venu18')
//     setLoading(true)
//     const res = await fetch(
//       'https://api.cloudinary.com/v1_1/coder-202/image/upload',
//       {
//         method: 'POST',
//         body: data
//       }
//     )
//     const file = await res.json()
//     setImage(file.secure_url)
//     console.log(file.secure_url)
//     setLoading(false)
//     const token = localStorage.getItem('token');
//     console.log(localStorage.getItem('token'), "tokan is ..")
//     // const decoded = jwt_decode(token)
//     // console.log(decoded)
  
//     axios.post('http://localhost:8000/profile_im',{header:{imageUrl:file.secure_url,token:token }}
//     ).then(res =>{
//       console.log(res)
//     }).catch(err =>{
//       console.log(err)
//     })
//   }

//   return (
//     <div>
//       <div>
//         <Navbar expand="lg" variant="light" style={{ backgroundColor: '#3578E5' }}>
//           <IconButton
//             color="inherit"
//           >
//             <HomeIcon />
//           </IconButton>
//           <span>Home</span>
//           <div className="container" style={{ width: '10px' }}>
//             <IconButton color="inherit">
//               <FavoriteBorderIcon />
//             </IconButton>
//             <IconButton color="inherit">
//               <Link to="/CreatePost" ><AddIcon /> </Link>
//             </IconButton>
//             <IconButton color="inherit">
//               <Link to="/profile" > <AccountCircleIcon /></Link>
//             </IconButton>
//           </div>
//         </Navbar>
//       </div>

//       <div className="profile">

//         {/* <label className='Icon' for="file">
//           < EditIcon color='primary' />
//         </label> */}
//         <input type="file"
//           multiple='true'
//           id="file"
//           style={{ display: 'none' }}
//           name='file'
//           onChange={ uploadImage}/>
//         {loading ? (
//           <h3>Loading...</h3>
//         ) : (
//             <div className='box'>
//               <img src={image} style={{ width: '150px', borderRadius: '50%', height: '150px', }} />
//             </div>
//           )}
//            <label className='Icon' for="file">
//           < EditIcon color='primary' />
//         </label>
//         <div>
//         <Link to="/edit"> <button variant="primary">Edit profile</button></Link>
//       </div>
//       </div>

//     </div>
//   )
// }
export default Profile;  