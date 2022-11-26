import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Slider from 'react-slick';


import ImgSlide from '../Ayurveda/ImgSlide';
import { useState } from 'react';
import './Allo.css'

import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import Navigation from '../../Common/Navigation/Navigation';

const itemname=[
  {
    id:1,
    cover:"https://www.silverlightdigital.com/wp-content/uploads/2016/01/pharma_healthcare_banner.jpg",
  },
    {
      id:2,
      cover:"https://webocity.in/wp-content/uploads/2018/09/pharmaceutical-banner-min.jpg",
    },
    
  ]
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const Allopathic_items = [
    {
        id: 1,
        rname: "Benedryl Cough Syrup",
        imgdata: "http://cdn.shopify.com/s/files/1/0001/9418/3221/products/Benadrylcoughsyup.jpg?v=1650545372",
        price:190,
        qnty:0,
        expd: 2023,
        mfd:2022
    },
    {
        id: 2,
        rname: "Asthakind Cough Syrup",
        imgdata: "https://meds.myupchar.com/42994/Asthakind_Expectorant_Sugar_Free-1.jpg",
        price:260,
        qnty:0
    },
    {
        id: 3,
        rname: "Dolo 650",
        imgdata: "https://media.thekashmirmonitor.net/wp-content/uploads/2022/08/Capture.jpg",
        price:90,
        qnty:0
    },
    {
        id: 4,
        rname: "Naxdom 500",
        imgdata: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/v5jwr5e1z7fjeruopjo7.jpg",
        price:75,
        qnty:0
    },
    {
        id: 5,
        rname: "Lopamide",
        imgdata: "https://24x7pharma.com/wp-content/uploads/2022/03/0004965_lopamide-2mg-tablet-10s.jpeg",
        price:190,
        qnty:0
    },
    {
        id: 6,
        rname: "Oflin",
        imgdata: "https://newassets.apollo247.com/pub/media/catalog/product/o/f/ofl0139.jpg",
        price:260,
        qnty:0
    },
    {
        id: 7,
        rname: "Azithral",
        imgdata: "https://www.netmeds.com/images/product-v1/600x600/405880/azithral_500mg_tablet_5s_0_1.jpg",
        price:90,
        qnty:0
    },
    {
        id: 8,
        rname: "Laveta m",
        imgdata: "https://5.imimg.com/data5/QG/XP/MY-8336070/laveta-m-tablet-500x500.jpg",
        price:75,
        qnty:0
    },
    
  ];
const Allo = () => {
    const [data,setData]=useState(Allopathic_items);
return (
    <>
     <div className="headAndNav">
          <Header/>
          <Navigation/>
     </div>
    <div className="container mt-3" id="bakery_txt">
    <h2 className="text-center">ALLOPATHIC <i>~ Modern medicine</i></h2>
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
  
  export default Allo;