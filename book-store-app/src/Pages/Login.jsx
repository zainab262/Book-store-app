import React from 'react'
import "../styles/login.css"

export default function Login() {
    let handlelogin=()=>{
        try{
            axios
            
        }catch(err){

        }

        


    }
  return (
    
    <div>
      <form className='login-form' onSubmit={handlelogin}>
        <h2>Login Form</h2>
        <input  type='text' placeholder='enter name'></input>
        <input type='password' placeholder='enter password'></input>
        <input type='submit' value="Login"></input>


      </form>
    </div>
  )
}
