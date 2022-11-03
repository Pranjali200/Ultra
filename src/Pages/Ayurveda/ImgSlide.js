import React from 'react'
const ImgSlide = ({item_shop}) => {
    return(
        <><div className='whatNew2'>
             <div className='itemsHere2' >
                <img src={item_shop.cover} className='itemImage2' alt={item_shop.title} style={{marginLeft:'5%'}}/>
             </div>
             <div className='itemTitle2'>{item_shop.title}</div>
          </div>
          
    </>
    )
};
  
  export default ImgSlide;