import React, {useState, useEffect} from 'react'
import Navigation from '../../Common/Navigation/Navigation'
import { auth, db } from '../../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import './Cart.css'
import Header from '../../Common/Header/Header'
import CartCard from '../CartCard/CartCard'
import { Link } from 'react-router-dom'
const Cart = () => {

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
                 };
                 getUsers();
             }
             else{
              setUser(null)
             }
         })
    },[])
    return user
}

const loggeduser = GetCurrentUser();
// if(loggeduser){console.log(loggeduser[0].email)}
const [cartdata, setcartdata] = useState([]);
if(loggeduser) {
  const getcartdata = async () => {
      const cartArray = [];
      const path = `cart-${loggeduser[0].uid}`
      // console.log(path)
      getDocs(collection(db, path)).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          //console.log(doc.id, " => ", doc.data());
          cartArray.push({ ...doc.data(), id: doc.id})
        });
        setcartdata(cartArray)
        //console.log('done')
      }).catch('Error error error')
  }
  getcartdata()
}

return (
    <div>
      <Header/>
      <Navigation/>
      {
        cartdata.length != 0 ? <div>
            <div className='cart-head' style={{maxWidth:'1460px', margin:'0px auto'}}>Your Cart Items</div>
            <div className='allcartitems'>{cartdata.map((item) => (
                 <CartCard key={item.id} itemdata={item} userid={loggeduser[0].uid}/>
            ))}</div>
            <div className='proceed'>
                 <button>
                     <Link to=''>Proceed</Link>
                  </button>
            </div>
        </div> : <p>Your cart is empty</p>
      }
      
    </div>
  )
}

export default Cart;