import React, {useState, useEffect} from 'react'
import { auth,db } from '../../firebase'
import { updateProfile } from 'firebase/auth'
import { collection, getDocs, query, where, doc, updateDoc } from 'firebase/firestore'
import './Userprofile.css'
import Header from '../../Common/Header/Header'
import Navigation from '../../Common/Navigation/Navigation'
const Userprofile = () => {

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
                  setUser(null)
                 }
             })
        },[])
        return user
  }

  const loggeduser = GetCurrentUser();
  if(loggeduser){console.log(loggeduser[0].email)}


  return (
    <><div className="headAndNav">
          <Header />
          <Navigation />
      </div><div>
              <div className='userprofile-outercontainer1'>
                  {loggeduser ? <div className='userprofile1'>
                      <p>Your Account Details</p>

                      <div className='data-row1'>
                          <span> Name: </span>
                          <span>{loggeduser[0].username}</span>
                      </div>
                      <div className='data-row1'>
                          <span> Email: </span>
                          <span>{loggeduser[0].email}</span>
                      </div>
                      <div className='data-row1'>
                          <span> Mobile Number: </span>
                          <span>{loggeduser[0].phonenumber}</span>
                      </div>
                      <div className='data-row1'>
                          <span> Address: </span>
                          <span>{loggeduser[0].address}</span>
                      </div>
                  </div> :
                      <div>
                          You are not Logged In
                      </div>}
              </div>
          </div></>
  )
}

export default Userprofile
