import React from 'react'
import { Link } from 'react-router-dom';
import Navigation from '../../Common/Navigation/Navigation';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Header/Header';
import Sliders from '../../Components/Slider/Sliders'
const Home = (props) => {

    return (
      <div>
        <div className="headAndNav">
          <Header/>
          <Navigation/>
     </div>
        <div>
        {/* <h1>Home Landing image</h1> */}
        {/* <h1>
          <Link to="/login">Login</Link>
        </h1>
        <h1>
          <Link to="signup">Signup</Link>
        </h1> */}
        </div>
        <h2 style={{marginLeft:'45%'}}>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>

          <Sliders/>

        <Footer/> 
      </div>
      
    );
  };
  
  export default Home;