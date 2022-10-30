import React from 'react'
import { Link } from 'react-router-dom';
import Navigation from '../../Common/Navigation/Navigation';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Header/Header';
import Sliders from '../../Components/Slider/Sliders'
import Card from '../../Components/Cards/Card';

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
          <div className='home_page_contents' style={{maxWidth:'1460px', margin:'0px auto'}}>
             <h4>Shop by category</h4>
          </div>
          <br/><h6 style={{maxWidth:'1460px', margin:'0px auto'}}>MEDICINE TYPE</h6><br/>
        <div className='card-structure d-flex justify-content-left' >
             <Card 
               title='Ayurveda'
               imageUrl='https://www.biospectrumindia.com/uploads/articles/ayurvedic_0404_1_-13185.jpg'
              //  body='sea side'
              />
               <Card 
               title='Allopathic'
               imageUrl='https://3.imimg.com/data3/WA/CN/MY-10558939/allopathy-250x250.jpg'
              //  body='sea side'
              />
               <Card 
               title='Homeopathic'
               imageUrl='https://post.healthline.com/wp-content/uploads/2020/08/Chamomile_and_Homeopathic_Medicine-732x549-thumbnail.jpg'
              //  body='sea side'
              />
                 <br/>
          </div> 
          <br/><h6 style={{maxWidth:'1460px', margin:'0px auto'}}>OTHER VARIETY</h6><br/>
          <div className='card-structure d-flex justify-content-left' >   
               <Card
               title='Nutrition Tonics'
               imageUrl='https://static.abbottnutrition.com/cms-prod/ensure-2019.in/img/Ebsure-Horizontal-Banner_1920x988_tcm1524-163449.jpg'
              //  body='sea side'
              />
              <Card 
               title='Medical equipments'
               imageUrl='https://image.made-in-china.com/202f0j00vMzhItAlkObF/Free-Sample-Ready-Stock-Guangzhou-Blood-Pressure-Monitor-with-Pulse-Oximeter-Bp-Monitor.jpg'
              //  body='sea side'
              />
           </div> 
       
         
      
      <Footer/> 
      </div>
      );
  };
  
  export default Home;