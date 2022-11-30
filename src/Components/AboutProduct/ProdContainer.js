import React from 'react'
import './ProdContainer.css'
import { Link } from 'react-router-dom';
const ProdContainer = (product) => {
    let p=product.product
    console.log(p)
    let mrp = parseInt(product.product.price);
    // mrp = mrp;
    

  return (
    // style={{display:'flex', justifyContent:'center', flexDirection:'row', flexWrap:'wrap'}}
    <div className='product-container1' >
        <img src={product.product.productimage} style={{width:'50%', height:'80%'}}></img>
       {/* {product.product.producttitle} */}
       <div className='product-details1'>
          {/* <p className='producttitle1'>{product.product.producttitle}</p> */}
          <Link to={`/product/${p.id}/${product.product.producttitle} /${product.product.brand}
    /${product.product.customersupport}/${product.product.description}/${product.product.price}
    /${product.product.productimage}/${product.product.producttype}/${product.product.warranty}`}>
            <button className='producttitle'>{product.product.producttitle}</button>
          </Link>
          <div className='price-container1'>
            <p className='mrp1'>MRP: <p className='rate1'>₹{mrp}</p></p>
          </div>
          <Link to={`/product/${product.product.producttype}/${product.product.id} `}>
             <button className='showmore-btn'>More details &gt;</button>
          </Link>
          <div className='buy-cart1'>
              <button className='btnprod1'>Buy Now</button>
              <button className='btnprod1'>Add to cart</button>
          </div>
       </div>
    </div>
  )
}

export default ProdContainer
