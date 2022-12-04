import React from 'react';
import { useEffect, useState } from "react";
import  './Sliders.css';
const img1="https://www.netmeds.com/images/cms/aw_rbslider/slides/1666343732_Home_Banner.jpg";
const img2="https://www.netmeds.com/images/cms/aw_rbslider/slides/1666355540_Home_Bannercold.jpg";
const img3="https://www.netmeds.com/images/cms/aw_rbslider/slides/1666072069_Fitness-Week_wellness_web.jpg";
const img4="https://www.netmeds.com/images/cms/aw_rbslider/slides/1666362146_Home_Bannernms20.jpg";
// const img1="https://www.netmeds.com/images/cms/aw_rbslider/slides/1665579858_Cancer-medicines-order-now.jpg";
// const img2="https://www.netmeds.com/images/cms/aw_rbslider/slides/1665579858_Cancer-medicines-order-now.jpg";
// const img3="https://www.netmeds.com/images/cms/aw_rbslider/slides/1665579858_Cancer-medicines-order-now.jpg";
// const img4="https://www.netmeds.com/images/cms/aw_rbslider/slides/1665579858_Cancer-medicines-order-now.jpg";
const img5="https://www.netmeds.com/images/cms/aw_rbslider/slides/1665579858_Cancer-medicines-order-now.jpg";


const Sliders = () => {


  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState([img1, img2, img3, img4,img5])
   
  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage >3 ? 0 : selectedImage + 1 )
    }, 5000)
  }, [])

  return (
    <div className='slider1' style={{maxWidth:'1480px', margin:'0px auto'}}>
      <img width={'100%'}  src={allImages[selectedImage]} /> <br />
      <button
        onClick={() => {
          if (selectedImage > 0)
            setSelectedImage(selectedImage - 1)
        }}
        style={{marginLeft:'50%'}}>
          prev
      </button>

      <button
        onClick={() => {
          if (selectedImage < allImages.length - 1)
            setSelectedImage(selectedImage + 1)
        }}> 
        next
      </button>
          
    </div>
    );
  };
  
  export default Sliders;


























// import HeroSlider, {Slide} from 'hero-slider';

// const img1="https://www.netmeds.com/images/cms/aw_rbslider/slides/1664979078_Home_Bannerlmkkkk.jpg";
// const img2="https://www.netmeds.com/images/cms/aw_rbslider/slides/1665580084_Cancer_medicines-learn-now.jpg";
// const img3="https://www.netmeds.com/images/cms/aw_rbslider/slides/1664555976_Home_Bannerklkkk.jpg";
// const img4="https://www.netmeds.com/images/cms/aw_rbslider/slides/1665995099_Truuth_Home_page_main_Banner_Web.jpg";

// const Sliders = () => {

//     return (
      
//       <HeroSlider
//          slidingAnimation="left_to_right"
//          orientation="horizontal"
//          initialSlide={1}
//          onBeforeChange={(previousSlide,nextSlide) => console.log("onBeforeChange",previousSlide,nextSlide)}
//          onChange={nextSlide=>console.log("onChange",nextSlide)}
//          onAfterChange={nextSlide=>console.log("onAfterChange",nextSlide)}
//          style={{
//             backgroundColor:"rgba(0,0,0,0.33)"
//          }}
//          settings={{
//              slidingDuration:250,
//              slidingDelay:100,
//              shouldAutoplay:true,
//              shouldDisplayButtons:true,
//              autoplayDuration:3,
//              height:"100vh"
            
//          }}
//       >
//         <Slide
//             background={{
//               backgroundImageSrc:img1,
//               backgroundAttachment:'fixed'
              
//             }}
//         />
//         <Slide
//             background={{
//               backgroundImageSrc:img2,
//               backgroundAttachment:'fixed'
//             }}
//         />
//         <Slide
//             background={{
//               backgroundImageSrc:img3,
//               backgroundAttachment:'fixed'
//             }}
//         />
//         <Slide
//             background={{
//               backgroundImageSrc:img4,
//               backgroundAttachment:'fixed'
//             }}
//         />
//       </HeroSlider>
      
//     );
//   };
  
//   export default Sliders;