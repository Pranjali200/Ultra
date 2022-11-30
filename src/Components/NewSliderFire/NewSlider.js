import React from 'react'
import  {useState, useEffect} from 'react'
import Navigation from '../../Common/Navigation/Navigation'
import Header from '../../Common/Header/Header'
import { collection, query, onSnapshot, getDocs} from 'firebase/firestore'
import { db } from '../../firebase'
import './NewSlider.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProdCard from './ProdCard'
const NewSlider = (props) => {
 
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

   const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <div> 
     <Carousel responsive={responsive}>
          {products.map((product)=>
          (<ProdCard key={product.id} product={product}/>)
            )}
     </Carousel>
    </div>
  )
}

export default NewSlider
