import React from 'react'
import { useNavigate } from 'react-router';
import Navigation from '../../Common/Navigation/Navigation';
import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import  {useState, useEffect} from 'react'
import { auth,db, storage } from '../../firebase'
import { updateProfile } from 'firebase/auth'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { collection, getDocs, query, where,addDoc } from 'firebase/firestore'
import './AddProducts.css'
const AddProducts = () => {

   const [producttitle, setProductTitle] = useState('');
   const [producttype, setProductType] = useState('');
   const [description, setDescription] = useState('');
   const [brand, setBrand] = useState('');
   const [customersupport, setCustomersupport] = useState('');
   const [price, setPrice] = useState('');
   const [warranty, setWarranty] = useState('');
   const [productimage, setProductImage] = useState('');
   const [imageError, setImageError] = useState('');
   const [successMsg, setSuccessMsg] = useState('');
   const [uploadError, setUploadError] = useState('');

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
   const types=['image/jpg','image/jpeg','image/png', 'image/PNG']

   const handleProductImg = (e)=>{
       e.preventDefault();
       let selectedFile = e.target.files[0];

       if(selectedFile){
           if(selectedFile && types.includes(selectedFile.type)){
                setProductImage(selectedFile);
                setImageError('')
           }
           else{
            setProductImage(null)
            setImageError('please select a valid image file type(png or jpg)')
           }
       }
       else{
            setImageError('please select your file')
       }
   }


const loggeduser = GetCurrentUser();
//  if(loggeduser){console.log(loggeduser[0].username)}   ->this is done for checking into console if the data is coming or not

    const handleAddProduct = (e) =>{
               e.preventDefault();
               const storageRef= ref(storage, `product-images${producttype.toUpperCase()}/${Date.now()}`)
               //console.log(storageRef._location.path)
               uploadBytes(storageRef,productimage)
               .then(()=>{
                  getDownloadURL(storageRef).then(url=>{
                      addDoc(collection(db,`products-${producttype.toUpperCase()}`),{
                        producttitle,
                        producttype,
                        description,
                        brand,
                        customersupport,
                        price,
                        warranty,
                        productimage: url  
                     })
                      
                  })
               })
               
    }

   return (
     
      <>
      <div className="headAndNav">
         <Header />
         <Navigation />
      </div>
      <div>
           {loggeduser && loggeduser[0].email == "Katrina@gmail.com"?
               <div className='addprod-container1'>
                  <form className='addprod-form1' onSubmit={handleAddProduct}> 
                        <p>Add Data</p>
                        {successMsg && <div className='success-msg1'>{successMsg}</div>}
                        {uploadError && <div className='error-msg1'>{uploadError}</div>}

                         <label>Product Title</label>
                         <input onChange={(e)=>setProductTitle(e.target.value)} 
                            type='text' placeholder='Product Title'/>

                         <label>Product Type</label>
                         <input onChange={(e)=>setProductType(e.target.value)} 
                            type='text' placeholder='Product Type'/>  

                         <label>Brand Name</label>
                         <input onChange={(e)=>setBrand(e.target.value)}
                            type='text' placeholder='Brand Name'/>

                         <label>Warranty</label>
                         <input onChange={(e)=>setWarranty(e.target.value)} 
                            type='text' placeholder='Product Warranty'/>   

                          <label>Image</label>
                         <input onChange={handleProductImg} 
                            type='file' /> 
                            {imageError && <>
                                <div className='error-msg1'>{imageError}</div>
                            </>}  

                            <label>Description</label>
                            <textarea onChange={(e) => setDescription(e.target.value)}
                            placeholder = "Description your product in brief"></textarea>
                            <label>Price Without Tax - </label> 
                            <input onChange={(e) => setPrice(e.target.value)} type='text'
                            placeholder='Enter Price without tax '/>
                            <label>Customer Support</label> 
                            <input onChange={(e) => setCustomersupport(e.target.value)} type='text'
                            placeholder='Customer support email, phone or address '/>

                            <button type='submit'>Add</button>
                  </form>
               </div> : <div> You don't have access to add products</div>  }
   <Footer/>
         </div></>
    );
  };
  
  export default AddProducts;