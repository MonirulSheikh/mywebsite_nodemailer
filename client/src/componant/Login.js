import React ,{useState}from 'react'
import { NavLink,useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
const history=useHistory()


    const [formData, setFormData] = useState({mail:"",pass1:""})
    const IputHandle=(e)=>{

        const {name,value}=e.target
       
        setFormData({...formData,[name]:value})

    }
    const {mail,pass1}=formData
    const submitData=async(eb)=>{
eb.preventDefault()
const res=await fetch("/login",{method:"POST",headers:{
    "Content-Type":"application/json"
},body:JSON.stringify({mail,pass1})})
const data=await res.json()


res.status===200?(history.push("/")):toast.error(data.login,{position:"top-center"})
    }

    return (
        <>
         <div className="container">
             <div className="row mt-3">
                 <div className="col-lg-6 m-auto">

                 <form>

                    

                       {/* Email start*/ }
                     <div className="form-group input-group">
                         <div className="input-group-prepend">
                             <span className="input-group-text"> <i className="fa fa-envelope"></i></span>
                         </div>
                         <input type="text"  name="mail" className="form-control   text-center" placeholder="INTER YOUR EMAIL" value={mail}  onChange={IputHandle}/>
                     </div>
                      {/* Email End*/ } 
                      

                       {/* Password start*/ }
                     <div className="form-group input-group">
                         <div className="input-group-prepend">
                             <span className="input-group-text"> <i className="fa fa-lock"></i></span>
                         </div>
                         <input type="text"  name="pass1" className="form-control   text-center" placeholder="INTER YOUR PASSWORD" onChange={IputHandle}/>
                     </div>
                      {/* Password End*/ }

                      
                         <div className="form-group input-group">
                         <button type ="submit" className="btn btn-outline-primary" onClick={submitData}> Sign In </button>
                         
                         <NavLink to="/register" className=" btn btn-outline-primary m-auto "  >Sign Up</NavLink>


                         </div> 
                     
                  </form>

                 </div>
             </div>
         </div>
         <ToastContainer></ToastContainer>
        </>
    )
}

export default Login
