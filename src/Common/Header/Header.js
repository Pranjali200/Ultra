import React, {useState, useEffect, useInsertionEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
// import './logo.png';
import {Menu,  MenuItem, Button} from '@material-ui/core';
import { auth,db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
// import Search from '../../Pages/SearchBar/Search';
// import SearchResults from '../../Pages/SearchBar/SearchResults';
const Header = ({placeholder,data}) => {

  // const [filteredData, setfilteredData] = useState([]);
  // const [wordEntered, setWordEntered] = useState("");

  // const handleFilter = (event) => {
  //   const searchWord = event.target.value;
  //   setWordEntered(searchWord);
  //   const newFilter = data.filter((value) => {
  //     return value.name1.toLowerCase().includes(searchWord.toLowerCase());
  //   });

  //   if (searchWord === "") {
  //     setfilteredData([]);
  //   } else {
  //     setfilteredData(newFilter);
  //   }
  // };



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
      
const [cartdata,setcartdata] = useState([]);
if(loggeduser) {
  const getcartdata = async () => {
      const cartArray = [];
      const path = `cart-${loggeduser[0].uid}`
      // console.log(path)
      getDocs(collection(db, path)).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          //console.log(doc.id, " => ", doc.data());
          cartArray.push({ ...doc.data(), id: doc.id})
        });
        setcartdata(cartArray)
        //console.log('done')
      }).catch('Error error error')
  }
  getcartdata()
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
            <input type='search' name="" placeholder='search by disease' id="search-box1"></input>
            {/* <Search type='search' placeholder='search medicines' id="search-box1"></Search> */}
            {/* <label for="search-box1" className='fas fa-search' id="search-box1-icon"></label> */}
           
           
            {/* <input type="text" value={wordEntered} placeholder={placeholder} onChange={handleFilter} className="search" id="search-box1" autoComplete="off"/>  */}
                 {/* <button id="b1" type='submit'>
                  <img id="imb1" 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt=""/>
                  </button> */}
    {/* { filteredData.length !== 0 &&( 
        <div className="dataResult1">
        {filteredData.map((value,key)=>{
               // return <a className="dataItem1" href={value.link1} >{value.name1}</a> 
            return <Link to={value.link1} className="dataItem1"><p>{value.name1}</p></Link>
        })}
        </div>  
   )} */}


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
              
              {/* <button className='cart-icon-css'>{loggeduser[0].cart}</button></Link>   */}
              <button className='cart-icon-css'>{cartdata.length}</button></Link>  

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