import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function Footer() {
  return (
    
    <div className="container-fluid w-100 bg-body-tertiary">
    <div className="row border" style={{fontFamily:'serif', fontSize:'20px'}}>
      <div class="col">
        <span style={{ height: "30rem" }}>
          <img src='https://t3.ftcdn.net/jpg/03/62/18/74/360_F_362187413_FHqRSkVNIpowU6Jm3ebPZ7ElFhdLfdkk.jpg' style={{height:'100px', padding:''}}/>
          <h3>Travel Tourist</h3>
        </span>
      </div>
      <div class="col">
        <h4>Resources</h4>
        <ul className="list-unstyled">
          <li className="mb-4">Home</li>
          <li className="mb-4">About</li>
        </ul>
      </div>
      <div class="col">
        <h4>Social Links</h4>
        <ul className="list-unstyled">
          <li className="mb-4">
            <FacebookIcon /> Facebook
          </li>
          <li className="mb-4">
            <InstagramIcon /> Instagram
          </li>
          <li className="mb-4">
            <XIcon />
            Twitter
          </li>
          <li className="mb-4">
            <GitHubIcon /> Github
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Footer