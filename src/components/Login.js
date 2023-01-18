import React from 'react'
import {auth,provider} from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

     let navigate=useNavigate();
console.log("login page")

async function loginf(){
     console.log("login before")
     try{
    let user=await signInWithPopup(auth,provider)
    console.log(user);
   navigate("/")
     }catch(error){

     }
   
     console.log("login")
}


  return (
    <div className='lognpage'>
    <h1>Login Here</h1>    
    <br/>
    <button onClick={loginf} className='loginbtn'>login</button>
    </div>
  )
}

export default Login