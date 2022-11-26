// import React, {useState} from 'react'
// import InputControl from '../InputControl/InputControl';
// import styles from './Signup.module.css'
// import { Link ,useNavigate} from 'react-router-dom';
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from "../../firebase";
// const Signup = () => {
//    const navigate=useNavigate();
//   const [values, setValues] = useState({ name: "", email: "", pass: "",}); 

//   const [errorMsg, setErrorMsg] = useState(""); 
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

//   const handleSubmission = () => {
//     if (!values.name || !values.email || !values.pass) {
//       setErrorMsg("Fill all fields");
//       return;}
//     //  console.log(values);
    
//     setErrorMsg("");

//     setSubmitButtonDisabled(true);  
//     createUserWithEmailAndPassword(auth, values.email, values.pass)
//       .then(async (res) => {
//         setSubmitButtonDisabled(false);
//         const user = res.user;
//         await updateProfile(user, {
//           displayName: values.name,
//         });
//         navigate("/");
//       })
//       .catch((err) => { 
//         setSubmitButtonDisabled(false);
//         setErrorMsg(err.message);
//         // console.log("Error-", err.message);
//       });
//       };

//     return (
      
//       <div className={styles.container}>
//         <div className={styles.innerBox}>
//             <h1 className={styles.heading}> Signup Page</h1>
//             <InputControl label="Name" placeholder="Enter your name"    
//               onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}/>
//             <InputControl label="Email" placeholder="Enter email address"
//               onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}/>
//             <InputControl label="Password" placeholder="Enter Password" 
//               onChange={(event) =>setValues((prev) => ({ ...prev, pass: event.target.value }))}/>
            
//            <div className={styles.footer}>
//            <b className={styles.error}>{errorMsg}</b>
//                <button onClick={handleSubmission}  disabled={submitButtonDisabled}> Signup </button>
//                <p>
//                  Already have an account?{" "}
//                 <span>
//                    <Link to="/login">Login</Link>
//                 </span>
//                </p>
//              </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Signup;

import React, {useState} from 'react'
import { Link,  useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "../../firebase";
import { collection, addDoc } from 'firebase/firestore';
import './Signup.css';
const Signup = () => {

       const [username, setUsername]=useState("");
       const [password, setPassword]=useState("");
       const [email, setEmail]=useState("");
       const [phonenumber, setPhonenumber]=useState("");
       const [address, setAddress]=useState("");

       const navigate=useNavigate();

       const [errorMsg,setErrorMsg]=useState("")
       const [successMsg,setSuccessMsg]=useState("")

       const handleSubmit = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user = userCredential.user;
            const initialcartvalue=0;
            console.log(user);
            addDoc(collection(db, "users"), {
              username: username, email: email, phonenumber: phonenumber,
              password: password, cart: initialcartvalue, address: address,
              uid: user.uid
            }).then(()=>{
                 setSuccessMsg('New user added successfully, You will now be automatically redirected to login page')
                 setUsername('')
                 setPhonenumber('')
                 setEmail('')
                 setPassword('')
                 setErrorMsg('')
                 setTimeout(()=>{
                     setSuccessMsg('');
                     navigate('/login');
                  },4000);
            })
            .catch((error)=>{setErrorMsg(error.message)});
        })
        .catch((error)=>{
          if(error.message == 'Firebase: Error (auth/invalid-email).'){
            setErrorMsg('Please fill all required fields')
          }
          if(error.message == 'Firebase: Error (auth/email-already-in-use') {
             setErrorMsg('User already exists');
          }
        })

      }

  return (
    // <div className='login-container1' id="sc1">
    //     <form className='login-form1' onSubmit={handleSubmit}>
    //        <p>Create Account</p>
    //         {successMsg && <>
    //               <div className='success-msg1'>
    //                 {successMsg}
    //               </div></>}
    //         {errorMsg && <>
    //               <div className='error-msg1'>
    //                  {errorMsg}
    //               </div></>}

    //        <label>Your Name</label>
    //        <input onChange={(e)=>setUsername(e.target.value)} 
    //        type='text' placeholder='first and last name'/>

    //        <label>Mobile Number</label>
    //        <input onChange={(e) => setPhonenumber(e.target.value)} 
    //        type='tel' placeholder='Mobile Number'></input>

    //        <label>Email</label>
    //        <input onChange={(e) => setEmail(e.target.value)} 
    //        type='email' placeholder='Enter your email'></input>

    //        <label>Password</label>
    //        <input onChange={(e) => setPassword(e.target.value)} 
    //        type='password' placeholder='Enter your password'></input>

    //        <label>Address</label>
    //        <textarea onChange={(e) => setAddress(e.target.value)} 
    //        placeholder='enter your address'></textarea>
           
    //        <button type='submit'>Sign up</button>

    //        <div>
    //            <span>Already have an account?</span>
    //            <Link to='/login'>Sign In</Link>
    //        </div>
    //   </form>
    // </div>
    <div className='signup-container1' id="sc1">
    <form className='signup-form1' onSubmit={handleSubmit}>
       <p>Create Account</p>
        {successMsg && <>
              <div className='success-msg1'>
                {successMsg}
              </div></>}
        {errorMsg && <>
              <div className='error-msg1'>
                 {errorMsg}
              </div></>}

       <label>Your Name</label>
       <input onChange={(e)=>setUsername(e.target.value)} 
       type='text' placeholder='first and last name'/>

       <label>Mobile Number</label>
       <input onChange={(e) => setPhonenumber(e.target.value)} 
       type='tel' placeholder='Mobile Number'></input>

       <label>Email</label>
       <input onChange={(e) => setEmail(e.target.value)} 
       type='email' placeholder='Enter your email'></input>

       <label>Password</label>
       <input onChange={(e) => setPassword(e.target.value)} 
       type='password' placeholder='Enter your password'></input>

       <label>Address</label>
       <textarea onChange={(e) => setAddress(e.target.value)} 
       placeholder='enter your address'></textarea>
       
       <button type='submit'>Sign up</button>

       <div>
           <span>Already have an account?</span>
           <Link to='/login'>Sign In</Link>
       </div>
  </form>
</div>
  )
}

export default Signup;
