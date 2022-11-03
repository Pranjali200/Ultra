import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Slider from 'react-slick';


import ImgSlide from '../Ayurveda/ImgSlide';
import { useState } from 'react';
 import './Homeopath.css'

import Header from '../../Header/Header';
import Footer from '../../Common/Footer/Footer';
import Navigation from '../../Common/Navigation/Navigation';

const itemname=[
    // {
    //   id:1,
    //   cover:"https://www.netmeds.com/images/category/v1/491/homeopathy_3.jpg",
    // },
    {
        id:3,
        cover:"https://dranshitarathore.com/wp-content/uploads/2015/09/banner4.jpg",
      },
    {
      id:2,
      cover:"https://i.pinimg.com/originals/0a/4d/e7/0a4de740cf699fc91e6693f3cad4b5c0.jpg",
    },
    
    {
      id:4,
      cover:"http://www.holistichealth4you.net/uploads/2/0/4/3/20430783/homeopathy-banner_orig.jpg"
    },
  ]
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const Homeopathic_items = [
    {
        id: 1,
        rname: "Belladona",
        imgdata: "https://static.oxinis.com/healthmug/image/product/133600-1-1000.webp",
        price:190,
        qnty:0,
        expd: 2023,
        mfd:2022
    },
    {
        id: 2,
        rname: "Nux Vomica",
        imgdata: "https://sfo2.digitaloceanspaces.com/medmall/wp-content/uploads/2020/01/19011306/Medicines-Mall-SBL-Nux-Vomica-1M-1000CH-100-ML-Dilutions.jpg",
        price:260,
        qnty:0
    },
    {
        id: 3,
        rname: "Calc. Phos",
        imgdata: "https://static.oxinis.com/healthmug/image/product/874-2-1000.webp",
        price:90,
        qnty:0
    },
    {
        id: 4,
        rname: "Mag Phos",
        imgdata: "https://assets.lybrate.com/img/otc/product/sbl-magnesia-phosphorica-biochemic-tablet-6x-0",
        price:75,
        qnty:0
    },
    {
        id: 5,
        rname: "Five Phos",
        imgdata: "https://www.bhavanihomeo.com/wp-content/uploads/2020/09/SBL-Five-Phos-Tablet-6x-25g.jpg",
        price:190,
        qnty:0
    },
    {
        id: 6,
        rname: "Rhus Tox",
        imgdata: "https://www.shophealthy.in/image/cache/sellers/40523/sbl-rhus-toxicodendron-30-ch-30ml-for-sprains-joint-pains-s-889-1000x1000.jpeg",
        price:260,
        qnty:0
    },
    // {
    //     id: 7,
    //     rname: "Pudin Hara",
    //     imgdata: "https://www.dabur.com/img/product/large/39-dabur-pudin-hara.jpg",
    //     price:90,
    //     qnty:0
    // },
    // {
    //     id: 8,
    //     rname: "Broncorid",
    //     imgdata: "https://www.dabur.com/img/product/small/93-dabur-broncorid-syrup-small.jpg",
    //     price:75,
    //     qnty:0
    // },
    
  ];
const Homeopath = () => {
    const [data,setData]=useState(Homeopathic_items);
return (
    <>
     <div className="headAndNav">
          <Header/>
          <Navigation/>
     </div>
    <div className="container mt-3" id="bakery_txt">
    <h2 className="text-center">HOMEOPATHIC</h2>
    <br></br><br></br><br></br>
    <div className="items_shopByCategory">
          <Slider {...settings}>
            {itemname.map((item_shop) => {
              return <ImgSlide item_shop={item_shop} />;
            })}
          </Slider>
    </div>
     <br></br><br></br>
     <div id="bakery_bw_space">
        {
            data.map((element,id)=>{
                return(
                    <>
                <Card id="bakery_full_card" >  
                    <Card.Img id="bakery_image" variant="top" src={element.imgdata} />
                    <Card.Body>
                    <Card.Title id="bakeryCard_title_txt">{element.rname}</Card.Title>
                    <Card.Text>Price : ₹{element.price}, Mfd: {element.mfd}, Exp: {element.expd}</Card.Text>
                    <div>
                    <Button variant="primary"  className='col-lg-12' id="bakeryCard_btn1">Add to cart</Button>
                    </div>
                    </Card.Body>
                 </Card>
                   </>
                )
            })
                
        }
      
    </div>
   <br></br>
  </div>
  <Footer/> 
  </>
      );
  };
  
  export default Homeopath;