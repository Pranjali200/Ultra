// import logo from './logo.svg';
//import './App.css';

import React, {useEffect, useState} from 'react';
import { Route} from "react-router-dom";
import { Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login'; 
import Signup from './Pages/Signup/Signup';
import {auth} from './firebase'
import Navigation from './Common/Navigation/Navigation'
import Home2 from './Pages/Home2/Home2';
import Footer from './Common/Footer/Footer';
import Forlinkingtry from './Pages/Forlinkingtry';
import Ayur from './Pages/Ayurveda/Ayur';
import Allo from './Pages/Allopathic/Allo';
import Homeopath from './Pages/Homeopathic/Homeopath';
import Cart from './Pages/Cart/Cart';
import Userprofile from './Pages/Userprofile/Userprofile';
import AddProducts from './Components/AddProducts/AddProducts';
import Allprodpage from './Components/AboutProduct/Allprodpage';
import Specificprodpage from './Components/AboutProduct/Specificprodpage';
import ProdCard from './Components/NewSliderFire/ProdCard';
function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
      // console.log(user);
      // setUserName("");
    });
  }, []);
  return (

    <div className="full_app_structure" >
           
    {/* <div className="headAndNav">
          <Navigation/>
     </div> */}
    <div className="routing">
      <Routes>
        <Route exact path="/" element={<Home name={userName}/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/signup" element={<Signup/>}></Route>
        <Route exact path="/home2" element={<Home2/>}></Route>
        <Route exact path="/forlinkingtry" element={<Forlinkingtry/>}></Route>
        <Route exact path="/ayur" element={<Ayur/>}></Route>
        <Route exact path="/allo" element={<Allo/>}></Route>
        <Route exact path="/homeopath" element={<Homeopath/>}></Route>
        <Route exact path="/cart" element={<Cart/>}></Route>
        <Route exact path='/userprofile' element={<Userprofile/>}></Route>
        <Route exact path='/addprod' element={<AddProducts/>}></Route>
        <Route exact path='/product-type/allopathic' element={<Allprodpage type={'Allopathic Medicine'}/>}></Route>
        <Route exact path='/product-type/homeopathic' element={<Allprodpage type={'Homeopathic Medicine'}/>}></Route>
        <Route exact path='/product-type/ayurvedic' element={<Allprodpage type={'Ayurvedic Medicine'}/>}></Route>
        {/* <Route path="/product/:id/:title/:brand/:customersupport/:description/:price/:productimage/:producttype/:warranty" element={<Specificprodpage/>}></Route> */}
        <Route path="/product/:type/:id/" element={<Specificprodpage/>}></Route>
        {/* {`/product/${p.id}/${product.product.producttitle} /${product.product.brand}
    /${product.product.customersupport}/${product.product.description}/${product.product.price}
    /${product.product.productimage}/${product.product.producttype}/${product.product.warranty}`} */}

      </Routes>
    </div>
    {/* <Footer/> */} 
    </div>
  );
}

export default App;
