import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
    const[email,setEmail] = useState('');
    const[passward,setPasswad] = useState('');
 
     const handelSubmit =(e)=>{
        e.preventDefault ();
        try{  
        console.log("email is", email)
        console.log("passward is" ,passward)
        alert("data submit successfuly !")
        navigate('/Home');
        }catch(error){
          alert("Data is not submit ")
          console.log('error');
        }
     }

return(
<div className="form">
    <form onSubmit={handelSubmit}>
        <h2>Login</h2>
        <label>Email</label>
        <input type="text" placeholder="Email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
        <label>passward</label>
        <input type="passward" placeholder="passward" value={passward} onChange={(e)=>setPasswad(e.target.value)}/>
        <input className="btn" type="submit" value="Login"/>
        <p className="para">Don't have account ? <Link to="/Signin"> Signin</Link></p>
        <p className="para">Forget passward ?</p>
    </form>
</div>
);
}

export default Signup;