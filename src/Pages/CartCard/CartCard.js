import React, {useEffect, useState} from 'react'
import './CartCard.css'
import {deleteDoc, doc, setDoc, updateDoc} from 'firebase/firestore'
import { db } from "../../firebase";
const CartCard = (props) => {

    const [prodquantity, setProdQuantity] = useState(props.itemdata.quantity);


    let p = props.itemdata.product.price
    let mrp=parseInt(p)
    mrp=mrp*prodquantity
    
    const increasequantity = async () => {
        setProdQuantity(prodquantity + 1)

        const itemref = doc(db,`cart-${props.userid}`, `${props.itemdata.id}`)
        await updateDoc(itemref, {
             quantity:prodquantity+1
        }).then(()=>{console.log('changed quantity')})
    }
    const decreasequantity = async () => {
        if (prodquantity >= 1) {
            setProdQuantity(prodquantity - 1)

            const itemref = doc(db,`cart-${props.userid}`, `${props.itemdata.id}`)
        await updateDoc(itemref, {
             quantity:prodquantity-1
        }).then(()=>{console.log('changed quantity')})
        }
    }

    const deletecartitem = async () =>{
        await deleteDoc(doc(db,`cart-${props.userid}`,`${props.itemdata.id}`))
        .then(()=>{
            console.log('doc deleted')
        })
    }


  return (
    <div className='cart-prod-container' style={{maxWidth:'1460px', margin:'0px auto'}}>
        <div className='cart-prod-imgtitle'>
            <div className='prod-image'>
                <img src={props.itemdata.product.productimage}  style={{width:'200px', height:'200px'}}/>
            </div>
            <div className='prod-title'>
                  {props.itemdata.product.producttitle}
            </div>
            <div className='prodquantity-div'>
               <button onClick={increasequantity}>+</button>
               <p>{prodquantity}</p>
               <button onClick={decreasequantity}>-</button>
            </div>
            <div className='prodprice'>₹{mrp}</div>
            <button className='deletebtn' onClick={deletecartitem}>
               <img src='https://play-lh.googleusercontent.com/Si72P4Dn-_54FeMqGtnDOAOwYcHVIAnSzB8OpeYp8BTP0xNUx0S_G4Cv5rxhlNPK2CA'/>
            </button>
        </div>
    </div>
  )
}

export default CartCard
