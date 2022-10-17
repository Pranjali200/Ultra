import React from 'react'
import InputControl from '../InputControl/InputControl';
import styles from './Login.module.css'
import { Link } from 'react-router-dom';
import {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../firebase";
const Login = () => {

  const navigate=useNavigate();
  const [values, setValues] = useState({ email: "", pass: "",}); 

  const [errorMsg, setErrorMsg] = useState(""); 
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;}
    //  console.log(values);
    
    setErrorMsg("");

    setSubmitButtonDisabled(true);  
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
        navigate("/");
      })
      .catch((err) => { 
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        // console.log("Error-", err.message);
      });
      };


    return (
      
      <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}> Login Page</h1>
            <InputControl label="Email" onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          } placeholder="Enter email address"/>
            <InputControl label="Password" onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          } placeholder="Enter Password"/>

            <div className={styles.footer}>
              <b className={styles.error}>{errorMsg}</b>
              <button disabled={submitButtonDisabled} onClick={handleSubmission}> Login </button>
               <p>
                 Don't have an account?{" "}
                <span>
                   <Link to="/signup">Sign up</Link>
                </span>
               </p>
             </div>
        </div>
      </div>
    );
  };
  
  export default Login;