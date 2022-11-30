import React from 'react'
import Header from '../../Common/Header/Header'
import Navigation from '../../Common/Navigation/Navigation'
import { useParams } from 'react-router'
import {useState, useEffect} from 'react'
import { auth,db } from '../../firebase'
import { updateProfile } from 'firebase/auth'
import { collection, getDocs, query, where, doc, updateDoc, getDoc, addDoc } from 'firebase/firestore'
import './Specificprodpage.css'
import NewSlider from '../NewSliderFire/NewSlider'

const Specificprodpage = () => {
  const {id,type}= useParams()
  const [product, setProduct] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  function GetCurrentProduct() {

    useEffect(() => {
         const getProduct = async () => {

             const docRef = doc(db, `products-${type.toUpperCase()}, id`);
             const docSnap = await getDoc(docRef);
             setProduct(docSnap.data());
         };
         getProduct();
    }, [])
      return product
  }
   GetCurrentProduct();
  return (
    <><div className="headAndNav">
          <Header />
          <Navigation />
      </div>
        <div>
              <h1>{id}</h1>
              <h1>{type}</h1>
          </div></>
  )
}

export default Specificprodpage
