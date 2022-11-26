import React, {useState, useEffect, useInsertionEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
// import './logo.png';
import {Menu,  MenuItem, Button} from '@material-ui/core';
 
import { auth,db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
const Header = () => {

  function GetCurrentUser(){
    const [user,setUser]= useState('')
    const userCollectionRef = collection(db, "users")

    useEffect(()=>{
         auth.onAuthStateChanged(userlogged=>{
             if(userlogged){
                 const getUsers = async ()=>{
                   const q = query(collection(db, "users"), where("uid", "==",userlogged.uid))
                  //console.log(q)
                const data = await getDocs(q);
                setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})))  
                 }
                 getUsers();
             }
             else{
              setUser(null)
             }
         })
    },[])
    return user
}

const loggeduser = GetCurrentUser();
const navigate=useNavigate()

const handleLogout = () => {
     auth.signOut().then(()=>{
         navigate("/login")
     })
}

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

{/* newwwww1 */}

              {!loggeduser && <nav>
                <div className='icons'>
                <img src="https://cdn-icons-png.flaticon.com/128/4301/4301554.png" id='upload_icon' ></img>
              <Link to='/cart'>
                <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" id='cart_icon' ></img>
              </Link> 
              <span className='cart-icon-css'>0</span>

              <Button onClick={openMenu}><img src="https://cdn-icons-png.flaticon.com/128/3024/3024605.png" id='profile_icon' style={{width:'fit-content'}}></img> </Button>  
      <Menu open={Boolean(anchor)} 
      keepMounted anchorEl={anchor} 
      onClose={closeMenu} 
      PaperProps={{
        style: {
            maxHeight: 40* 4,
            width: '14ch',
            marginTop:'48px',
          
          }
        
      }}>
         <MenuItem ><Link to='/userprofile'>User Profile</Link></MenuItem>
         <MenuItem><Link to='/addprod'>AddProd</Link></MenuItem>
         <MenuItem>Third</MenuItem>
         {/* <MenuItem>
         <Link to="/signup" style={{textDecoration:'none', color:'black'}}>SignOut</Link></MenuItem> */}
         <MenuItem><button className='login-btn'><Link to='/login'>Login</Link></button></MenuItem>
      </Menu>

              </div>
              </nav>}

              {loggeduser && <nav>
                <div className='icons'>

                <img src="https://cdn-icons-png.flaticon.com/128/4301/4301554.png" id='upload_icon' ></img>

              <Link to='/cart'>
                <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" id='cart_icon' ></img>
              </Link>  
              <span className='cart-icon-css'>{loggeduser[0].cart}</span>

              <Button onClick={openMenu}><img src="https://cdn-icons-png.flaticon.com/128/3024/3024605.png" id='profile_icon' style={{width:'fit-content'}}></img> </Button>  
      <Menu open={Boolean(anchor)} 
      keepMounted anchorEl={anchor} 
      onClose={closeMenu} 
      PaperProps={{
        style: {
            maxHeight: 40* 4,
            width: '14ch',
            marginTop:'48px',
          
          }
        
      }}>
         <MenuItem ><Link to='/userprofile'>User Profile</Link></MenuItem>
         <MenuItem><Link to='/addprod'>AddProd</Link></MenuItem>
         <MenuItem>Third</MenuItem>
         {/* <MenuItem>
         <Link to="/signup" style={{textDecoration:'none', color:'black'}}>SignOut</Link></MenuItem> */}
         <MenuItem><button className='logout-btn' onClick={handleLogout}>Logout</button></MenuItem>
      </Menu>
       
              {/* <button className='logout-btn' onClick={handleLogout}>Logout</button> */}
              </div>
              </nav>}



{/* newwwww2 */}


        {/* <div className='icons'>
            <img src="https://cdn-icons-png.flaticon.com/128/4301/4301554.png" id='upload_icon' ></img>
            
            


            {!loggeduser && <nav><Link to='/cart'></Link>
              <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" id='cart_icon' ></img>  
              <span className='cart-icon-css'>0</span>
              </nav>}

              {loggeduser && <nav><Link to='/cart'></Link>
              <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" id='cart_icon' ></img>  
              <span className='cart-icon-css'>{loggeduser[0].cart}</span>
              <button className='logout-btn' onClick={handleLogout}>Logout</button>
              </nav>}
        
        
            <Button onClick={openMenu}><img src="https://cdn-icons-png.flaticon.com/128/3024/3024605.png" id='profile_icon' style={{width:'fit-content'}}></img> </Button>  
      <Menu open={Boolean(anchor)} 
      keepMounted anchorEl={anchor} 
      onClose={closeMenu} 
      PaperProps={{
        style: {
            maxHeight: 40* 4,
            width: '14ch',
            marginTop:'48px',
          
          }
        
      }}>
         <MenuItem >User Profile</MenuItem>
         <MenuItem>Second</MenuItem>
         <MenuItem>Third</MenuItem>
         <MenuItem>
         <Link to="/signup" style={{textDecoration:'none', color:'black'}}>SignOut</Link></MenuItem>
      </Menu>
            
       </div> */}
       

  
    </div>
    
       );
  };
  
  export default Header;