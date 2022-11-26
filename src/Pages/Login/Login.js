// import React from 'react'
//  import InputControl from '../InputControl/InputControl';
// import styles from './Login.module.css'
// import { Link } from 'react-router-dom';
// import {useState} from 'react';
// import { useNavigate} from 'react-router-dom';
// import { signInWithEmailAndPassword} from "firebase/auth";
// import { auth } from "../../firebase";
// const Login = () => {

//   const navigate=useNavigate();
//   const [values, setValues] = useState({ email: "", pass: "",}); 

//   const [errorMsg, setErrorMsg] = useState(""); 
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

//   const handleSubmission = () => {
//     if (!values.email || !values.pass) {
//       setErrorMsg("Fill all fields");
//       return;}
    //  console.log(values);
    
    //setErrorMsg("");

  //   setSubmitButtonDisabled(true);  
  //   signInWithEmailAndPassword(auth, values.email, values.pass)
  //     .then(async (res) => {
  //       setSubmitButtonDisabled(false);
        
  //       navigate("/");
  //     })
  //     .catch((err) => { 
  //       setSubmitButtonDisabled(false);
  //       setErrorMsg(err.message);
        
  //     });
  //     };


  //   return (
      
  //     <div className={styles.container}>
  //       <div className={styles.innerBox}>
  //           <h1 className={styles.heading}> Login Page</h1>
  //           <InputControl label="Email" onChange={(event) =>
  //           setValues((prev) => ({ ...prev, email: event.target.value }))
  //         } placeholder="Enter email address"/>
  //           <InputControl label="Password" onChange={(event) =>
  //           setValues((prev) => ({ ...prev, pass: event.target.value }))
  //         } placeholder="Enter Password"/>

  //           <div className={styles.footer}>
  //             <b className={styles.error}>{errorMsg}</b>
  //             <button disabled={submitButtonDisabled} onClick={handleSubmission}> Login </button>
  //              <p>
  //                Don't have an account?{" "}
  //               <span>
  //                  <Link to="/signup">Sign up</Link>
  //               </span>
  //              </p>
  //            </div>
  //       </div>
  //     </div>
  //   );
  // };
  
  // export default Login;


import React, {useState} from 'react'
import { Link,  useNavigate} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
//import {auth, db} from "../../firebase";
//import { collection, addDoc } from 'firebase/firestore';
import './Login.css'
  const Login = () => {

       const [password, setPassword]=useState("")
       const [email, setEmail]=useState("")
       const [errorMsg,setErrorMsg]=useState("")
       const [successMsg,setSuccessMsg]=useState("")
       const auth=getAuth();
       const navigate=useNavigate()

       const handleLogin= (e)=>{
          e.preventDefault()
          signInWithEmailAndPassword(auth, email, password)
          .then((userCredential)=>{
             setSuccessMsg('Logged in successfully, you will be redirected to home page')

                 setEmail('')
                 setPassword('')
                 setErrorMsg('')
                 setTimeout(()=>{
                     setSuccessMsg('');
                     navigate('/');
                  },3000);
          })
          .catch((error)=>{
            const errorCode=error.code;
            console.log(error.message)
            if(error.message =='Firebase: Error(auth/invalid-email).'){
                setErrorMsg('Please fill all required fields')
            }
            if(error.message == 'Firebase: Error(auth/user-not-found).'){
              setErrorMsg('Email not found');
            }
            if(error.message == 'Firebase: Error(auth/wrong-password).'){
               setErrorMsg('Wrong Password');
            }
          });
       }

    return (
      <div>
       <div className='login-container1' id="sc2">
        <form className='login-form1'>
           <p>Login</p>
            {successMsg && <>
                  <div className='success-msg2'>
                    {successMsg}
                  </div></>}
            {errorMsg && <>
                  <div className='error-msg2'>
                     {errorMsg}
                  </div></>}

           <label>Email</label>
           <input onChange={(e) => setEmail(e.target.value)} 
           type='email' placeholder='Enter your email'></input>

           <label>Password</label>
           <input onChange={(e) => setPassword(e.target.value)} 
           type='password' placeholder='Enter your password'></input>

           
           <button onClick={handleLogin}>Login</button>

           <div>
               <span>Don't have an account?</span>
               <Link to='/signup'>Sign Up</Link>
           </div>
      </form>
    </div>
      </div>
    )
  }
  
  export default Login;
  