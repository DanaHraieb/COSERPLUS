import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
function Login() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  
  });
 const [Email, setEmail]= useState("");
 const [Motpasse, setMotpasse]= useState("");
 
const onSubmit = (e)=>{
    e.preventDefault();
    console.log(Email,Motpasse)
    alert("evoyé avec success!!!")
    
}
  return (
    <div className="contact" style={{ paddingTop:"200px"}}>
  <div className="container">
    <div className="row ">
      <div className="col-md-8 offset-md-2">
        <div className="titlepage text_align_left">
          <h2>Login</h2>
        </div>
        <form onSubmit={onSubmit} id="request" className="main_form">
          <div className="row">
            
            <div className="col-md-12">
              <input className="contactus" placeholder="Email"onChange={e=>{setEmail(e.target.value);console.log(e.target.value)}} type="type" name="Email" />                          
            </div>
            <div className="col-md-12">
              <input className="contactus" placeholder="Motpasse"onChange={e=>{setMotpasse(e.target.value);console.log(e.target.value)}} type="type" name="Motpasse" />                          
            </div>
            <div className="col-md-12">
              <button type='submit' className="send_btn">Envoyer</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default Login
