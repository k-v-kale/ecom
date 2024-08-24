import { Link } from "react-router-dom";
import React,{useState} from "react";

const Signin =()=> {
   
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[passward,setPasswad] = useState('');
 
     const handelSubmit =(e)=>{
        e.preventDefault ();
        console.log("name is", name)
        console.log("email is", email)
        console.log("passward is" ,passward)
      
     }

   return(
   <div className="form">
    <form onSubmit={handelSubmit}>
        <h2>Signin</h2>
        <label>Name</label>
        <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        
        <label>Email</label>
        <input type="text" placeholder="Email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
        <label>passward</label>
        <input type="passward" placeholder="passward" value={passward} onChange={(e)=>setPasswad(e.target.value)}/>
        <input className="btn" type="submit" value="Signin"/>
        <p className="para">Already have account ? <Link to="/"> login</Link></p>
    </form>
</div>
)         
}

export default Signin;