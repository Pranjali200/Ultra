import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Ss.css'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#32aeb1" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#32aeb1" }}
        onClick={onClick}
      />
    );
  }
const dataSlider=[
    {
        // id: 1,
        title: 'Zandu',
        linkImg:'https://static.magicpin.com/storage/blog/images/Zanducare%20Cover.png'
    },
    {
        // id: 2,
        // title: 'y',
        linkImg:'https://m.media-amazon.com/images/S/aplus-media-library-service-media/a16a0043-cf2a-4373-8e49-dd1197a20be4.__CR0,0,1464,600_PT0_SX1464_V1___.jpg'
    },
    {
        id: 3,
        title: 'z',
        linkImg:'https://assets.wam.ae/uploads/2017/11/8003825980164.jpg'
    },
    {
        id: 4,
        title: 't',
        linkImg:'https://www.healthcarebusinessinternational.com/awards/wp-content/uploads/2018/03/bfpfjaw__400x400.jpg'
    },
    {
        id: 5,
        title: 'a',
        linkImg:'https://www.drugwatch.com/wp-content/uploads/pfizer-logo.png'
    },
    {
        id: 6,
        title: 'b',
        linkImg:'https://gumlet.assettype.com/nationalherald%2F2022-07%2F379739af-b2b5-4457-8d90-04de22c16cdb%2FMicro_Labs_Ltd.jpeg?rect=0%2C0%2C1200%2C675&format=auto'
    },
    {
        id: 7,
        title: 'c',
        linkImg:'https://media.licdn.com/dms/image/C510BAQGn7vlJBCzuaA/company-logo_200_200/0/1519885764471?e=2147483647&v=beta&t=0bssBP4OGxflAKmyKHgIJkAzTSBmbDxRVWk2ZOwgFu8'
    },
    {
        id: 8,
        title: 'd',
        linkImg:'https://cdn.cookielaw.org/logos/9eb64978-23c0-4924-97a4-03eb6aab1106/42b7e788-72a8-402b-abb4-8e095a696386/472e7c95-4717-4044-ac85-5a696ef95d4a/Cetaphil_Logo.jpg'
    },
]
// const Ss = () => {
    function Ss(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
return (
      <div className="Appslide" style={{maxWidth:'1460px', margin:'0px auto'}}>
         {/* <h1>hii</h1> */}
        <Slider {...settings}>
          {dataSlider.map(item=>(
             <div className='Appcard'>
               <div className='Appcard-top'>
                <img src={item.linkImg} alt={item.title}/>
                <h1>{item.title}</h1>
               </div>
               <div className='Appcard-bottom'>
                <h3>{item.id}</h3>
               </div>
             </div>
          ))}
        </Slider>
        </div>
      );
  };
  
  export default Ss;