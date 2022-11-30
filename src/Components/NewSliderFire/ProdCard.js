import React from 'react'
import './ProdCard.css'
import { Link } from 'react-router-dom';
const ProdCard = (product) => {
    let mrp = parseInt(product.product.price);
  return (
    <div className='mini-product-container1' style={{maxWidth:'1460px', margin:'0px auto', marginBottom:'20px'}}>
        <div className='mini-img-container1' >
        {/* style={{width:'500%', height:'500%'}} */}
            <img src={product.product.productimage}  />
        </div>
        <div className='mini-product-details1'>
            <p className='mini-producttitle'>{product.product.producttitle}</p>

            <div className='mini-price-container1'>
                     <p className='mrp'>MRP: <p className='rate'>₹{mrp}</p></p>
            </div>
            {/* <button className='showmore-btn1'>Show more &gt;</button> */}
            <Link to=
            {`/product/${product.product.id}/${product.product.producttitle} /${product.product.brand}
            /${product.product.customersupport}/${product.product.description}/${product.product.price}
            /${product.product.productimage}/${product.product.producttype}/${product.product.warranty}`}
            ><button className='showmore-btn1'>Show more &gt;</button></Link>
        </div>
      {/* <h1>bye</h1> */}
    </div>
  )
}

export default ProdCard
