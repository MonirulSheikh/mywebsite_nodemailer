import React ,{useState,useEffect}from 'react'
import { NavLink ,useHistory} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Register = () => {

    const [respon, setRespon] = useState()
    const history=useHistory()
const [inputData, setInputData] = useState({fname:"",email:"",phone:"",pass:"",cpass:""})
const inputHandler=(event)=>{

    const {name,value}=event.target
 setInputData({...inputData,[name]:value})

}
const senddata=async(e)=>{

    e.preventDefault()
const {fname,email,phone,pass,cpass}=inputData;

const res=await fetch("/register",{method:"POST",headers:{
    "content-Type":"application/json"
},body:JSON.stringify({fname,email,phone,pass,cpass})})

const data= await res.json()
if(res.status===200){
    setRespon(data.succes)
}
    
res.status===200?( history.push("/login")):(toast.error(data.ans,{position:"top-center"}))
//console.log(data.ans)
//console.log(data.succes)


}
useEffect(() => {
  
}, [])
    return (
        <>
        
            <div className="container">
             <div className="row mt-3">
                 <div className="col-lg-6 m-auto">

                 <form method="POST">

                     {/* Name start*/ }
                     <div className="form-group input-group">
                         <div className="input-group-prepend">
                             <span className="input-group-text"> <i className="fa fa-user"></i></span>
                         </div>
                         <input type="text"  name="fname" className="form-control   text-center" onChange={inputHandler} placeholder="INTER YOUR NAME" />
                     </div>
                      {/* Name End*/ }

                       {/* Email start*/ }
                     <div className="form-group input-group">
                         <div className="input-group-prepend">
                             <span className="input-group-text"> <i className="fa fa-envelope"></i></span>
                         </div>
                         <input type="text"  name="email" className="form-control   text-center" placeholder="INTER YOUR EMAIL" onChange={inputHandler}  />
                     </div>
                      {/* Email End*/ } 
                       {/* Phone start*/ }
                     <div className="form-group input-group">
                         <div className="input-group-prepend">
                             <span className="input-group-text"> <i className="fa fa-phone"></i></span>
                         </div>
                         <input type="text"  name="phone" className="form-control   text-center" placeholder="INTER YOUR PHONE NUMBER" onChange={inputHandler}  />
                     </div>
                      {/* Phone End*/ }

                       {/* Password start*/ }
                     <div className="form-group input-group">
                         <div className="input-group-prepend">
                             <span className="input-group-text"> <i className="fa fa-lock"></i></span>
                         </div>
                         <input type="text"  name="pass" className="form-control   text-center" placeholder="INTER YOUR PASSWORD" onChange={inputHandler}  />
                     </div>
                      {/* Password End*/ }

                       {/* CONFORM  Password start*/ }
                     <div className="form-group input-group">
                         <div className="input-group-prepend">
                             <span className="input-group-text"> <i className="fa fa-lock"></i></span>
                         </div>
                         <input type="text"  name="cpass" className="form-control   text-center" placeholder="INTER YOUR CONFORM PASSWORD" onChange={inputHandler}  />
                     </div>
                      {/* CONFORM  Password End*/ }
                         <div className="mx-sm-auto">
                         <div className="row">
                             <div className="col-lg-4 col-sm-12 ">
                                 <button  className="btn btn-outline-primary" type="submit" onClick={senddata}>Sign up</button>
                             </div>
                             <div className="col-lg-4   col-sm-12 ">
                                      
                                 <p>Alredy Sign Up?</p>
                             </div>
                             <div className="col-lg-4   col-sm-12 ">
                                      
                                 <NavLink to="/login" className="btn btn-outline-primary ">Sign In</NavLink>
                             </div>

                         </div>

                         
                         </div>
                     
                  </form>

                 </div>
             </div>
         </div>
         <ToastContainer></ToastContainer>
        </>
    )
}

export default Register
