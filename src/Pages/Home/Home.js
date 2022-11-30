import React, {useState, useEffect, useInsertionEffect} from 'react'
import { Link } from 'react-router-dom';
import Navigation from '../../Common/Navigation/Navigation';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';
import Sliders from '../../Components/Slider/Sliders'
import Card from '../../Components/Cards/Card';
import ProductSlider from '../../Components/ProductSlider/ProductSlider';
import Ss from '../../Components/SlickSlider/Ss';
import {auth, db} from "../../firebase";
import { collection, getDocs, query, where } from 'firebase/firestore';
import NewSlider from '../../Components/NewSliderFire/NewSlider';
import './Home.css'
const Home = (props) => {

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
  // console.log(loggeduser)
  //if(loggeduser){console.log(loggeduser[0].email)}

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
       

      <p>{loggeduser ? loggeduser[0].email : "No data"}</p>
    

        {/* <h2 style={{marginLeft:'45%'}}>{props.username ? `Welcome - ${props.username}` : "Login please"}</h2> */}
      <Sliders/>
          <div className='home_page_contents' style={{maxWidth:'1460px', margin:'0px auto'}}>
             <h4>Shop by category</h4>
          </div>
          <br/><h6 style={{maxWidth:'1460px', margin:'0px auto'}}>MEDICINE TYPE</h6><br/>
        <div className='card-structure d-flex justify-content-left' >
        <Link to={'/ayur'} style={{textDecoration:'none',color:'black'}}>
             <Card 
               title='Ayurveda'
               imageUrl='https://www.biospectrumindia.com/uploads/articles/ayurvedic_0404_1_-13185.jpg'
              //  body='sea side'
              />
          </Link>
          <Link to={'/allo'} style={{textDecoration:'none',color:'black'}}>
               <Card 
               title='Allopathic'
               imageUrl='https://3.imimg.com/data3/WA/CN/MY-10558939/allopathy-250x250.jpg'
              //  body='sea side'
              />
          </Link> 
          <Link to={'/homeopath'} style={{textDecoration:'none',color:'black'}}>
               <Card 
               title='Homeopathic'
               imageUrl='https://post.healthline.com/wp-content/uploads/2020/08/Chamomile_and_Homeopathic_Medicine-732x549-thumbnail.jpg'
              //  body='sea side'
              />
           </Link>   
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
           </div><br/> 
           <div className='home_page_contents' style={{maxWidth:'1460px', margin:'0px auto'}}>
             <h4>Trending offers</h4>
          </div>
         <ProductSlider/>
         <br/>
         <div className='home_page_contents' style={{maxWidth:'1460px', margin:'0px auto'}}>
             <h4>Brands Available</h4>
         </div>
         <Ss />
         <br/><br/>
         <div className='slider-head1' style={{maxWidth:'1460px', margin:'0px auto'}}><p>Buy what you need!</p></div>
         <NewSlider type={'Allopathic Medicine'}/>
         <NewSlider type={'Homeopathic Medicine'}/>
         <NewSlider type={'Ayurvedic Medicine'}/>
      <Footer/> 
      </div>
      );
  };
  
  export default Home;