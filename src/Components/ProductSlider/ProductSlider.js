import React from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./ProductSlider.css";
import PsCard from "../ProdSliderCard/PsCard";
import slideImg1 from './slideImg1.jpg'
 const ProductSlider = () => {
  return (
    <div className="container py-4 px-4 justify-content-center">
         <h1>Product Slider</h1>
         <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            // breakpoints={{
            //     0: {
            //         sliderPerView:1,
            //         spaceBetween:10,
            //     },
            //     480: {
            //         sliderPerView:2,
            //         spaceBetween:10,
            //     },
            //     768: {
            //         sliderPerView:3,
            //         spaceBetween:15,
            //     },
            //     1024: {
            //         sliderPerView:4,
            //         spaceBetween:15,
            //     },
            //     1280: {
            //         sliderPerView:5,
            //         spaceBetween:30,
            //     },
            // }}
            slidesPerView={4}
            spaceBetween={40}
         >
            <SwiperSlide>
                <PsCard data={{imgSrc: slideImg1, price: '₹400', title: 'absorb'}}/>
            </SwiperSlide>
            <SwiperSlide>
                <PsCard data={{imgSrc: 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1664112406_omron_mini_banners_web.jpg', price: '₹400', title: 'absorb'}}/>
            </SwiperSlide>
            <SwiperSlide>
                 <PsCard data={{imgSrc: 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1665742857_Dabur_Home.jpg', price: '₹400', title: 'absorb'}}/>
            </SwiperSlide>
            <SwiperSlide>
                 <PsCard data={{imgSrc: 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1665167141_nixit_Mini_banner_web.jpg', price: '₹400', title: 'absorb'}}/>
            </SwiperSlide>
            <SwiperSlide>
                 <PsCard data={{imgSrc: 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1665769758_CF_Mini_banner_web.jpg', price: '₹400', title: 'absorb'}}/>
            </SwiperSlide>
            <SwiperSlide>
                <PsCard data={{imgSrc: slideImg1, price: '₹400', title: 'absorb'}}/>
            </SwiperSlide>
            <SwiperSlide>
                <PsCard data={{imgSrc: slideImg1, price: '₹400', title: 'absorb'}}/>
            </SwiperSlide>

         </Swiper>
    </div>
  );
};

export default ProductSlider;