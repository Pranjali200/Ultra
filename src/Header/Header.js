import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
// import './logo.png';
import {Menu,  MenuItem, Button} from '@material-ui/core';
 
import  { useState } from 'react'
const Header = () => {
    const [anchor, setAnchor]=useState(null);

    const openMenu=(event) =>{
      setAnchor(event.currentTarget);
   }
   const closeMenu=()=>{
     setAnchor(null);
   }
    return (
    <div className='header' id='head_content'>
        <img src="favicon.ico" alt="Ultracure-logoImage" className='header-logo-img' id="hl1"></img>
        <img src='https://www.coolgenerator.com/Data/Textdesign/202210/9ba32f0cfa92f601258e80c146fba6e9.png' alt="UltraCure-logo" className='header-logo'></img>
        <form action='' className='search-form'>
            <input type='search' name="" placeholder='search medicines' id="search-box1"></input>
            {/* <label for="search-box1" className='fas fa-search' id="search-box1-icon"></label> */}
        </form>
        <div className='icons'>
            <img src="https://cdn-icons-png.flaticon.com/128/4301/4301554.png" id='upload_icon' ></img>
            <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" id='cart_icon' ></img>
            {/* <img src="https://cdn-icons-png.flaticon.com/128/3024/3024605.png" id='profile_icon' ></img> */}
            <Button onClick={openMenu}><img src="https://cdn-icons-png.flaticon.com/128/3024/3024605.png" id='profile_icon' style={{width:'fit-content'}}></img> </Button>  
      <Menu open={Boolean(anchor)} 
      keepMounted anchorEl={anchor} 
      onClose={closeMenu} 
      PaperProps={{
        style: {
            maxHeight: 40* 4,
            width: '14ch',
            marginTop:'48px',
            // backgroundColor:'grey'
          }
        
      }}>
         <MenuItem >First</MenuItem>
         <MenuItem>Second</MenuItem>
         <MenuItem>Third</MenuItem>
         <MenuItem>
         <Link to="/signup" style={{textDecoration:'none', color:'black'}}>SignOut</Link></MenuItem>
      </Menu>
            
       </div>
       

  
    </div>
       );
  };
  
  export default Header;