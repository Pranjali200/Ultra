import React from 'react'
import './ProdContainer.css'
const ProdContainer = (product) => {
    let mrp = parseInt(product.product.price);
    // mrp = mrp;
  return (
    // style={{display:'flex', justifyContent:'center', flexDirection:'row', flexWrap:'wrap'}}
    <div className='product-container1' >
        <img src={product.product.productimage} style={{width:'50%', height:'80%'}}></img>
       {/* {product.product.producttitle} */}
       <div className='product-details1'>
          <p className='producttitle1'>{product.product.producttitle}</p>
          <div className='price-container1'>
            <p className='mrp1'>MRP: <p className='rate1'>₹{mrp}</p></p>
          </div>
          <div className='buy-cart1'>
              <button className='btnprod1'>Buy Now</button>
              <button className='btnprod1'>Add to cart</button>
          </div>
       </div>
    </div>
  )
}

export default ProdContainer
