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
  const {type, id}= useParams()
  const [product, setProduct] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');


  function GetCurrentUser(){
    const [user,setUser]= useState('')
    const userCollectionRef = collection(db, "users")

    useEffect(()=>{
         auth.onAuthStateChanged(userlogged=>{
             if(userlogged){
                 const getUsers = async ()=>{
                   const q = query(collection(db, "users"), where("uid", "==",userlogged.uid))
                // console.log(q)
                const data = await getDocs(q);
                setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})))  
                 }
                 getUsers();
             }
             else{
              setUser(null);
             }
         })
    },[])
    return user
}

const loggeduser = GetCurrentUser();
// if(loggeduser){console.log(loggeduser[0].email)}


  function GetCurrentProduct() {
    
    useEffect(() => {
         const getProduct = async () => {

             const docRef = doc(db, `products-${type.toUpperCase()}`, id);
             const docSnap = await getDoc(docRef);
             setProduct(docSnap.data());
         };
         getProduct();
    }, [])
      return product
  }
   GetCurrentProduct();

   let mrp= parseInt(product.price)
    
   const addtocart = ()=>{
      if(loggeduser){
          addDoc(collection(db, `cart-${loggeduser[0].uid}`),{
             product,quantity:1
          }).then(() => {
             setSuccessMsg('Product added to cart');

          }).catch((error) => {setErrorMsg(error.message) });
      }
      else{
        setErrorMsg('You need to login first')
      }
   }

  return (
    <><div className="headAndNav">
          <Header />
          <Navigation />
      </div>
        <div>
          {product ? <div className='myprod-container1'  style={{marginTop:'40px'}}>
              <div className='prod-img-cont1'>
                  <img src={product.productimage} style={{height:'200px', width:'200px'}}/>
              </div>
              <div className='prod-data1'>
                  <p className='prod-head1'>{product.producttitle}</p>
                  <p className='prod-keyspecs1'>{product.keyspecs}</p>
              </div>
              <div className='specific-price-container1'>
                   <p className='mrp'>MRP: <p className='rate'>₹{mrp}</p></p>
              </div>

             
                 <p className='prod-details1-head'>Details</p>
                 <p className='prod-description1'>{product.description}</p>

              <div className='row-cont'>
                <div className='warranty-replacement'>
                 <div className='cod'>
                     <div className='img-circle'>
                        {/* <img src='https://okcredit-blog-images-prod.storage.googleapis.com/2021/05/cashondelivery1.jpg' style={{width:'150px', height:'50px'}}/> */}
                     </div>
                     <p>Cash on Delivery</p>
                 </div>
                 
                 <div className='warranty'>
                    <div className='img-circle'>
                        <img src=''/>
                    </div>
                    <p>{product.warranty} year warranty</p>
                 </div>

                 <div className='replacement'>
                    <div className='img-circle'>
                        <img src=''/>
                    </div>
                    <p>10 Days replacement</p>
                 </div>

              </div>
              <div className='buy-cart'>
                   <button className='btn'>Buy Now</button>
                   <button className='btn' onClick={addtocart}>Add to Cart</button>
              </div>
              </div>

              {successMsg && <> <div className='success-msg1'>{successMsg}</div> </>}
                        {errorMsg && <> <div className='error-msg1'>{errorMsg}</div> </>}

          </div>: <div>Loading...</div>          }
          </div></>
  )
}

export default Specificprodpage
