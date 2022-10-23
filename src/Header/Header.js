import React from 'react';
import './header.css';
// import './logo.png';
const Header = () => {
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
            <img src="https://cdn-icons-png.flaticon.com/128/3024/3024605.png" id='profile_icon' ></img>
       </div>
    </div>
       );
  };
  
  export default Header;