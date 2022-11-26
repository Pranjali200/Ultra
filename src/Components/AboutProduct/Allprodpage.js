import React, {useState, useEffect} from 'react'
import Navigation from '../../Common/Navigation/Navigation'
import Header from '../../Common/Header/Header'
import './Allprodpage.css'
import ProdContainer from './ProdContainer'
import { collection, query, onSnapshot, getDocs} from 'firebase/firestore'
import { db } from '../../firebase'
const Allprodpage = (props) => {
    const[products, setProducts]= useState([]);
    useEffect(() => {
     const getProducts = () => {
      const productsArray = [];
      const path = `products-${props.type.toUpperCase()}`;
        //  console.log(path);
  
        getDocs(collection(db, path)).then((querySnapshot)=>{
             querySnapshot.forEach((doc)=>{
                  productsArray.push({...doc.data(),id: doc.id})
                  console.log(doc.id, " => ", doc.data());
            })
            setProducts(productsArray)
        }).catch('Error error error')
      //   ((error)=>{
      //     console.log(error.message);
      //  })
       }
       getProducts()
   }, [])
   console.log(props.type)
  //  console.log(products)
  return (
     <>
     
    <div className="headAndNav">
          <Header />
          <Navigation />
      </div>
    <div className='allproductpage1'>
      
        <div className='heading1'>
             <p>Top Results for {props.type}</p>
        </div>
        <div className='allproductcontainer1'>
              {products.map((product) => (
                  <ProdContainer
                   key={product.id}
                   product={product}
                  />
              ))}
        </div>
      </div>
       </>
  )
}

export default Allprodpage
