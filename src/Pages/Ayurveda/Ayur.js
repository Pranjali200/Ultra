import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Slider from 'react-slick';

import ImgSlide from './ImgSlide';
import { useState } from 'react';
import './Ayur.css'
// import Allo from '../Allopathic/Allo.css';

import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import Navigation from '../../Common/Navigation/Navigation';

const itemname=[
    {
      id:1,
      cover:"https://www.kamaayurveda.com/_next/image?url=https%3A%2F%2Fwww.kamaayurveda.com%2Fimages%2Fbanner%2FKama_Nov-2022_Bringadi-Ritual_Webloader_2800x800px.jpg&w=1920&q=75",
    },
    {
      id:2,
      cover:"https://www.kamaayurveda.com/_next/image?url=https%3A%2F%2Fwww.kamaayurveda.com%2Fimages%2Fbanner%2FKama_Oct-2022_AM-PM_Desktop_2800x800px.gif&w=1920&q=75",
    },
    {
      id:3,
      cover:"https://www.kamaayurveda.com/_next/image?url=https%3A%2F%2Fwww.kamaayurveda.com%2Fimages%2Fbanner%2FKama_Oct-2022_Body-Oils_Webloader_2800x800px.jpg&w=1920&q=75",
    },
    {
      id:4,
      cover:"https://www.patanjaliayurved.net/assets/img/Ayurvedic_Medicine.jpg"
    },
  ]
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const Ayurved_items = [
    {
        id: 1,
        rname: "Ayush Kwanth",
        imgdata: "https://www.suayu.com/pub/media/catalog/product/cache/1/small_image/280x280/beff4985b56e3afdbeabfc89641a4582/a/y/ayush_kwath_1_1.png",
        price:190,
        qnty:0,
        expd: 2023,
        mfd:2022
    },
    {
        id: 2,
        rname: "Gulkand",
        imgdata: "https://sandu.in/wp-content/uploads/2022/02/Untitled-1-1-1.png",
        price:260,
        qnty:0
    },
    {
        id: 3,
        rname: "Tulsi Ghanvati",
        imgdata: "https://www.patanjaliayurved.net/assets/product_images/400x500/1505298952400%20x%20500%20Tulsi%20Ghan%20Vati.png",
        price:90,
        qnty:0
    },
    {
        id: 4,
        rname: "Swet Mushli Churna",
        imgdata: "https://www.faydeornuksan.com/wp-content/uploads/2022/03/%E0%A4%AA%E0%A4%A4%E0%A4%82%E0%A4%9C%E0%A4%B2%E0%A4%BF-%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A5%87%E0%A4%A4-%E0%A4%AE%E0%A5%82%E0%A4%B8%E0%A4%B2%E0%A5%80-%E0%A4%9A%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%A3-Patanjali-Swet-Musli-Churna.png",
        price:75,
        qnty:0
    },
    {
        id: 5,
        rname: "Chyavanprash",
        imgdata: "https://www.nutraingredients-asia.com/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/publications/food-beverage-nutrition/nutraingredients-asia.com/news/research/covid-19-and-ayurveda-trial-fmcg-giant-dabur-india-to-trial-flagship-formula-on-600-people/11415608-1-eng-GB/COVID-19-and-Ayurveda-trial-FMCG-giant-Dabur-India-to-trial-flagship-formula-on-600-people.png",
        price:190,
        qnty:0
    },
    {
        id: 6,
        rname: "Dabur vasavaleh",
        imgdata: "https://5.imimg.com/data5/AH/TG/MY-2928873/ayurvedic-medicine-500x500.jpg",
        price:260,
        qnty:0
    },
    {
        id: 7,
        rname: "Pudin Hara",
        imgdata: "https://www.dabur.com/img/product/large/39-dabur-pudin-hara.jpg",
        price:90,
        qnty:0
    },
    {
        id: 8,
        rname: "Broncorid",
        imgdata: "https://www.dabur.com/img/product/small/93-dabur-broncorid-syrup-small.jpg",
        price:75,
        qnty:0
    },
    
  ];
const Ayur = () => {
    const [data,setData]=useState(Ayurved_items);
return (
    <>
     <div className="headAndNav">
          <Header/>
          <Navigation/>
     </div>
    <div className="container mt-3" id="bakery_txt">
    <h2 className="text-center">AYURVEDA <i>~ The cure from nature</i></h2>
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
  
  export default Ayur;