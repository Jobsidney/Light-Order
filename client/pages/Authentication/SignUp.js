
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function SignUp() {
const [formData,setData] = useState({});
const[data,setUser]=useState('');

useEffect(()=>{
  fetch('')
  .then(res=>res.json())
  .then(data=>setUser(data))
},[])
  function handleChange(event) {
    const name=event.target.name;
    const value=event.target.value;
    setData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(event) {
    if (data.find(item=>item.email===formData.email)){
      alert('This user Alredy Exist!');
      event.preventDefault();
    }
    else{     
     fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })   
    event.target.reset()
    navigate('/login')
    }

  }


  return (
    <form id="log" action="" onSubmit={handleSubmit}>
        <h2 className="heading">Light Order</h2> 
        <input type="text" name="full_Name" id="username-field" className="login-button" placeholder="Full_Name" onChange={handleChange} required></input>        
        <input type="email" name="email" id="usermail-field" className="login-button" placeholder="Email" onChange={handleChange} required></input> 
        <input type="password" name="password" id="password-field" className="login-button" placeholder="Set Password" onChange={handleChange} required></input> 
        <input type="password" name="password_Confirming" id="password-field2" className="login-button" placeholder="Confirm Password" onChange={handleChange} required></input> 
        <button type='submit' className='log' id='logIn'>Sign Up</button>
    </form>
  )
}

export default SignUp
